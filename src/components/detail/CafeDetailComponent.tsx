import CouponModal from '@/atoms/Modal/Coupon';
import FlexGrow from '@/atoms/containers/FlexGrow';
import {Text14, TextLarge, TextSmall, TextTiny} from '@/atoms/text';
import {theme} from '@/style/theme';
import {
    faArrowDown,
    faInfoCircle,
    faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import api from '@/api/axios';
import TextSize from '@/atoms/text/TextSize';
import FlexBox from '@/atoms/containers/FlexBox';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {useCategory} from '@/lib/context/CategoryContext';

export default function CafeDetailComponent(props: any) {
    const navigation = props.navigation;

    const [data, setData] = useState<any>();
    const {getUrl} = useCategory();

    useEffect(() => {
        api.get(`/item/${props.route.params.id}`).then(res => {
            if (res.data) {
                setData(res.data);
                console.log(res.data.coupon);
            }
        });
    }, [props.route]);

    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return data ? (
        <Container>
            <Background
                source={{
                    uri: getUrl(data.url),
                }}
            />

            <Content>
                <Title>
                    <TextSize size={20} fontWeight={700}>
                        {data.name}
                    </TextSize>
                    <Text14 color={theme.colors.gray}>{data.address}</Text14>
                </Title>
                <TextSize size={18}>{data.subtitle}</TextSize>
                <TextSmall>{data.description}</TextSmall>
                <ButtonContainer>
                    <ReviewContainer>
                        {/*{item.reviews ? (*/}
                        {/*    item.reviews.map((review: any, index: number) => (*/}
                        {/*        <Avatar*/}
                        {/*            key={index}*/}
                        {/*            index={index}*/}
                        {/*            source={require('@assets/img/dae_pung1.png')}*/}
                        {/*        />*/}
                        {/*    ))*/}
                        {/*) : (*/}
                        {/*    <View>*/}
                        {/*        <TextSize size={8} color={theme.colors.jade}>*/}
                        {/*            리뷰가 없습니다*/}
                        {/*        </TextSize>*/}
                        {/*    </View>*/}
                        {/*)}*/}
                        <View
                            style={{
                                gap: 5,
                            }}>
                            <FlexBox>
                                <FontAwesomeIcon icon={faClock} size={12} />
                                <TextSmall>{data.time || '정보없음'}</TextSmall>
                            </FlexBox>
                            <FlexBox>
                                <FontAwesomeIcon
                                    icon={faPhoneVolume}
                                    size={12}
                                />
                                <TextSmall>{data.contact}</TextSmall>
                            </FlexBox>
                            <FlexBox>
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    size={12}
                                />
                                <TextSmall>{data.tags}</TextSmall>
                            </FlexBox>
                        </View>
                    </ReviewContainer>
                    <Button onPress={handleOpen}>
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
                </ButtonContainer>
            </Content>
            <CouponModal open={open} close={handleClose} data={data.coupon} />
        </Container>
    ) : (
        <View>
            <TextLarge color={theme.colors.jade}>로딩중입니다.</TextLarge>
        </View>
    );
}

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

const ReviewContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.View<{color: string}>`
    flex: 4;
    background-color: ${({color}: any) => color || '#fff'}};
`;

const Background = styled.ImageBackground`
    flex: 1;
`;

const Content = styled.View`
    flex: 1;
    padding: ${({theme}: any) => theme.scale.calc(50)}px;
    justify-content: space-between;
`;

const Title = styled.View``;

const ButtonContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: ${({theme}: any) => theme.scale.calc(100)}px 0px;

    border-bottom-color: ${({theme}: any) => theme.colors.backgroundOpacity};
`;

const Button = styled.TouchableOpacity`
    background-color: ${({theme}: any) => theme.colors.black};
    height: ${({theme}: any) => theme.scale.width(40)}px;
    width: ${({theme}: any) => theme.scale.width(100)}px;
    flex-direction: row;
    align-items: center;
    padding-left: ${({theme}: any) => theme.scale.width(10)}px;
    border-radius: ${({theme}: any) => theme.scale.calc(10)}px;
    overflow: hidden;
`;
