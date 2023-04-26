import FlexBox from '@/atoms/containers/FlexBox';
import FlexColumn from '@/atoms/containers/FlexColumn';
import Gap from '@/atoms/containers/Gap';
import ImageCircle from '@/atoms/containers/ImageCircle';
import Bold from '@/atoms/text/Bold';
import LSpacing from '@/atoms/text/LSpacing';
import SemiBold from '@/atoms/text/SemiBold';
import Text14 from '@/atoms/text/Text14';
import TextLarge from '@/atoms/text/TextLarge';
import TextNormal from '@/atoms/text/TextNormal';
import TextSize from '@/atoms/text/TextSize';
import TextSmall from '@/atoms/text/TextSmall';
import TextTiny from '@/atoms/text/TextTiny';
import WriteVerticalReverse from '@/atoms/text/WriteVerticalReverse';
import breakWords from '@/lib/breakWords';
import {theme} from '@/style/theme';

import {
    faBanSmoking,
    faSquareParking,
    faStar,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {Dimensions, TouchableWithoutFeedback, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';
import api from '@/api/axios';

export default function HotelDetail(props: any) {
    const width = Dimensions.get('window').width;
    const [index, setIndex] = useState(0);
    const {navigation} = props;

    const [item, setItem] = useState<any>([]);

    useEffect(() => {
        api.get(`/item/${props.route.params.id}`).then(res => {
            if (res.data) {
                setItem(res.data);
            }
        });
    }, []);

    return item ? (
        <Container showsVerticalScrollIndicator={false}>
            <CarouselContainer>
                <Carousel<any>
                    snapEnabled={true}
                    width={width}
                    height={theme.scale.height(100)}
                    defaultIndex={0}
                    data={
                        item.images && item.images.length > 0
                            ? item.images
                            : [
                                  require('@assets/banner.png'),
                                  require('@assets/banner.png'),
                                  require('@assets/banner.png'),
                              ]
                    }
                    scrollAnimationDuration={1000}
                    renderItem={({item, index}) => (
                        <ImageItem key={index} source={item} />
                    )}
                    onSnapToItem={index => {
                        setIndex(index);
                    }}
                />
            </CarouselContainer>
            <TextContainer>
                <TextLarge>
                    <Bold>
                        <LSpacing>{item.title}</LSpacing>
                    </Bold>
                </TextLarge>
                <Text14>{item.address}</Text14>
            </TextContainer>
            <TextContainer>
                <TextNormal>{item.tags && item.tags.split('/')[0]}</TextNormal>
                <TextSmall>{item.tags && item.tags.split('/')[1]}</TextSmall>
                <Gap size={5} />
                <TextSmall color={theme.colors.primary}>
                    {item.tags && item.tags.split('/')[2]}
                </TextSmall>
                <TextSmall color={theme.colors.primary}>
                    {item.tags && item.tags.split('/')[3]}
                </TextSmall>
                <TextSmall color={theme.colors.primary}>
                    {item.tags && item.tags.split('/')[4]}
                </TextSmall>
            </TextContainer>
            <TextContainer>
                <PromotionContainer>
                    <TextSmall color={theme.colors.white}>PROMOTION</TextSmall>
                </PromotionContainer>
                <CouponContainer>
                    <TextLarge>
                        <SemiBold>
                            {breakWords(
                                (item.coupon && item.coupon.title) || '',
                                10,
                            )}
                        </SemiBold>
                    </TextLarge>
                    <Gap size={5} />
                    <TextSmall>
                        {item.coupon && item.coupon.description}
                    </TextSmall>
                    <Gap size={5} />
                    <TextTiny>{item.coupon && item.coupon.subtitle}</TextTiny>
                    <Circle />
                    <Circle right />
                    <CouponText>
                        <WriteVerticalReverse>
                            <TextTiny color={theme.colors.deepBrown}>
                                Coupon
                            </TextTiny>
                        </WriteVerticalReverse>
                    </CouponText>
                </CouponContainer>
                <TextSmall>· 현장 발권 시 사용 가능한 쿠폰입니다.</TextSmall>
                <TextSmall>
                    · 쿠폰 사용 시 매장에 쿠폰을 꼭 확인해주세요.
                </TextSmall>
                <TextSmall>
                    · 본 할인권 사용은 당사 사정에 따라 임의 변경될 수 있습니다.
                </TextSmall>
                <TextSmall>
                    · 현장에서 제공하는 서비스 및 제품은 사용자가 임의 변경
                    불가합니다.
                </TextSmall>
            </TextContainer>
            <TextContainer>
                <TextNormal>편의시설</TextNormal>
                <FlexBox>
                    <FontAwesomeIcon icon={faWifi} color={theme.colors.gray} />
                    <TextSmall>무료와이파이</TextSmall>
                </FlexBox>
                <FlexBox>
                    <FontAwesomeIcon
                        icon={faSquareParking}
                        color={theme.colors.gray}
                    />
                    <TextSmall>건물 내 무료주차</TextSmall>
                </FlexBox>
                <FlexBox>
                    <FontAwesomeIcon
                        icon={faBanSmoking}
                        color={theme.colors.gray}
                    />
                    <TextSmall>금연실</TextSmall>
                </FlexBox>
            </TextContainer>
            <TextContainer>
                <FlexBox>
                    <FontAwesomeIcon icon={faStar} />
                    <TextNormal>4.5</TextNormal>
                    <TextNormal>·</TextNormal>
                    <TextNormal>후기 {item.reviews.length}개</TextNormal>
                </FlexBox>
                <ReviewContainer>
                    {Array(3)
                        .fill(0)
                        .map((_, i) => (
                            <ImgShadow
                                key={i}
                                index={i}
                                offset={[-20 * i, 3]}
                                distance={5}
                                startColor={theme.colors.shadow}>
                                <ImageCircle
                                    index={i}
                                    source={require('@assets/icon/tip.png')}
                                />
                            </ImgShadow>
                        ))}
                    <TouchableWithoutFeedback
                        onPress={() =>
                            navigation.navigate('Review', {item: 'test'})
                        }>
                        <FlexColumn>
                            <Text14>
                                <SemiBold>+{item.reviews.length}</SemiBold>
                            </Text14>
                            <TextSize size={10}>더보기</TextSize>
                        </FlexColumn>
                    </TouchableWithoutFeedback>
                </ReviewContainer>
                <Gap size={10} />
            </TextContainer>
        </Container>
    ) : (
        <View>
            <TextSmall>로딩중</TextSmall>
        </View>
    );
}

const ReviewContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ImgShadow = styled(Shadow)<{index: number}>`
    border-radius: 100px;
`;

const Container = styled.ScrollView`
    flex: 1;
    background-color: ${theme.colors.background};
`;

const ImageItem = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

const CarouselContainer = styled.View``;

const TextContainer = styled.View`
    flex-direction: column;
    padding: ${theme.scale.calc(50)}px 0px;
    margin: 0px ${theme.scale.calc(50)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.border};
    gap: ${theme.scale.calc(20)}px;
`;

const PromotionContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: ${theme.scale.calc(350)}px;
    height: ${theme.scale.calc(120)}px;
    background-color: ${theme.colors.black};
`;

const CouponContainer = styled.View`
    width: 100%;
    height: ${theme.scale.calc(600)}px;
    background-color: ${theme.colors.brown};
    overflow: hidden;
    padding: ${theme.scale.calc(100)}px;
`;

const Circle = styled.View<{right?: boolean}>`
    width: ${theme.scale.calc(100)}px;
    height: ${theme.scale.calc(100)}px;
    border-radius: ${theme.scale.calc(100)}px;
    background-color: ${theme.colors.background};
    position: absolute;
    ${(props: any) =>
        props.right
            ? `right: ${theme.scale.calc(-50)}px;`
            : `left: ${theme.scale.calc(-50)}px;`}
    top: ${theme.scale.calc(250)}px;
`;

const CouponText = styled.View`
    position: absolute;
    right: ${theme.scale.calc(80)}px;
    top: 0px;
    height: ${theme.scale.calc(500)}px;
    display: flex;
    border-left-width: 0.5px;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.scale.calc(50)}px;
    border-color: ${theme.colors.white};
`;
