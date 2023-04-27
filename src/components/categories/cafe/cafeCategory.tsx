import styled from 'styled-components/native';
import {Light, TextLarge, TextNormal, TextSmall, TextTiny} from '@/atoms/text';
import {theme} from '@/style/theme';
import TextSize from '@/atoms/text/TextSize';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {Platform, StatusBar, View} from 'react-native';
import Gap from '@/atoms/containers/Gap';
import {TAnimationStyle} from 'react-native-reanimated-carousel/lib/typescript/layouts/BaseLayout';
import {interpolate} from 'react-native-reanimated';
import api from '@/api/axios';
import {useCategory} from '@/lib/context/CategoryContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CafeCategory(props: any) {
    const animationStyle: TAnimationStyle = useCallback((value: number) => {
        'worklet';

        const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
        const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
        const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

        return {
            transform: [{scale}],
            zIndex,
            opacity,
        };
    }, []);
    const titleCard = useRef<ICarouselInstance>(null);
    const mainCard = useRef<ICarouselInstance>(null);

    const navigation = props.navigation;
    const {selectedCategory: category, getUrl} = useCategory();
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        api.get(`/category/${props.route.params.id}`).then(res => {
            if (res.data) {
                if (res.data.subCategory && res.data.subCategory.length > 0) {
                    setData(res.data.subCategory);
                } else {
                    setData(res.data.items);
                }
            }
        });
    }, [props.route]);

    return (
        <Container>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
            <Header>
                <TextLarge color={theme.colors.white}>
                    오늘, 이 간식 어때요?
                </TextLarge>
                <TextSize size={20} color={theme.colors.white}>
                    맛있게 즐기는 울릉
                </TextSize>
                <TextNormal color={theme.colors.white}>
                    <Light>지금이 아니면 놓치고 말 거예요!</Light>
                </TextNormal>

                <Carousel<any>
                    width={theme.width * 0.7}
                    style={{
                        width: theme.width,
                        position: 'absolute',
                        top: theme.scale.width(220),
                    }}
                    data={
                        category.subCategory &&
                        category.subCategory.find(
                            (v: any) => v.name === 'promotion',
                        ).items
                    }
                    renderItem={({item}) => (
                        <HeaderItemWrapper
                            onPress={() => {
                                navigation.navigate('CafeDetail', {
                                    id: item.id,
                                    title: item.title,
                                });
                            }}>
                            <HeaderItem
                                source={{
                                    uri: getUrl(item.url),
                                }}>
                                <HeaderItemFilter>
                                    <TextSmall color={theme.colors.white}>
                                        울릉도 대표간식
                                    </TextSmall>
                                    <TextSize
                                        fontWeight={700}
                                        size={20}
                                        color={theme.colors.white}>
                                        {item.title}
                                        {'\n'}
                                        {item.subtitle}
                                    </TextSize>
                                </HeaderItemFilter>
                            </HeaderItem>
                        </HeaderItemWrapper>
                    )}
                />
            </Header>
            <HorizontalItemsContainer>
                <View
                    style={{
                        padding: theme.scale.width(10),
                    }}>
                    <TextSize size={18} fontWeight={700}>
                        이번 주 최고의 간식
                    </TextSize>
                </View>

                <Carousel<any>
                    width={theme.scale.width(160)}
                    style={{
                        width: theme.width,
                    }}
                    data={
                        category.subCategory &&
                        category.subCategory.find(
                            (v: any) => v.name === 'recommend',
                        ).items
                    }
                    renderItem={({item}) => (
                        <PromotionItem
                            onPress={() => {
                                navigation.navigate('CafeDetail', {
                                    id: item.id,
                                    title: item.title,
                                });
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('CafeDetail', {
                                        id: item.id,
                                        title: item.title,
                                    });
                                }}>
                                <PromotionImage
                                    source={{
                                        uri: getUrl(item.url),
                                    }}
                                />
                            </TouchableOpacity>
                            <PromotionInfo>
                                <TextSmall fontWeight={700}>
                                    {item.title}
                                </TextSmall>
                                <TextTiny color={theme.colors.gray}>
                                    {item.information}
                                </TextTiny>
                                <TextSmall
                                    fontWeight={600}
                                    color={theme.colors.purple}>
                                    할인쿠폰 보러가기
                                </TextSmall>
                            </PromotionInfo>
                        </PromotionItem>
                    )}
                />
            </HorizontalItemsContainer>

            <RecommendItemsContainer>
                <TextSize size={16} fontWeight={700}>
                    오늘, 이 카페 어때요?
                </TextSize>
                <Carousel<any>
                    ref={mainCard}
                    width={theme.width}
                    height={theme.scale.width(250)}
                    data={
                        category.subCategory &&
                        category.subCategory.find(
                            (v: any) => v.name === 'today_cafe',
                        ).items
                    }
                    loop
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 130,
                    }}
                    snapEnabled={true}
                    onScrollEnd={() => {
                        if (titleCard.current) {
                            titleCard.current.next({animated: true});
                        }
                    }}
                    renderItem={({item, index, animationValue}) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <RecommendImage
                                    source={{
                                        uri: getUrl(item.url),
                                    }}
                                />
                            </View>
                        );
                    }}
                />
                <Carousel<any>
                    ref={titleCard}
                    style={{
                        width: theme.width,
                        height: theme.scale.width(80),
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: theme.scale.width(200),
                    }}
                    width={theme.width * 0.7}
                    data={
                        category.subCategory &&
                        category.subCategory.find(
                            (v: any) => v.name === 'today_cafe',
                        ).items
                    }
                    customAnimation={animationStyle}
                    panGestureHandlerProps={{
                        activeOffsetX: [-999, 999],
                    }}
                    renderItem={({item, index}) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <RecommendTitle
                                    onPress={() => {
                                        navigation.navigate('CafeDetail', {
                                            id: item.id,
                                            title: item.title,
                                        });
                                    }}>
                                    <TextSize size={18} fontWeight={700}>
                                        {item.title}
                                    </TextSize>
                                    <TextSmall color={theme.colors.gray}>
                                        {item.information}
                                    </TextSmall>
                                </RecommendTitle>
                            </View>
                        );
                    }}
                />
            </RecommendItemsContainer>
            <Gap size={40} />
        </Container>
    );
}

