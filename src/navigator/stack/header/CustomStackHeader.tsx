import {faAngleLeft, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StackHeaderProps} from '@react-navigation/stack';
import {Platform, SafeAreaView, StatusBar, Text, View} from 'react-native';
import tailwind from 'twrnc';
import Home from '@assets/icon/home.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '@/style/theme';
import {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components/native';
import api from '@/api/axios';

type CustomStackHeaderProps = StackHeaderProps | {title: string};

export default function CustomStackHeader({
    navigation,
    route,
    options,
    title,
}: CustomStackHeaderProps) {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        api.get('categories').then(res => {
            setCategories(res.data);
        });
    }, []);
    const header = useMemo(() => {
        if (
            route.params?.transparent === false ||
            route.params?.transparent === undefined
        ) {
            return (
                <>
                    <SafeAreaView style={tailwind`bg-white`}>
                        <StatusBar barStyle="dark-content" />
                    </SafeAreaView>
                    <View
                        style={tailwind`flex flex-row h-12 items-center px-4 justify-between bg-white`}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                navigation.goBack();
                            }}>
                            <FontAwesomeIcon icon={faAngleLeft} size={22} />
                            <Text
                                style={tailwind`ml-2 text-black font-bold text-base`}>
                                {route.params?.title ||
                                    options?.title ||
                                    title ||
                                    'Title'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </TouchableOpacity>
                    </View>
                </>
            );
        } else {
            return (
                <>
                    <FixedHeader ios={Platform.OS === 'ios'}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                navigation.goBack();
                            }}>
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                                size={22}
                                color={theme.colors.background}
                            />
                            <Text
                                style={tailwind`ml-2 text-white font-bold text-base`}>
                                {route.params?.title ||
                                    options?.title ||
                                    title ||
                                    'Title'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                color={theme.colors.background}
                            />
                        </TouchableOpacity>
                    </FixedHeader>
                </>
            );
        }
    }, [route]);
    return header;
}

const FixedHeader = styled.View<{ios: boolean}>`
    width: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    flex-direction: row;
    margin-top: ${(props: any) =>
        props.ios ? props.theme.scale.calc(150) : props.theme.scale.calc(50)}px;
    justify-content: space-between;
    padding: 0 ${(props: any) => props.theme.scale.calc(50)}px;
`;
