import Gap from '@/atoms/containers/Gap';
import LSpacing from '@/atoms/text/LSpacing';
import Medium from '@/atoms/text/Medium';
import TextSmall from '@/atoms/text/TextSmall';
import TextTiny from '@/atoms/text/TextTiny';
import WriteVertical from '@/atoms/text/WriteVertical';
import {theme} from '@/style/theme';
import styled from 'styled-components/native';
import {Light} from '@/atoms/text';
import TextSize from '@/atoms/text/TextSize';
import {useEffect, useState} from 'react';
import api from '@/api/axios';

type ListItemProps = {
    children?: React.ReactNode;
    onPress?: () => void;
    item: any;
    index: number;
};

export default function ListItem(props: ListItemProps) {
    const {item} = props;
    const [thumnail, setThumnail] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        if (item.items.length > 0) {
            api.get(`/item/${item.items[0].id}`).then(res => {
                if (res.data) {
                    setThumnail(res.data.images[0].image);
                }
            });

            setSubtitle(item.items[0].subtitle);
            setDescription(item.items[0].description);
        }
    }, [item]);
    return (
        <Container onPress={props.onPress}>
            <Left>
                <Icon
                    source={
                        thumnail
                            ? {
                                  uri: thumnail,
                              }
                            : require('@assets/icon/academy.png')
                    }
                    resizeMode="contain"
                />
                <WriteVertical>
                    <TextSize size={10}>{item.name}</TextSize>
                </WriteVertical>
                <Number>
                    <Medium>{`${(props.index + 1).toLocaleString('KR', {
                        minimumIntegerDigits: 2,
                    })}`}</Medium>
                </Number>
            </Left>
            <Right>
                <Background
                    blurRadius={1}
                    source={
                        thumnail
                            ? {
                                  uri: thumnail,
                              }
                            : require('@assets/icon/academy.png')
                    }>
                    <BackgroundFilter>
                        <TextSmall color={theme.colors.white}>
                            Spacial Product
                        </TextSmall>
                        <TextSize size={20} color={theme.colors.white}>
                            <Light>
                                <LSpacing>{subtitle}</LSpacing>
                            </Light>
                        </TextSize>
                        <Gap size={2} />
                        <TextTiny color={theme.colors.white}>
                            {description}
                        </TextTiny>
                    </BackgroundFilter>
                </Background>
                <RightCorner>
                    <TextTiny color={theme.colors.white}>OVER VIEW</TextTiny>
                </RightCorner>
            </Right>
        </Container>
    );
}

const BackgroundFilter = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${(props: any) => props.theme.colors.backgroundOpacity};
    padding: 20px 20px 20px 20px;
`;

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${(props: any) => props.theme.scale.width(180)}px;
    margin-vertical: ${(props: any) => props.theme.scale.height(5)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${(props: any) => props.theme.colors.backgroundOpacity};
    border-radius: ${(props: any) => props.theme.scale.calc(50)}px;
    overflow: hidden;
`;

const Left = styled.View`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
`;

const Right = styled.View`
    flex: 8;
    position: relative;
    border-radius: ${(props: any) => props.theme.scale.calc(50)}px;
    overflow: hidden;
`;

const RightCorner = styled.View`
    width: ${(props: any) => props.theme.scale.width(100)}px;
    height: ${(props: any) => props.theme.scale.height(15)}px;
    background-color: ${(props: any) => props.theme.colors.purple};
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    width: ${(props: any) => props.theme.scale.width(35)}px;
    height: ${(props: any) => props.theme.scale.width(35)}px;
    border-radius: ${(props: any) => props.theme.scale.calc(35)}px;
    border-width: 1px;
    border-color: ${(props: any) =>
        props.theme.colors.setOpacity('0,0,0', 0.1)};
    overflow: hidden;
    margin-top: ${(props: any) => props.theme.scale.height(5)}px;
    margin-bottom: ${(props: any) => props.theme.scale.height(15)}px;
`;

const Number = styled.Text`
    color: ${(props: any) => props.theme.colors.text};
    font-size: ${(props: any) => props.theme.scale.font(10)}px;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;
