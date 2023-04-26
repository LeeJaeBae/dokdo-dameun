import CouponModal from '@/atoms/Modal/Coupon';
import CouponeBtn from '@/atoms/buttons/CouponeBtn';
import Box from '@/atoms/containers/Box';
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
import {Dimensions, Image, ImageBackground, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import tailwind from 'twrnc';
import api from '@/api/axios';

export default function WaveDetail(props: any) {
    const [open, setOpen] = useState(false);
    const width = Dimensions.get('window').width;
    const {navigation} = props;
    const [category, setCategory] = useState<any>({});
    const [data, setData] = useState<any>([]);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        api.get(`/item/${props.route.params.id}`).then(res => {
            if (res.data) {
                setCategory(res.data);

                setData(res.data);

                setTags(res.data.tags.split('/'));
            }
        });
    }, [props.route]);

    return data ? (
        <CScrollView>
            <WaveViewTop color="#4C2A6A" bgc="#fff">
                <Box height="330px">
                    <Carousel<any>
                        width={width}
                        height={theme.scale.width(240)}
                        data={
                            data.images && data.images.length > 0
                                ? data.images
                                : []
                        }
                        scrollAnimationDuration={1000}
                        renderItem={({item, index}) => (
                            <View key={index} style={tailwind`h-full`}>
                                <Image
                                    source={item}
                                    style={tailwind`w-full h-full`}
                                    resizeMode="cover"
                                />
                            </View>
                        )}
                    />
                </Box>
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
                            {data.contact} <Bold>전화걸기</Bold>
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
                    <WaveViewBottom color="#fff" bgc="#4C2A6A">
                        <BoxPaddingX>
                            <BoxPaddingY style={{paddingTop: 40, gap: 15}}>
                                <TextLarge color={'#fff'}>
                                    <Medium>{tags[1]}</Medium>
                                </TextLarge>
                                <TextLarge color={'#fff'}>{tags[2]}</TextLarge>
                                <TextInformation color={'#fff'}>
                                    <Underline>{tags[3]}</Underline>
                                </TextInformation>
                            </BoxPaddingY>
                        </BoxPaddingX>
                        <ImageBackground
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                zIndex: -1,
                            }}
                            source={require('@assets/img/food.png')}
                            resizeMode="cover"
                        />
                    </WaveViewBottom>
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
