import FlexBox from '@/atoms/containers/FlexBox';
import {Text14} from '@/atoms/text';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import {View} from 'react-native';
import styled from 'styled-components/native';

function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <LoginContainer>
                    <LoginButton>
                        <Text14 color="white">로그인하기</Text14>
                    </LoginButton>
                </LoginContainer>
                <ItemContainer>
                    <Item
                        onPress={() => {
                            props.navigation.navigate('Category', {
                                title: '관광명소',
                                category: '',
                                transparent: true,
                            });
                        }}>
                        <FlexBox>
                            <IconContainer>
                                <Icon
                                    source={require('@assets/icon/attraction.png')}
                                />
                            </IconContainer>
                            <Text14>관광명소</Text14>
                        </FlexBox>
                    </Item>
                    <Item
                        onPress={() => {
                            props.navigation.navigate('Category', {
                                category: '',
                                title: '기념품',
                            });
                        }}>
                        <FlexBox>
                            <IconContainer>
                                <Icon
                                    source={require('@assets/icon/gifts.png')}
                                />
                            </IconContainer>
                            <Text14>기념품</Text14>
                        </FlexBox>
                    </Item>
                    <Item
                        onPress={() => {
                            props.navigation.navigate('Category', {
                                category: '',
                                title: '카페·먹거리',
                            });
                        }}>
                        <FlexBox>
                            <IconContainer>
                                <Icon
                                    source={require('@assets/icon/cafe.png')}
                                />
                            </IconContainer>
                            <Text14>카페·먹거리</Text14>
                        </FlexBox>
                    </Item>
                    <Item
                        onPress={() => {
                            props.navigation.navigate('Category', {
                                category: 'no-header',
                                title: '숙소',
                            });
                        }}>
                        <FlexBox>
                            <IconContainer>
                                <Icon
                                    source={require('@assets/icon/hotel.png')}
                                />
                            </IconContainer>
                            <Text14>숙소</Text14>
                        </FlexBox>
                    </Item>
                    <Item
                        onPress={() => {
                            props.navigation.navigate('Category', {
                                category: 'tile',
                                title: '안주거리',
                            });
                        }}>
                        <FlexBox>
                            <IconContainer>
                                <Icon
                                    source={require('@assets/icon/drink.png')}
                                />
                            </IconContainer>
                            <Text14>안주거리</Text14>
                        </FlexBox>
                    </Item>

                    <Item
                        onPress={() => {
                            props.navigation.navigate('Category', {
                                category: 'tile',
                                title: '식당',
                            });
                        }}>
                        <FlexBox>
                            <IconContainer>
                                <Icon
                                    source={require('@assets/icon/food.png')}
                                />
                            </IconContainer>
                            <Text14>맛집</Text14>
                        </FlexBox>
                    </Item>
                </ItemContainer>
            </View>
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;

const IconContainer = styled.View`
    width: ${(props: any) => props.theme.scale.calc(100)}px;
    height: ${(props: any) => props.theme.scale.calc(100)}px;
    overflow: hidden;
`;

const Icon = styled.Image`
    width: ${(props: any) => props.theme.scale.calc(100)}px;
    height: ${(props: any) => props.theme.scale.calc(140)}px;
`;

const Item = styled.TouchableOpacity`
    width: 100%;
    height: ${(props: any) => props.theme.scale.calc(150)}px;
    justify-content: center;
`;

const LoginContainer = styled.View`
    width: 100%;
    height: ${(props: any) => props.theme.scale.calc(150)}px;
    margin-bottom: ${(props: any) => props.theme.scale.calc(150)}px;
    margin-top: ${(props: any) => props.theme.scale.calc(50)}px;
    padding: 0px ${(props: any) => props.theme.scale.calc(100)}px;
`;
const LoginButton = styled.TouchableOpacity`
    width: 100%;
    height: ${(props: any) => props.theme.scale.calc(150)}px;
    background-color: ${(props: any) => props.theme.colors.primary};
    border-radius: ${(props: any) => props.theme.scale.calc(999)}px;
    align-items: center;
    justify-content: center;
`;

const ItemContainer = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: column;
    gap: ${(props: any) => props.theme.scale.calc(20)}px;
    padding: 0px ${(props: any) => props.theme.scale.calc(100)}px;
`;
