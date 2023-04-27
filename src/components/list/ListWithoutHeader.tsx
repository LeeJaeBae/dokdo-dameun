import styled from 'styled-components/native';
import {useEffect, useState} from 'react';
import {Bold, TextNormal, TextSmall, TextTiny} from '@/atoms/text';
import {theme} from '@/style/theme';
import FlexBox from '@/atoms/containers/FlexBox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import FlexGrow from '@/atoms/containers/FlexGrow';
import {View} from 'react-native';
import CouponModal from '@/atoms/Modal/Coupon';
import {useCategory} from '@/lib/context/CategoryContext';
import ItemLong from '@/components/list/item/ItemLong';

export default function ListWithoutHeader(props: any) {
    const {params} = props.route;
    const navigation = props.navigation;

    const {selectedCategory: category, getUrl} = useCategory();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setData(props.route.params.items);
    }, [props.route]);

    const [coupon, setCoupon] = useState<string>('');

    return (
        <Container>
            {params.title === '숙소' &&
                category.items &&
                category.items.map((item, index) => {
                    return (
                        <ItemLong
                            index={index}
                            key={index}
                            item={item}
                            onPress={() => {
                                navigation.navigate('Item');
                            }}
                        />
                    );
                })}
            {data && data.length > 0 && params.title !== '숙소' ? (
                data.map((item: any, index: number) => (
                    <ItemContainer key={index}>
                        <ContentImage>
                            <Background
                                source={{uri: getUrl(item.url)}}
                                key={index}
                            />
                        </ContentImage>
                        <Content>
                            <Header>
                                <TextNormal>
                                    <Bold>{item.name}</Bold>
                                </TextNormal>
                                <TextSmall>{item.address}</TextSmall>
                            </Header>
                            <Footer>
                                <FlexBox>
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        size={12}
                                        color={theme.colors.darkGray}
                                    />
                                    <TextSmall>{item.time}</TextSmall>
                                </FlexBox>
                                <FlexBox>
                                    <FontAwesomeIcon
                                        icon={faPhoneVolume}
                                        size={12}
                                        color={theme.colors.darkGray}
                                    />
                                    <TextSmall>{item.contact}</TextSmall>
                                </FlexBox>
                                <FlexBox>
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        size={12}
                                        color={theme.colors.darkGray}
                                    />
                                    <TextSmall>
                                        {item.information.join(' · ')}
                                    </TextSmall>
                                </FlexBox>
                                <Button
                                    backgroundColor={theme.colors.green}
                                    onPress={() => {
                                        setCoupon(item.coupon.id);
                                    }}>
                                    <FlexGrow>
                                        <TextTiny color={theme.colors.white}>
                                            쿠폰 다운받기
                                        </TextTiny>
                                    </FlexGrow>
                                    <ArrowContainer>
                                        <FontAwesomeIcon
                                            icon={faArrowDown}
                                            size={20}
                                            color="white"
                                        />
                                    </ArrowContainer>
                                </Button>
                            </Footer>
                        </Content>
                        <CouponModal
                            open={coupon === item.coupon.id}
                            close={() => {
                                setCoupon('');
                            }}
                            data={item.coupon}
                        />
                    </ItemContainer>
                ))
            ) : (
                <View />
            )}
        </Container>
    );
}

const Container = styled.ScrollView`
    height: 100%;
    background-color: ${(props: any) => props.theme.colors.background};
    width: 100%;
    padding: ${(props: any) => props.theme.scale.width(10)}px;
`;

const ItemContainer = styled.View`
    height: ${(props: any) => props.theme.scale.width(400)}px;
    width: 100%;
    border: 1px solid ${(props: any) => props.theme.colors.border};
    margin-bottom: ${(props: any) => props.theme.scale.width(15)}px;
`;

const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    flex: 1;
`;

const ContentImage = styled.View`
    flex: 1;
    overflow: hidden;
`;
const Content = styled.View`
    flex: 1;
    padding: ${(props: any) => props.theme.scale.width(10)}px;
`;

const Header = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: ${(props: any) => props.theme.colors.border};
    gap: ${(props: any) => props.theme.scale.width(5)}px;
`;
const Footer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    gap: ${(props: any) => props.theme.scale.width(8)}px;
`;

const ArrowContainer = styled.View`
    background-color: ${({theme}: any) =>
        theme.colors.setOpacity('255,255,255', 0.1)};
    height: 100%;
    width: ${({theme}: any) => theme.scale.width(40)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    right: 0px;
`;

const Button = styled.TouchableOpacity<{
    backgroundColor?: string;
}>`
    background-color: ${props => props.backgroundColor || 'white'};
    height: ${({theme}: any) => theme.scale.width(35)}px;
    width: ${({theme}: any) => theme.scale.width(100)}px;
    flex-direction: row;
    align-items: center;
    padding-left: ${({theme}: any) => theme.scale.width(10)}px;
    border-radius: ${({theme}: any) => theme.scale.calc(10)}px;
    overflow: hidden;
    position: absolute;
    right: ${({theme}: any) => theme.scale.width(10)}px;
`;
