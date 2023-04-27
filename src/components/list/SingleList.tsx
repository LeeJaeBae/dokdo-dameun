import TileContainer from '@/atoms/containers/TileContainer';
import GlobalStyle from '@/style/global';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tailwind from 'twrnc';
import {useEffect, useState} from 'react';
import api from '@/api/axios';
import {theme} from '@/style/theme';
import {useCategory} from '@/lib/context/CategoryContext';
import {TextSmall} from '@/atoms/text';

export default function SingleList(props: any) {
    const navigation = props.navigation;
    const [category, setCategory] = useState<any>({});
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        console.log(props);
        api.get(`/category/${props.route.params.id}`).then(res => {
            if (res.data) {
                setCategory(res.data);
                // data sort by index

                setData(
                    res.data.items.sort((a: any, b: any) => {
                        return a.index - b.index;
                    }),
                );
            }
        });
    }, [props.params]);

    const {getUrl} = useCategory();

    return (
        <View style={tailwind`flex h-full flex-row px-4 gap-2`}>
            <FlatList
                style={tailwind`flex-1 flex w-full flex-col`}
                ItemSeparatorComponent={() => <View style={tailwind`h-2`} />}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => {
                    const {color}: {color: string} = item;
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.push('WaveDetail', {
                                    id: item.id,
                                    noBottom: true,
                                    title: item.name,
                                });
                            }}>
                            <TileContainer
                                key={item.name}
                                isPadding={false}
                                gradient={
                                    color.split(',').length === 2
                                        ? color.split(',')
                                        : [color, color]
                                }
                                height={theme.scale.width(180)}>
                                <View
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: theme.scale.width(130),
                                        backgroundColor: color.split(',')[0],
                                    }}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: theme.scale.width(70),
                                        backgroundColor: color.split(',')[1],
                                        bottom: 0,
                                    }}
                                />
                                <ImageBackground
                                    source={{
                                        uri: getUrl(item.url),
                                    }}
                                    style={{
                                        width: '100%',
                                        height: 140,
                                        position: 'absolute',
                                        bottom: 0,
                                    }}
                                />
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 10,
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems:
                                                index % 2 === 0
                                                    ? 'flex-start'
                                                    : 'flex-end',
                                            paddingTop: 30,
                                        }}>
                                        <Text style={GlobalStyle.textLight}>
                                            {item.information[0]}
                                        </Text>
                                        <Text
                                            style={GlobalStyle.title}
                                            lineBreakMode="head">
                                            {item.information[1]}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            justifyContent:
                                                index % 2 === 0
                                                    ? 'flex-start'
                                                    : 'flex-end',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            width: '100%',
                                            paddingBottom: 10,
                                        }}>
                                        <TextSmall size={12}>
                                            {item.information[2]}
                                        </TextSmall>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            justifyContent:
                                                index % 2 === 0
                                                    ? 'flex-start'
                                                    : 'flex-end',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            width: '100%',
                                            paddingBottom: 10,
                                        }}>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
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
                                    </View>
                                </View>
                            </TileContainer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.name.toString()}
            />
        </View>
    );
}
