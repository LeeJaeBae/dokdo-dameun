import React, {useMemo} from 'react';
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
import {useCategory} from '@/lib/context/CategoryContext';

const LogoImage = styled.ImageBackground`
    height: 50px;
    width: ${Dimensions.get('window').width / 4}px;
`;

export default function HomeScreen(props: any) {
    const {navigation} = props;
    const width = Dimensions.get('window').width;
    const {categories, selectCategory} = useCategory();
    // const [categories, setCategories] = useState<any[]>([]);
    //
    // useEffect(() => {
    //     api.get('categories').then(res => {
    //         setCategories(res.data);
    //     });
    // }, []);

    const icon = useMemo(
        () => (name: string) => {
            switch (name) {
                case '관광명소':
                    return require('@assets/icon/attraction.webp');
                case '기념품':
                    return require('@assets/icon/gifts.webp');
                case '카페·먹거리':
                    return require('@assets/icon/cafe.webp');
                case '숙소':
                    return require('@assets/icon/hotel.webp');
                case '안주거리':
                    return require('@assets/icon/drink.webp');
                case '맛집':
                    return require('@assets/icon/food.webp');
            }
        },
        [categories],
    );

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
                        require('@assets/promotion/promotion1.webp'),
                        require('@assets/promotion/promotion2.webp'),
                        require('@assets/promotion/promotion3.webp'),
                    ]}
                    scrollAnimationDuration={1000}
                    renderItem={({item, index}) => (
                        <View
                            key={index}
                            style={{
                                flex: 1,
                                overflow: 'hidden',
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    selectCategory(
                                        '8b52c397-f27b-4cb2-b477-e982c6b18a7d',
                                    );
                                    navigation.navigate('Category', {
                                        title: '기념품',
                                        category: 'subVertical',
                                        transparent: true,
                                        id: '8b52c397-f27b-4cb2-b477-e982c6b18a7d',
                                    });
                                }}>
                                <Image
                                    source={item}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <ListContainer>
                <IconsContainer
                    data={
                        categories
                            ? categories.map(category => ({
                                  title: category.name,
                                  image: icon(category.name),
                                  onPress: () => {
                                      selectCategory(category.id);
                                      navigation.push('Category', {
                                          title: category.name,
                                          category: category.type,
                                          transparent: category.transparent,
                                          id: category.id,
                                      });
                                  },
                              }))
                            : [
                                  {
                                      title: '관광명소',
                                      image: require('@assets/icon/attraction.webp'),
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
                                      image: require('@assets/icon/gifts.webp'),
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
                                      image: require('@assets/icon/cafe.webp'),
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
                                      image: require('@assets/icon/hotel.webp'),
                                      onPress: () => {
                                          navigation.navigate('Category', {
                                              title: '숙소',
                                              category: 'no-header',
                                          });
                                      },
                                  },
                                  {
                                      title: '안주거리',
                                      image: require('@assets/icon/drink.webp'),
                                      onPress: () => {
                                          navigation.navigate('Category', {
                                              title: '안주거리',
                                              category: 'tile',
                                          });
                                      },
                                  },
                                  {
                                      title: '맛집',
                                      image: require('@assets/icon/food.webp'),
                                      onPress: () => {
                                          navigation.navigate('Category', {
                                              title: '맛집',
                                              category: 'tile',
                                          });
                                      },
                                  },
                              ]
                    }
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
                            <TouchableOpacity
                                onPress={() => {
                                    if (index === 0) {
                                        selectCategory(
                                            '919692d8-ef99-4b57-92ed-86e7d9ceacaf',
                                        );
                                        navigation.navigate('Category', {
                                            title: '관광명소',
                                            category: 'subHorizontal',
                                            transparent: true,
                                            id: '919692d8-ef99-4b57-92ed-86e7d9ceacaf',
                                        });
                                    } else if (index === 1) {
                                        selectCategory(
                                            '432b669c-4249-4851-8f67-437b593c7c42',
                                        );
                                        navigation.navigate('Category', {
                                            title: '숙소',
                                            category: 'flat',
                                            id: '432b669c-4249-4851-8f67-437b593c7c42',
                                        });
                                    } else {
                                        selectCategory(
                                            'd1357089-c137-4415-a170-5bd533ba5d30',
                                        );
                                        navigation.navigate('Category', {
                                            title: '안주거리',
                                            category: 'tile',
                                            id: 'd1357089-c137-4415-a170-5bd533ba5d30',
                                        });
                                    }
                                }}>
                                <PromotionItemImage
                                    source={item}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
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
