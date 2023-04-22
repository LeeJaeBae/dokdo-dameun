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
import breakWords from '@/lib/breakWords';
import {theme} from '@/style/theme';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {
    faInfoCircle,
    faLocationDot,
    faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {Dimensions, Image, ImageBackground, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import tailwind from 'twrnc';

export default function WaveDetail() {
    const [open, setOpen] = useState(false);
    const width = Dimensions.get('window').width;
    return (
        <CScrollView>
            <WaveViewTop color="#4C2A6A" bgc="#fff">
                <Box height="330px">
                    <Carousel
                        width={width}
                        height={330}
                        data={[
                            require('@assets/banner.png'),
                            require('@assets/banner1.png'),
                            require('@assets/banner2.png'),
                        ]}
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
                <Box alignItems="center" height="70px">
                    <TextSmall color={'#fff'} style={{marginLeft: 10}}>
                        여행객들이 극찬하는 맛집
                    </TextSmall>
                </Box>
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
                        <TextLarge color={'primary'}>신비섬횟집</TextLarge>
                        <TextSmall>
                            <Bold>꽁치물회와 전복죽이 유명한 맛집!</Bold>
                        </TextSmall>
                    </View>
                    <View>
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
                        <TextSmall>
                            경상북도 울릉군 울릉읍 울릉순환로 592 신비섬횟집
                        </TextSmall>
                    </FlexBox>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faClock}
                            color={theme.colors.primary}
                        />
                        <TextSmall>
                            <Bold>영업전</Bold> 매일 11:00 ~ 21:00
                        </TextSmall>
                    </FlexBox>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            color={theme.colors.primary}
                        />
                        <TextSmall>
                            054-791-4460 <Bold>전화걸기</Bold>
                        </TextSmall>
                    </FlexBox>
                    <FlexBox>
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            color={theme.colors.primary}
                        />
                        <TextSmall>
                            매장 내 식사 · 테이크아웃 · 배달불가능
                        </TextSmall>
                    </FlexBox>
                </View>
            </BoxPaddingX>
            <WaveViewBottom color="#fff" bgc="#4C2A6A">
                <BoxPaddingX>
                    <BoxPaddingY style={{paddingTop: 40, gap: 15}}>
                        <TextLarge color={'#fff'}>
                            <Medium>신선한 해산물과</Medium>
                        </TextLarge>
                        <TextLarge color={'#fff'}>
                            비법 육수로 만든 {'\n'}시원한 물회
                        </TextLarge>
                        <TextInformation color={'#fff'}>
                            <Underline>
                                특물회 주문시 {'\n'}맥주 1병 무료제공
                            </Underline>
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
            <FlexCenter height={120}>
                <TextInformation>
                    {
                        '현지 상황(날씨,인원 등)에 따라 할인 및 서비스 내용이 변동될 수 있으며 매장에서 안내 받으시길 바랍니다.'
                    }
                    <Bold> 중복 사용 가능</Bold>
                </TextInformation>
            </FlexCenter>
            <CouponModal
                open={open}
                close={() => {
                    setOpen(false);
                }}
            />
        </CScrollView>
    );
}
