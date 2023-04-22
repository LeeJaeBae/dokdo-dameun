import FlexBox from '@/atoms/containers/FlexBox';
import {
    Bold,
    Light,
    SemiBold,
    TextLarge,
    TextSmall,
    TextTiny,
} from '@/atoms/text';
import TextSize from '@/atoms/text/TextSize';
import {theme} from '@/style/theme';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export default function AttractionTitle() {
    const width = Dimensions.get('window').width;
    const [index, setIndex] = useState(0);
    const navigation = useNavigation<any>();

    return (
        <Container
            showsVerticalScrollIndicator={false}
            color={theme.colors.jade}>
            <Background source={require('@assets/img/dae_pung.png')} />
            <Content>
                <Title>
                    <TextSmall color={theme.colors.white}>
                        <Light>울릉도 여행 추천</Light>
                    </TextSmall>
                    <TextSize size={30} color={theme.colors.white}>
                        <SemiBold>
                            초록과 파랑의 협연,{'\n'}그 아름다운 하모니
                        </SemiBold>
                    </TextSize>
                    <TextSmall color={theme.colors.white}>
                        <Light>
                            #Magazine. DOKDODAMEUN{'\n'}#Editor. J #Photo.{'\n'}
                            @yyyphoto_s
                        </Light>
                    </TextSmall>
                </Title>
                <ButtonContainer>
                    <Button
                        onPress={() => {
                            navigation.navigate('Detail', {
                                title: '태하 대풍감',
                            });
                        }}>
                        <TextSmall>
                            <Bold>overview</Bold>
                        </TextSmall>
                        <FontAwesomeIcon icon={faAngleRight} size={15} />
                    </Button>
                </ButtonContainer>
            </Content>
        </Container>
    );
}

const Container = styled.View<{color: string}>`
    flex: 1;
    background-color: ${({color}: any) => color || '#fff'}};
`;

const Background = styled.ImageBackground`
    flex: 1;
`;

const Content = styled.View`
    flex: 1;
`;

const Title = styled.View`
    flex: 6;
    padding: ${({theme}: any) => theme.scale.calc(100)}px;
    width: 80%;
    justify-content: space-evenly;
`;

const ButtonContainer = styled.View`
    flex: 4;
    justify-content: flex-end;
    align-items: flex-end;
    padding: ${({theme}: any) => theme.scale.calc(100)}px;
`;

const Button = styled.TouchableOpacity`
    width: 40%;
    height: 35%;
    background-color: ${({theme}: any) => theme.colors.white};
    border-radius: ${({theme}: any) => theme.scale.calc(100)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
