import BoxPaddingX from '@/atoms/containers/BoxPaddingX';
import CScrollView from '@/atoms/containers/CScrollView';
import FlexBox from '@/atoms/containers/FlexBox';
import FlexColumn from '@/atoms/containers/FlexColumn';
import Gap from '@/atoms/containers/Gap';
import GradientBox from '@/atoms/containers/GradientBox';
import {
    Light,
    SemiBold,
    Text14,
    TextLarge,
    TextNormal,
    TextSmall,
} from '@/atoms/text';
import {theme} from '@/style/theme';
import {
    faBookmark,
    faEye,
    faHeart,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, View} from 'react-native';
import styled from 'styled-components/native';

export default function Review(props: any) {
    const width = Dimensions.get('window').width;
    const item = props.route.params.items[0];

    return item ? (
        <CScrollView>
            <BoxPaddingX>
                <FlexColumn>
                    <Gap size={10} />
                    <TextLarge>
                        <SemiBold>{item}</SemiBold>
                    </TextLarge>
                    <TextSmall color={theme.colors.gray}>{item}</TextSmall>
                </FlexColumn>
            </BoxPaddingX>
            <Gap size={10} />
            <FlexColumn>
                {item.reviews &&
                    item.reviews.length > 0 &&
                    item.reviews.map((review: any) => (
                        <GradientBox
                            gradient={theme.colors.lightGrayGradient}
                            key={review.id}>
                            <ReviewContainer>
                                <ReviewTitle>
                                    <FlexBox gap={10}>
                                        <Avatar
                                            source={
                                                review.image.includes(
                                                    'base64',
                                                ) ||
                                                require('@assets/img/dae_pung1.png')
                                            }
                                        />
                                        <TextNormal>
                                            <Light>{review.user}</Light>
                                        </TextNormal>
                                    </FlexBox>
                                </ReviewTitle>
                                <ReviewPhoto
                                    width={width}
                                    source={
                                        review.image.includes('base64') ||
                                        require('@assets/img/dae_pung1.png')
                                    }
                                />
                                <ReviewContent>
                                    <Text14>{review.description}</Text14>
                                </ReviewContent>
                                <ReviewBottom>
                                    <IconContainer>
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            color={theme.colors.darkGray}
                                        />
                                        <TextSmall
                                            color={theme.colors.darkGray}>
                                            {review.views}
                                        </TextSmall>
                                    </IconContainer>
                                    <IconContainer>
                                        <FontAwesomeIcon
                                            icon={faBookmark}
                                            color={theme.colors.darkGray}
                                        />
                                        <TextSmall
                                            color={theme.colors.darkGray}>
                                            {review.bookmarks}
                                        </TextSmall>
                                    </IconContainer>
                                    <IconContainer>
                                        <FontAwesomeIcon
                                            icon={faShareNodes}
                                            color={theme.colors.darkGray}
                                        />
                                        <TextSmall
                                            color={theme.colors.darkGray}>
                                            {review.shared}
                                        </TextSmall>
                                    </IconContainer>
                                    <ReviewLikeContainer>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            color={theme.colors.darkGray}
                                        />
                                        <TextSmall
                                            color={theme.colors.darkGray}>
                                            {review.like}
                                        </TextSmall>
                                    </ReviewLikeContainer>
                                </ReviewBottom>
                            </ReviewContainer>
                        </GradientBox>
                    ))}
            </FlexColumn>
        </CScrollView>
    ) : (
        <View></View>
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
