import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import CScrollView from '@/atoms/containers/CScrollView';
import FlexBox from '@/atoms/containers/FlexBox';
import FlexColumn from '@/atoms/containers/FlexColumn';
import Gap from '@/atoms/containers/Gap';
import GradientBox from '@/atoms/containers/GradientBox';
import BottomShadow from '@/atoms/shadow/BottomShadow';
import {
    Bold,
    Light,
    SemiBold,
    Text14,
    TextLarge,
    TextNormal,
    TextSmall,
    TextTiny,
} from '@/atoms/text';
import {theme} from '@/style/theme';
import {
    faBookmark,
    faEye,
    faHeart,
    faShare,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

export default function Review(props: any) {
    const width = Dimensions.get('window').width;
    return (
        <CScrollView>
            <BoxPaddingX>
                <FlexColumn>
                    <Gap size={10} />
                    <TextLarge>
                        <SemiBold>코스모스 리조트</SemiBold>
                    </TextLarge>
                    <TextSmall color={theme.colors.gray}>
                        경북 울릉군 북면 추산길 88-13
                    </TextSmall>
                </FlexColumn>
            </BoxPaddingX>
            <Gap size={10} />
            <FlexColumn>
                <GradientBox gradient={theme.colors.lightGrayGradient}>
                    <ReviewContainer>
                        <ReviewTitle>
                            <FlexBox gap={10}>
                                <Avatar
                                    source={require('@assets/img/gift_background.png')}
                                />
                                <TextNormal>
                                    <Light>김민수</Light>
                                </TextNormal>
                            </FlexBox>
                        </ReviewTitle>
                        <ReviewPhoto
                            width={width}
                            source={require('@assets/img/banner.png')}
                        />
                        <ReviewContent>
                            <Text14>
                                아쿠아리움 같지만 찐 6M 바닷속 물고기들을 볼 수
                                있어서 색다른 기분 🐠💙
                            </Text14>
                        </ReviewContent>
                        <ReviewBottom>
                            <IconContainer>
                                <FontAwesomeIcon
                                    icon={faEye}
                                    color={theme.colors.darkGray}
                                />
                                <TextSmall color={theme.colors.darkGray}>
                                    50
                                </TextSmall>
                            </IconContainer>
                            <IconContainer>
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    color={theme.colors.darkGray}
                                />
                                <TextSmall color={theme.colors.darkGray}>
                                    50
                                </TextSmall>
                            </IconContainer>
                            <IconContainer>
                                <FontAwesomeIcon
                                    icon={faShareNodes}
                                    color={theme.colors.darkGray}
                                />
                                <TextSmall color={theme.colors.darkGray}>
                                    50
                                </TextSmall>
                            </IconContainer>
                            <ReviewLikeContainer>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    color={theme.colors.darkGray}
                                />
                                <TextSmall color={theme.colors.darkGray}>
                                    50
                                </TextSmall>
                            </ReviewLikeContainer>
                        </ReviewBottom>
                    </ReviewContainer>
                </GradientBox>
            </FlexColumn>
        </CScrollView>
    );
}
const IconContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 3px;
    color: ${(props: any) => props.theme.colors.darkGray}!important;
`;

const ReviewBottom = styled.View`
    flex-direction: row;
    gap: ${(props: any) => props.theme.scale.calc(50)}px;
    align-items: center;
`;

const ReviewLikeContainer = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 3px;
`;

const Avatar = styled.ImageBackground`
    width: ${(props: any) => props.theme.scale.calc(120)}px;
    height: ${(props: any) => props.theme.scale.calc(120)}px;
    border-radius: ${(props: any) => props.theme.scale.calc(200)}px;
    background-color: ${(props: any) => props.theme.colors.background};
    overflow: hidden;
`;

const ReviewTitle = styled.View`
    flex: 1;
`;

const ReviewPhoto = styled.ImageBackground<{
    width: number;
}>`
    height: ${(props: any) => props.width * 0.7}px;
    border-radius: ${(props: any) => props.theme.scale.calc(50)}px;
    overflow: hidden;
    margin-top: ${(props: any) => props.theme.scale.calc(50)}px;
    // background image resize mode
    background-size: contain;
`;

const ReviewContent = styled.View`
    flex: 2;
`;

const ReviewContainer = styled.View`
    flex: 1;
    gap: ${(props: any) => props.theme.scale.calc(50)}px;
`;
