import ImageView from '@/atoms/ImageView/ImageView';
import TileContainer from '@/atoms/containers/TileContainer';
import breakWords from '@/lib/breakWords';
import GlobalStyle from '@/style/global';
import {faAngleRight, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {
    Button,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tailwind from 'twrnc';

const data = [
    {
        subText: '당일손질 쫀득쫀득',
        title: '울릉도 자연산 특물회',
        option: '특물회 주문 시',
        service: '맥주 1병 무료',
        image: require('@assets/img/food.png'),
        bgGradientStart: '#f9f882',
        bgGradientEnd: '#fff',
    },
];

export default function TileList() {
    const navigation = useNavigation<{[key: string]: any}>();
    return (
        <View style={tailwind`flex h-full flex-row px-4 gap-2`}>
            <FlatList
                style={tailwind`flex-1 flex w-full flex-col`}
                ItemSeparatorComponent={() => <View style={tailwind`h-2`} />}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => {
                    return (
                        <TileContainer
                            gradient={[
                                item.bgGradientStart,
                                item.bgGradientEnd,
                            ]}
                            height={index % 3 === 0 ? '300px' : '280px'}
                            // style={{
                            //     ...tailwind`flex-row flex flex-col gap-2 rounded-lg p-4 w-full ${
                            //         index % 3 === 0 ? 'h-72' : 'h-64'
                            //     }`,
                            // }}
                        >
                            <View style={{flex: 1}}>
                                <Text style={GlobalStyle.textLight}>
                                    {item.subText}
                                </Text>
                                <Text
                                    style={GlobalStyle.title}
                                    lineBreakMode="head">
                                    {breakWords(item.title, 6)}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        ...GlobalStyle.textTiny,
                                        ...{
                                            textDecorationStyle: 'solid',
                                            textDecorationLine: 'underline',
                                        },
                                    }}>
                                    {item.option}
                                    {'\n'}
                                    {item.service}
                                </Text>
                            </View>
                            <ImageBackground
                                source={item.image}
                                style={{
                                    width: '100%',
                                    height: 120,
                                    position: 'absolute',
                                    bottom: 0,
                                }}
                            />
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '100%',
                                }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Item', {
                                            datailType: 'wave',
                                        });
                                    }}>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor:
                                                'rgba(255,255,255,0.9)',
                                            padding: 2,
                                            paddingRight: 4,
                                            paddingLeft: 4,
                                            borderRadius: 10,
                                        }}>
                                        <Text
                                            style={{
                                                ...GlobalStyle.textTiny,
                                                ...{
                                                    position: 'relative',
                                                    zIndex: 999,
                                                },
                                            }}>
                                            할인 혜택 보러가기
                                        </Text>
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            size={12}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TileContainer>
                    );
                }}
                keyExtractor={item => item.toString()}
            />
            <FlatList
                style={tailwind`flex-1 flex w-full flex-col`}
                ItemSeparatorComponent={() => <View style={tailwind`h-2`} />}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => {
                    return (
                        <TileContainer
                            gradient={[
                                item.bgGradientStart,
                                item.bgGradientEnd,
                            ]}
                            height={index % 3 === 0 ? '270px' : '300px'}
                            // style={{
                            //     ...tailwind`flex-row flex flex-col gap-2 rounded-lg p-4 w-full ${
                            //         index % 3 === 0 ? 'h-72' : 'h-64'
                            //     }`,
                            // }}
                        >
                            <View style={{flex: 1}}>
                                <Text style={GlobalStyle.textLight}>
                                    {item.subText}
                                </Text>
                                <Text
                                    style={GlobalStyle.title}
                                    lineBreakMode="head">
                                    {breakWords(item.title, 8)}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        ...GlobalStyle.textTiny,
                                        ...{
                                            textDecorationStyle: 'solid',
                                            textDecorationLine: 'underline',
                                        },
                                    }}>
                                    {item.option}
                                    {'\n'}
                                    {item.service}
                                </Text>
                            </View>
                            <ImageBackground
                                source={item.image}
                                style={{
                                    width: '100%',
                                    height: 120,
                                    position: 'absolute',
                                    bottom: 0,
                                }}
                            />
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '100%',
                                }}>
                                <TouchableOpacity>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor:
                                                'rgba(255,255,255,0.9)',
                                            padding: 2,
                                            paddingRight: 4,
                                            paddingLeft: 4,
                                            borderRadius: 10,
                                        }}>
                                        <Text
                                            style={{
                                                ...GlobalStyle.textTiny,
                                                ...{
                                                    position: 'relative',
                                                    zIndex: 999,
                                                },
                                            }}>
                                            할인 혜택 보러가기
                                        </Text>
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            size={12}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TileContainer>
                    );
                }}
                keyExtractor={item => item.toString()}
            />
        </View>
    );
}
