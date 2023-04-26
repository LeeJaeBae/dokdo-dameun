import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';
import FlexBox from '@/atoms/containers/FlexBox';
import {Text14} from '@/atoms/text';
import {useCategory} from '@/lib/context/CategoryContext';


function CustomDrawerContent(props: DrawerContentComponentProps) {
    const {categories} = useCategory();
    const navigation = props.navigation;

    const icon = (name: string) => {
        switch (name) {
            case '관광명소':
                return require('@assets/icon/attraction.png');
            case '기념품':
                return require('@assets/icon/gifts.png');
            case '카페·먹거리':
                return require('@assets/icon/cafe.png');
            case '숙소':
                return require('@assets/icon/hotel.png');
            case '안주거리':
                return require('@assets/icon/drink.png');
            case '맛집':
                return require('@assets/icon/food.png');
            default:
                return require('@assets/icon/attraction.png');
        }
    };

    return (
        <DrawerContentScrollView {...props} scrollEnabled={false}>
            <View>
                <ItemContainer>
                    <FlatList
                        data={categories}
                        scrollEnabled={false}
                        renderItem={({item}) => {
                            const {name, type, transparent, id} = item;
                            return (
                                <Item
                                    onPress={() => {
                                        navigation.navigate('Category', {
                                            title: name,
                                            category: type,
                                            transparent: transparent,
                                            id: id,
                                        });
                                    }}>
                                    <FlexBox>
                                        <IconContainer>
                                            <Icon source={icon(name)} />
                                        </IconContainer>
                                        <Text14>{name}</Text14>
                                    </FlexBox>
                                </Item>
                            );
                        }}
                    />
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
