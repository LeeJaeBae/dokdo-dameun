import CouponModal from '@/atoms/Modal/Coupon';
import Avatar from '@/atoms/avatar/Avatar';
import FlexColumn from '@/atoms/containers/FlexColumn';
import FlexGrow from '@/atoms/containers/FlexGrow';
import {Text14, TextLarge, TextSmall, TextTiny} from '@/atoms/text';
import TextSize from '@/atoms/text/TextSize';
import {theme} from '@/style/theme';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Dimensions, ImageSourcePropType} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import styled from 'styled-components/native';

export default function AttractionDetail(props: any) {
    const width = Dimensions.get('window').width;
    const [index, setIndex] = useState(0);
    const navigation = useNavigation<any>();
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const {item} = props.route.params;

    useEffect(() => {
        setImages(props.route.params.item.images);
    }, [props.route]);

    return (
        <Container>
            <Content>
                <Title>
                    <TextLarge color={theme.colors.jade}>{item.name}</TextLarge>
                    <Text14 color={theme.colors.gray}>{item.address}</Text14>
                </Title>
                <TextSmall>{item.description}</TextSmall>
                <ButtonContainer>
                    <ReviewContainer>
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <Avatar
                                    key={index}
                                    index={index}
                                    source={require('@assets/img/dae_pung1.png')}
                                />
                            ))}
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Review');
                            }}>
                            <FlexColumn>
                                <TextSmall color={theme.colors.jade}>
                                    +{item.reviews.length}
                                </TextSmall>
                                <TextSize size={8} color={theme.colors.jade}>
                                    더보기
                                </TextSize>
                            </FlexColumn>
                        </TouchableOpacity>
                    </ReviewContainer>
                    <Button onPress={handleOpen}>
                        <FlexGrow>
                            <TextTiny color={theme.colors.white}>
                                쿠폰 다운받기
                            </TextTiny>
                        </FlexGrow>
                        <ArrowContainer>
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                size={20}
                                color="white"
                            />
                        </ArrowContainer>
                    </Button>
                </ButtonContainer>
            </Content>
            <Carousel<ImageSourcePropType>
                data={
                    // database[`${item.key}`][item.index[0]].items[item.index[1]]
                    //     .images
                    images
                }
                renderItem={({item, index}) => {
                    return (
                        <Background
                            // onLoad={() => {
                            //
                            // }}
                            key={index}
                            source={item}
                        />
                    );
                }}
                width={theme.width}
                height={theme.scale.heightPercent(55)}
            />
            <CouponModal open={open} close={handleClose} data={item.coupon} />
        </Container>
    );
}

const ArrowContainer = styled.View`
    background-color: ${({theme}: any) =>
        theme.colors.setOpacity('255,255,255', 0.1)};
    height: 100%;
    width: ${({theme}: any) => theme.scale.width(40)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    right: 0px;
`;

const ReviewContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.View<{color: string}>`
    flex: 4;
    background-color: ${({color}: any) => color || '#fff'}};
`;

const Background = styled.ImageBackground`
    flex: 1;
`;

const Content = styled.View`
    flex: 1;
    padding: ${({theme}: any) => theme.scale.calc(100)}px;
    justify-content: space-between;
`;

const Title = styled.View``;

const ButtonContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: ${({theme}: any) => theme.scale.calc(100)}px 0px;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}: any) => theme.colors.backgroundOpacity};
`;

const Button = styled.TouchableOpacity`
    background-color: ${({theme}: any) => theme.colors.jade};
    height: 100%;
    width: ${({theme}: any) => theme.scale.width(100)}px;
    flex-direction: row;
    align-items: center;
    padding-left: ${({theme}: any) => theme.scale.width(10)}px;
    border-radius: ${({theme}: any) => theme.scale.calc(10)}px;
    overflow: hidden;
`;
