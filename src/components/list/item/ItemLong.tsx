import BoxPaddingY from '@/atoms/containers/BoxPaddingY';
import Gap from '@/atoms/containers/Gap';
import Bold from '@/atoms/text/Bold';
import Light from '@/atoms/text/Light';
import TextLarge from '@/atoms/text/TextLarge';
import TextNormal from '@/atoms/text/TextNormal';
import TextSmall from '@/atoms/text/TextSmall';
import breakWords from '@/lib/breakWords';
import {theme} from '@/style/theme';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartOn} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

type ListItemProps = {
    children?: React.ReactNode;
    onPress?: () => void;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    index: number;
    category: string;
};

export default function ItemLong(props: ListItemProps) {
    const [isLike, setIsLike] = useState(false);
    const navigation = useNavigation<any>();
    return (
        <BoxPaddingY>
            <Container>
                <Background source={props.backgroundImage}>
                    <BackgroundFilter>
                        <LikeButton
                            onPress={() => {
                                setIsLike(!isLike);
                            }}>
                            {isLike ? (
                                <FontAwesomeIcon
                                    icon={faHeartOn}
                                    size={theme.scale.calc(80)}
                                    color={theme.colors.red}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    size={theme.scale.calc(80)}
                                    color={theme.colors.white}
                                />
                            )}
                        </LikeButton>
                        <View>
                            <Gap size={10} />
                            <TextNormal color={theme.colors.white}>
                                <Bold>{props.category}</Bold>
                            </TextNormal>
                            <Gap size={5} />
                            <TextSmall color={theme.colors.white}>
                                {breakWords(props.description, 19, 2)}
                            </TextSmall>
                        </View>
                        <View>
                            <TextNormal color={theme.colors.white}>
                                {props.subtitle}
                            </TextNormal>
                            <Gap size={2} />
                            <TextLarge color={theme.colors.white}>
                                {breakWords(props.title, 19, 2)}
                            </TextLarge>
                            <Gap size={15} />
                        </View>
                        <OverViewBtn
                            onPress={() => {
                                navigation.navigate('Item', {
                                    title: props.title,
                                    detailType: 'hotel',
                                });
                            }}>
                            <TextNormal color={theme.colors.white}>
                                <Light>OVERVIEW</Light>
                            </TextNormal>
                        </OverViewBtn>
                    </BackgroundFilter>
                </Background>
            </Container>
        </BoxPaddingY>
    );
}

const LikeButton = styled.TouchableOpacity`
    width: ${(props: any) => props.theme.scale.calc(100)}px;
    height: ${(props: any) => props.theme.scale.calc(100)}px;

    position: absolute;
    top: ${(props: any) => props.theme.scale.height(10)}px;
    right: ${(props: any) => props.theme.scale.height(10)}px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const BackgroundFilter = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${(props: any) => props.theme.colors.backgroundOpacity};
    padding: ${(props: any) => props.theme.scale.height(10)}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

const Container = styled.View`
    width: 100%;
    height: ${(props: any) => props.theme.scale.height(180)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${(props: any) => props.theme.colors.backgroundOpacity};
`;

const OverViewBtn = styled.TouchableOpacity`
    width: ${(props: any) => props.theme.scale.width(100)}px;
    height: ${(props: any) => props.theme.scale.height(20)}px;
    border: 1px solid ${(props: any) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${(props: any) => props.theme.scale.height(10)}px;
    right: ${(props: any) => props.theme.scale.height(10)}px;
`;
