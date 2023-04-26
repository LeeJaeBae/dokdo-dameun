import FlexBox from '@/atoms/containers/FlexBox';
import {TextLarge, TextNormal, TextTiny} from '@/atoms/text';
import {theme} from '@/style/theme';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styled from 'styled-components/native';
import {useMemo} from 'react';
import {useCategory} from '@/lib/context/CategoryContext';

export default function HorizontalList(props: any) {
    const navigation = props.navigation;
    const {selectedCategory} = useCategory();
    const data = useMemo(() => {
        return props.item.items;
    }, [selectedCategory]);

    return data ? (
        <SubCategoryContainer>
            <TitleContainer>
                <TextLarge>{props.item.category || props.item.name}</TextLarge>
            </TitleContainer>

            {props.item && props?.item.items.length < 1 ? (
                <View
                    style={{
                        flex: 1,
                    }}>
                    <ItemContainer>
                        <ImgContainer source={require('@assets/img/logo.png')}>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: theme.colors.setOpacity(
                                        '0,0,0',
                                        0.1,
                                    ),
                                }}
                            />
                        </ImgContainer>
                        <InfoContainer>
                            <View>
                                <TextNormal>데이터가 없습니다</TextNormal>
                                <TextTiny
                                    color={theme.colors.darkGray}></TextTiny>
                            </View>
                            <TouchableOpacity>
                                <FlexBox>
                                    <TextTiny>자세히 알아보기</TextTiny>
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        size={10}
                                    />
                                </FlexBox>
                            </TouchableOpacity>
                        </InfoContainer>
                    </ItemContainer>
                </View>
            ) : (
                <Carousel<any>
                    style={{flex: 7, width: theme.width}}
                    width={theme.scale.calc(800)}
                    height={theme.scale.calc(950)}
                    data={data}
                    loop={false}
                    renderItem={({item, index}) => {
                        return (
                            <ItemContainer key={item.name}>
                                <ImgContainer
                                    // style={{
                                    //     width: theme.scale.calc(800),
                                    //     height: theme.scale.calc(950),
                                    // }}
                                    source={{
                                        uri: 'asset:/images/1. 관광명소/1. 도동/1. 섬일주유람선/섬일주유람선-1.jpg',
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Detail', {
                                                detailType: 'attraction',
                                                item: item,
                                                images: item.images,
                                                title: item.name,
                                            });
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor:
                                                theme.colors.setOpacity(
                                                    '0,0,0',
                                                    0.1,
                                                ),
                                        }}
                                    />
                                </ImgContainer>
                                <InfoContainer>
                                    <View>
                                        <TextNormal>{item.name}</TextNormal>
                                        <TextTiny color={theme.colors.darkGray}>
                                            {item.subtitle}
                                        </TextTiny>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Detail', {
                                                detailType: 'attraction',
                                                item: item,
                                            });
                                        }}>
                                        <FlexBox>
                                            <TextTiny>자세히 알아보기</TextTiny>
                                            <FontAwesomeIcon
                                                icon={faAngleRight}
                                                size={10}
                                            />
                                        </FlexBox>
                                    </TouchableOpacity>
                                </InfoContainer>
                            </ItemContainer>
                        );
                    }}
                />
            )}
        </SubCategoryContainer>
    ) : (
        <View>
            <TextNormal>loading...</TextNormal>
        </View>
    );
}

const TitleContainer = styled.View`
    flex: 3;
    justify-content: center;
    padding-left: ${theme.scale.width(5)}px;
    margin: ${theme.scale.heightPercent(2)}px 0;
`;

const SubCategoryContainer = styled.View`
    width: 100%;
    margin-bottom: ${theme.scale.heightPercent(2)}px;
`;

const ItemContainer = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
    margin-right: ${theme.scale.width(5)}px;
    border-radius: ${theme.scale.calc(50)}px;
    overflow: hidden;
    border: 0.5px solid ${theme.colors.setOpacity('0,0,0', 0.1)};
`;

const ImgContainer = styled(ImageBackground).attrs({
    resizeMode: 'cover',
})`
    width: 100%;
    height: 100%;
    flex: 8;
`;

const InfoContainer = styled.View`
    flex-direction: column;
    padding: ${theme.scale.calc(30)}px;
    flex: 2;
    justify-content: space-between;
`;
