import CouponModal from '@/atoms/Modal/Coupon';
import CouponeBtn from '@/atoms/buttons/CouponeBtn';
import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import BoxPaddingY from '@/atoms/containers/BoxPaddingY';
import CScrollView from '@/atoms/containers/CScrollView';
import FlexBox from '@/atoms/containers/FlexBox';
import FlexCenter from '@/atoms/containers/FlexCenter';
import {WaveViewBottom, WaveViewTop} from '@/atoms/containers/WaveView';
import Bold from '@/atoms/text/Bold';
import Medium from '@/atoms/text/Medium';
import TextInformation from '@/atoms/text/TextInformation';
import TextLarge from '@/atoms/text/TextLarge';
import TextSmall from '@/atoms/text/TextSmall';
import Underline from '@/atoms/text/Underline';
import {theme} from '@/style/theme';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {
    faInfoCircle,
    faLocationDot,
    faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ImageBackground, Linking, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import tailwind from 'twrnc';
import api from '@/api/axios';
import {useCategory} from '@/lib/context/CategoryContext';

export default function WaveDetail(props: any) {
    const [open, setOpen] = useState(false);
    const width = Dimensions.get('window').width;
    const {navigation} = props;
    const [category, setCategory] = useState<any>({});
    const [data, setData] = useState<any>();
    const [tags, setTags] = useState<string[]>([]);
    const {noBottom} = props.route.params;

    useEffect(() => {
        api.get(`/item/${props.route.params.id}`).then(res => {
            if (res.data) {
                setCategory(res.data);

                setData(res.data);

                setTags(res.data.tags.split('/'));
            }
        });
    }, [props.route]);

    const {getUrl} = useCategory();

    return data ? (
        <CScrollView>
            <WaveViewTop color="#4C2A6A" bgc="#fff">
                <Carousel<any>
                    width={width}
                    loop={false}
                    height={theme.scale.width(300)}
                    data={
                        noBottom ? data.imagesUrl : data.imagesUrl.slice(0, -2)
                    }
                    scrollAnimationDuration={1000}
                    renderItem={({item, index}) => (
                        <View key={index} style={tailwind`h-full`}>
                            <Image
                                source={{
                                    uri: getUrl(item),
                                }}
                                style={tailwind`w-full h-full`}
                                resizeMode="cover"
                            />
                        </View>
                    )}
                />

                <View
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 18,
                        left: 10,
                    }}>
                    <TextSmall color={'#fff'} style={{marginLeft: 10}}>
                        {data.description}
                    </TextSmall>
                </View>
            </WaveViewTop>
            <BoxPaddingX
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 15,
                }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        <TextLarge color={'primary'}>{data.title}</TextLarge>
                        <TextSmall>
                            <Bold>{data.subtitle}</Bold>
                        </TextSmall>
                    </View>
                    <View
                        style={{
                            flexGrow: 1,
                        }}>
                        <CouponeBtn
                            onPress={() => {
                                setOpen(true);
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        gap: 15,
                    }}>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            color={theme.colors.primary}
                        />
                        <TextSmall>{data.address}</TextSmall>
                    </FlexBox>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faClock}
                            color={theme.colors.primary}
                        />
                        <TextSmall>
                            <Bold>영업전</Bold> 매일 {data.time}
                        </TextSmall>
                    </FlexBox>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            color={theme.colors.primary}
                        />
                        <TextSmall>
                            {data.contact}{' '}
                            <Bold
                                onPress={() => {
                                    Linking.openURL(`tel:${data.contact}`);
                                }}>
                                전화걸기
                            </Bold>
                        </TextSmall>
                    </FlexBox>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            color={theme.colors.primary}
                        />
                        <TextSmall>{tags[0]}</TextSmall>
                    </FlexBox>
                </View>
            </BoxPaddingX>
            {props.route.params.noBottom ? null : (
                <>
                    <View
                        style={{
                            overflow: 'hidden',
                        }}>
                        <WaveViewBottom color="#fff" bgc="#4C2A6A">
                            <BoxPaddingX>
                                <BoxPaddingY
                                    style={{
                                        paddingTop: 40,
                                        paddingHorizontal: 20,
                                        gap: 15,
                                    }}>
                                    <TextLarge color={'#fff'}>
                                        <Medium>{data.information[0]}</Medium>
                                    </TextLarge>
                                    <TextLarge color={'#fff'}>
                                        {data.information[1]}
                                    </TextLarge>
                                    <TextInformation color={'#fff'}>
                                        <Underline>
                                            {data.information[2]}
                                            {'\n'}
                                            {data.information[3]}
                                        </Underline>
                                    </TextInformation>
                                </BoxPaddingY>
                            </BoxPaddingX>
                        </WaveViewBottom>
                        <ImageBackground
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                zIndex: 1,
                            }}
                            source={{
                                uri: getUrl(data.imagesUrl.slice(-2)[0]),
                            }}
                            resizeMode="cover"
                        />
                    </View>
                    <FlexCenter height={110}>
                        <TextInformation>
                            {
                                '현지 상황(날씨,인원 등)에 따라 할인 및 서비스 내용이 변동될 수 있으며 매장에서 안내 받으시길 바랍니다.'
                            }
                            <Bold> 중복 사용 가능</Bold>
                        </TextInformation>
                    </FlexCenter>
                </>
            )}

            <CouponModal
                open={open}
                close={() => {
                    setOpen(false);
                }}
                data={data.coupon}
            />
        </CScrollView>
    ) : (
        <View>
            <TextLarge>로딩중</TextLarge>
        </View>
    );
}
