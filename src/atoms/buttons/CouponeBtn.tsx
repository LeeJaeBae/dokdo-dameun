import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function CouponeBtn({onPress}: {onPress: () => void}) {
    return (
        <CouponeBtnContainer onPress={onPress}>
            <LeftContainer>
                <CouponeBtnText>쿠폰 다운받기</CouponeBtnText>
            </LeftContainer>
            <RightContainer>
                <FontAwesomeIcon icon={faArrowDown} color="#fff" />
            </RightContainer>
        </CouponeBtnContainer>
    );
}

const CouponeBtnContainer = styled(TouchableOpacity)`
    width: ${({theme}: any) => theme.scale.width(120)}px;
    height: ${({theme}: any) => theme.scale.width(40)}px;
    border-radius: 5px;
    background-color: ${(props: {theme: {colors: {primary: any}}}) =>
        props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    position: absolute;
    right: 0px;
`;

const LeftContainer = styled.View`
    flex: 7;
    align-items: center;
    justify-content: center;
`;

const RightContainer = styled.View`
    flex: 3;
    background-color: rgba(255, 255, 255, 0.3);
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const CouponeBtnText = styled(Text)`
    font-size: ${(props: {theme: {scale: {font: (arg0: number) => any}}}) =>
        props.theme.scale.font(12)}px;
    font-weight: 300;
    color: ${(props: {theme: {colors: {white: any}}}) =>
        props.theme.colors.white};
`;
