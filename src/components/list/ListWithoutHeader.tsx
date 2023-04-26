import styled from 'styled-components/native';
import {useEffect, useState} from 'react';
import {Bold, TextNormal, TextSmall, TextTiny} from '@/atoms/text';
import Carousel from 'react-native-reanimated-carousel';
import {theme} from '@/style/theme';
import FlexBox from '@/atoms/containers/FlexBox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import FlexGrow from '@/atoms/containers/FlexGrow';
import ItemLong from '@/components/list/item/ItemLong';
import api from '@/api/axios';
import {View} from 'react-native';
import CouponModal from '@/atoms/Modal/Coupon';

const list = [
    {
        icon: require('@assets/icon/academy.png'),
        title: '코스모스 리조트',
        subTitle: '힐링 스테이',
        description:
            '웰컴키트 ㅣ 마운틴뷰 ㅣ 오션뷰 ㅣ 조식 ㅣ 카페 | 무료 셔틀 ㅣ 라이팅쇼 | 기프트 제공 ㅣ 굿즈',
        backgroundImage: require('@assets/img/hotel_background1.png'),
        category: '콘도, 리조트',
    },
    {
        icon: require('@assets/icon/academy.png'),
        title: '간편하게 즐기는 건나물 3종 세트',
        subTitle: '울릉도에서만 특별한 건나물 할인',
        description:
            '울릉도산 건곤드레나물, 울릉도산 시래기 나물 그리고 울릉도산 건취나물',
        backgroundImage: require('@assets/img/hotel_background2.png'),
        category: '펜션, 리조트',
    },
];

export default function ListWithoutHeader(props: any) {
    const {params} = props.route;
    const navigation = props.navigation;

    const [category, setCategory] = useState<any>({});
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        api.get(`/category/${props.route.params.id}`).then(res => {
            console.log(res);
            if (res.data) {
                setCategory(res.data);

                console.log(res.data);

                if (res.data.subCategory && res.data.subCategory.length > 0) {
                    setData(res.data.subCategory);
                } else {
                    setData(res.data.items);
                }
            }
        });
    }, [props.route]);

    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            {params.title === '숙소' &&
                data.length > 0 &&
                data.map((item, index) => {
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
                            <Carousel
                                width={theme.width}
                                data={item.images}
                                renderItem={({item, index}) => {
                                    return (
                                        <Background
                                            source={{uri: item.image}}
                                            key={index}
                                        />
                                    );
                                }}
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
                                        setModalVisible(true);
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
                            open={isModalVisible}
                            close={() => {
                                setModalVisible(false);
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
