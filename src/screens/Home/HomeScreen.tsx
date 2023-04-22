import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
import tailwind from 'twrnc';
import Logo from '../../../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-native-reanimated-carousel';
import styled from 'styled-components/native';
import {theme} from '@/style/theme';

const LogoImage = styled.ImageBackground`
    height: 50px;
    width: ${Dimensions.get('window').width / 4}px;
`;

export default function HomeScreen(props: any) {
    const {navigation} = props;
    const width = Dimensions.get('window').width;

    return (
        <ScrollView
            style={{
                backgroundColor: theme.colors.background,
                height: '100%',
            }}>
            <View
                style={tailwind`flex flex-row justify-between w-full items-center px-4`}>
                <LogoImage source={Logo} resizeMode="contain" />
                <TouchableOpacity
                    style={tailwind`flex`}
                    onPress={() => {
                        navigation.openDrawer();
                    }}>
                    <View
                        style={tailwind`flex flex-row justify-center items-center h-10 w-10 rounded-full bg-white`}>
                        <FontAwesomeIcon
                            icon={faBars}
                            style={tailwind`text-[#6A62AA]`}
                            size={22}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={tailwind``}>
                <Carousel
                    width={width}
                    height={width / 1.8}
                    vertical={false}
                    style={{
                        width: '100%',
                    }}
                    data={[
                        require('@assets/promotion/promotion1.png'),
                        require('@assets/promotion/promotion2.png'),
                        require('@assets/promotion/promotion3.png'),
                    ]}
                    scrollAnimationDuration={1000}
                    renderItem={({item, index}) => (
                        <View
                            key={index}
                            style={{
                                flex: 1,
                                overflow: 'hidden',
                            }}>
                            <Image
                                source={item}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </View>
                    )}
                />
            </View>
            <ListContainer>
                <IconsContainer
                    data={[
                        {
                            title: '관광명소',
                            image: require('@assets/icon/attraction.png'),
                            onPress: () => {
                                navigation.navigate('Category', {
                                    title: '관광명소',
                                    category: '',
                                    transparent: true,
                                });
                            },
                        },
                        {
                            title: '기념품',
                            image: require('@assets/icon/gifts.png'),
                            onPress: () => {
                                navigation.navigate('Category', {
                                    title: '기념품',
                                    category: '',
                                    transparent: true,
                                });
                            },
                        },
                        {
                            title: '카페·먹거리',
                            image: require('@assets/icon/cafe.png'),
                            onPress: () => {
                                navigation.navigate('Category', {
                                    title: '카페·먹거리',
                                    category: 'cafe',
                                    transparent: true,
                                });
                            },
                        },
                        {
                            title: '숙소',
                            image: require('@assets/icon/hotel.png'),
                            onPress: () => {
                                navigation.navigate('Category', {
                                    title: '숙소',
                                    category: 'no-header',
                                });
                            },
                        },
                        {
                            title: '안주거리',
                            image: require('@assets/icon/drink.png'),
                            onPress: () => {
                                navigation.navigate('Category', {
                                    title: '안주거리',
                                    category: 'tile',
                                });
                            },
                        },
                        {
                            title: '맛집',
                            image: require('@assets/icon/food.png'),
                            onPress: () => {
                                navigation.navigate('Category', {
                                    title: '맛집',
                                    category: 'tile',
                                });
                            },
                        },
                    ]}
                    renderItem={({item, index}: any) => (
                        <IconContainer
                            key={index}
                            onPress={() => {
                                item.onPress();
                            }}>
                            <Icon source={item.image} />
                        </IconContainer>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </ListContainer>
            <BannerContainer>
                <MainBanner
                    source={require('@assets/banner/main_banner.png')}
                />
            </BannerContainer>
            <PromotionListContainer>
                {[
                    require('@assets/banner/banner1.png'),
                    require('@assets/banner/banner2.png'),
                    require('@assets/banner/banner3.png'),
                ].map((item, index) => {
                    return (
                        <PromotionItem key={index} index={index}>
                            <PromotionItemImage
                                source={item}
                                resizeMode={'contain'}
                            />
                        </PromotionItem>
                    );
                })}
            </PromotionListContainer>
        </ScrollView>
    );
}
const PromotionItem = styled.View<{index: number}>`
    width: 100%;
    height: ${(props: any) => theme.scale.height(90)}px;
    padding: 0px ${theme.scale.width(5)}px;
    overflow: hidden;
`;

const PromotionItemImage = styled(ImageBackground).attrs({})`
    width: 100%;
    height: 100%;
    border-radius: ${theme.scale.calc(30)}px;
    overflow: hidden;
`;

const PromotionListContainer = styled.View``;

const BannerContainer = styled.View`
    width: 100%;
    height: 100px;
    margin-bottom: ${theme.scale.calc(50)}px;
`;

const ListContainer = styled.View`
    padding-vertical: ${theme.scale.calc(20)}px;
`;

const MainBanner = styled(ImageBackground).attrs({})`
    width: 100%;
    height: 100%;
`;

const IconsContainer = styled(FlatList).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})``;

const IconContainer = styled(TouchableOpacity)`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin: ${theme.scale.calc(20)}px;
`;

const Icon = styled(Image).attrs({})`
    width: 100%;
    height: 100%;
`;
