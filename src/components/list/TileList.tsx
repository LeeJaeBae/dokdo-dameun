import TileContainer from '@/atoms/containers/TileContainer';
import breakWords from '@/lib/breakWords';
import GlobalStyle from '@/style/global';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tailwind from 'twrnc';
import {useEffect, useState} from 'react';
import api from '@/api/axios';
import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import BoxPaddingY from '@/atoms/containers/BoxPaddingY';
import Gap from '@/atoms/containers/Gap';
import {theme} from '@/style/theme';
import {useCategory} from '@/lib/context/CategoryContext';

export default function TileList(props: any) {
    const navigation = props.navigation;

    const [data, setData] = useState<any>();
    const [right, setRight] = useState<any>([]);

    useEffect(() => {
        api.get(`/category/${props.route.params.id}`).then(res => {
            if (res.data) {
                // data divide / 2
                const _data = res.data.items;
                const _right = _data.splice(Math.ceil(_data.length / 2));

                setData(_data);
                setRight(_right);
            }
        });
    }, [props.params]);

    const {getUrl} = useCategory();

    return data ? (
        <View style={tailwind`flex h-full flex-row px-4 gap-2`}>
            <FlatList
                style={tailwind`flex-1 flex w-full flex-col`}
                ItemSeparatorComponent={() => <View style={tailwind`h-2`} />}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => {
                    const {color}: {color: string} = item;
                    return (
                        <TileContainer
                            gradient={
                                color && color.split(',').length === 2
                                    ? color.split(',')
                                    : [color, color]
                            }
                            height={index % 3 === 0 ? '300px' : '280px'}
                            // style={{
                            //     ...tailwind`flex-row flex flex-col gap-2 rounded-lg p-4 w-full ${
                            //         index % 3 === 0 ? 'h-72' : 'h-64'
                            //     }`,
                            // }}
                        >
                            <ImageBackground
                                source={{
                                    uri: getUrl(item.url),
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    bottom: 0,
                                }}
                                resizeMode="contain"
                            />
                            <BoxPaddingX>
                                <BoxPaddingY>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.push('WaveDetail', {
                                                id: item.id,
                                                title: item.title,
                                            });
                                        }}>
                                        <BoxPaddingY>
                                            <Text style={GlobalStyle.textLight}>
                                                {item.information[0]}
                                            </Text>
                                            <Text
                                                style={GlobalStyle.title}
                                                lineBreakMode="head">
                                                {breakWords(
                                                    item.information[1],
                                                    6,
                                                )}
                                            </Text>
                                        </BoxPaddingY>

                                        <Text
                                            style={{
                                                ...GlobalStyle.textTiny,
                                                ...{
                                                    textDecorationStyle:
                                                        'solid',
                                                    textDecorationLine:
                                                        'underline',
                                                },
                                            }}>
                                            {item.information[2]}
                                            {'\n'}
                                            {item.information[3]}
                                        </Text>
                                        <Gap size={theme.scale.width(55)} />
                                        <View
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                                width: '100%',
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
                                                            position:
                                                                'relative',
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
                                        </View>
                                    </TouchableOpacity>
                                </BoxPaddingY>
                            </BoxPaddingX>
                        </TileContainer>
                    );
                }}
                keyExtractor={item => item.toString()}
            />
            <FlatList
                style={tailwind`flex-1 flex w-full flex-col`}
                ItemSeparatorComponent={() => <View style={tailwind`h-2`} />}
                showsVerticalScrollIndicator={false}
                data={right}
                renderItem={({item, index}) => {
                    const {color}: {color: string} = item;
                    return (
                        <TileContainer
                            gradient={
                                color && color.split(',').length === 2
                                    ? color.split(',')
                                    : [color, color]
                            }
                            height={index % 3 === 0 ? '280px' : '300px'}
                            // style={{
                            //     ...tailwind`flex-row flex flex-col gap-2 rounded-lg p-4 w-full ${
                            //         index % 3 === 0 ? 'h-72' : 'h-64'
                            //     }`,
                            // }}
                        >
                            <ImageBackground
                                source={{
                                    uri: getUrl(item.url),
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    bottom: 0,
                                }}
                                resizeMode="contain"
                            />
                            <BoxPaddingX>
                                <BoxPaddingY>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.push('WaveDetail', {
                                                id: item.id,
                                                title: item.title,
                                            });
                                        }}>
                                        <BoxPaddingY>
                                            <Text style={GlobalStyle.textLight}>
                                                {item.information[0]}
                                            </Text>
                                            <Text
                                                style={GlobalStyle.title}
                                                lineBreakMode="head">
                                                {breakWords(
                                                    item.information[1],
                                                    6,
                                                )}
                                            </Text>
                                        </BoxPaddingY>

                                        <Text
                                            style={{
                                                ...GlobalStyle.textTiny,
                                                ...{
                                                    textDecorationStyle:
                                                        'solid',
                                                    textDecorationLine:
                                                        'underline',
                                                },
                                            }}>
                                            {item.information[2]}
                                            {'\n'}
                                            {item.information[3]}
                                        </Text>
                                        <Gap size={theme.scale.width(55)} />
                                        <View
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                                width: '100%',
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
                                                            position:
                                                                'relative',
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
                                        </View>
                                    </TouchableOpacity>
                                </BoxPaddingY>
                            </BoxPaddingX>
                        </TileContainer>
                    );
                }}
                keyExtractor={item => item.toString()}
            />
        </View>
    ) : (
        <View />
    );
}