const Container = styled.ScrollView`
    flex-direction: column;
    background-color: ${(props: any) => props.theme.colors.background};
    height: ${(props: any) => props.theme.height}px;
    width: ${(props: any) => props.theme.width}px;
`;

const Header = styled.View`
    flex-direction: column;
    background-color: ${(props: any) => props.theme.colors.black};
    height: ${(props: any) => props.theme.scale.width(540)}px;
    width: ${(props: any) => props.theme.width}px;
    padding-top: ${(props: any) => props.theme.scale.width(100)}px;
    padding-horizontal: ${(props: any) => props.theme.scale.width(15)}px;
    gap: ${(props: any) => props.theme.scale.width(10)}px;
`;

const HeaderItemWrapper = styled.TouchableOpacity`
    height: ${(props: any) => props.theme.scale.width(300)}px;
    width: ${(props: any) => props.theme.scale.widthPercent(65)}px;
    background-color: white;
    margin-left: ${(props: any) => props.theme.scale.width(15)}px;
`;

const HeaderItem = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    width: 100%;
    height: 100%;
`;

const HeaderItemFilter = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${(props: any) =>
        props.theme.colors.setOpacity('0,0,0', 0.3)};
    padding: ${(props: any) => props.theme.scale.width(15)}px;
    flex-direction: column;
    gap: ${(props: any) => props.theme.scale.width(10)}px;
`;

const HorizontalItemsContainer = styled.View`
    width: ${(props: any) => props.theme.width}px;
    height: ${(props: any) => props.theme.scale.width(230)}px;
    margin-vertical: ${(props: any) => props.theme.scale.width(15)}px;
`;

const PromotionItem = styled.View`
    height: ${(props: any) => props.theme.scale.width(240)}px;
    width: ${(props: any) => props.theme.scale.width(150)}px;
    margin-left: ${(props: any) => props.theme.scale.width(5)}px;
    overflow: hidden;
`;

const PromotionImage = styled.Image`
    width: 100%;
    height: ${(props: any) => props.theme.scale.width(150)}px;
    border-radius: ${(props: any) => props.theme.scale.width(10)}px;
    overflow: hidden;
`;

const PromotionInfo = styled.View`
    flex: 4;
    flex-direction: column;
    padding-top: ${(props: any) => props.theme.scale.width(5)}px;
`;

const RecommendItemsContainer = styled.View`
    width: ${(props: any) => props.theme.width}px;
    height: ${(props: any) => props.theme.scale.width(300)}px;
    align-items: center;
    margin-top: ${(props: any) => props.theme.scale.width(15)}px;
`;

const RecommendImage = styled.Image`
    width: ${(props: any) => props.theme.scale.width(250)}px;
    height: ${(props: any) => props.theme.scale.width(250)}px;
    border-radius: ${(props: any) => props.theme.scale.width(10)}px;
    overflow: hidden;
`;

const RecommendTitle = styled.TouchableOpacity.attrs({
    elevation: 5,
})`
    flex: 1;
    width: 100%;
    height: 100%;
    margin-bottom: ${(props: any) => props.theme.scale.width(10)}px;
    border-radius: ${(props: any) => props.theme.scale.width(5)}px;
    overflow: hidden;
    padding: ${(props: any) => props.theme.scale.width(10)}px;
    border: 1px solid ${(props: any) => props.theme.colors.border};
    background-color: ${(props: any) =>
        props.theme.colors.setOpacity('255,255,255', 0.95)};
    justify-content: center;
    gap: ${(props: any) => props.theme.scale.width(8)}px;
`;
