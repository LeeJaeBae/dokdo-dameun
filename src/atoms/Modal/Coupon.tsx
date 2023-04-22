import styled from 'styled-components/native';

const CouponModal = ({
    open,
    close,
    data,
}: {
    open: boolean;
    close: () => void;
    data?: any;
}) => {
    return (
        <ModalStyled
            statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={close}>
            <Container onTouchEnd={close}>
                <CouponBackground>
                    <CouponContainer resizeMode="contain" source={data.image}>
                        <InfoContainer>
                            <InfoTitleContainer>
                                <CouponText>{data.title}</CouponText>
                                <CouponSubTitle>{data.subtitle}</CouponSubTitle>
                            </InfoTitleContainer>
                            <CouponDescription>
                                {data.description}
                            </CouponDescription>
                        </InfoContainer>
                        <Money
                            resizeMode="contain"
                            source={require('@assets/img/money.png')}
                        />
                    </CouponContainer>
                </CouponBackground>
            </Container>
        </ModalStyled>
    );
};

export default CouponModal;

const InfoTitleContainer = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: ${(props: any) => props.theme.scale.height(22)}px 0px;
    border-bottom-width: 1px;
    border-top-width: 1px;
    width: 100%;
    border-color: ${(props: any) =>
        props.theme.colors.setOpacity('255,255,255', 0.4)};
`;

const ModalStyled = styled.Modal`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
`;

const Container = styled.View`
    background-color: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
`;

const CouponBackground = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const CouponContainer = styled.ImageBackground`
    width: 100%;
    height: ${(props: any) => props.theme.scale.heightPercent(80)}px;
    justify-content: center;
    align-items: center;
    gap: ${(props: any) => props.theme.scale.height(10)}px;
`;

const InfoContainer = styled.View`
    align-items: center;
    justify-content: center;
    gap: ${(props: any) => props.theme.scale.height(10)}px;
    height: ${(props: any) => props.theme.scale.heightPercent(100)}px;
    width: ${(props: any) => props.theme.scale.width(220)}px;
`;

const CouponText = styled.Text`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(22)}px;
    font-weight: 700;
    color: ${(props: any) => props.theme.colors.white};
    text-align: center;
`;

const CouponSubTitle = styled.Text`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(14)}px;
    font-weight: 700;
    color: ${(props: any) => props.theme.colors.white};
`;

const CouponDescription = styled.Text`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(10)}px;
    font-weight: 500;
    color: ${(props: any) => props.theme.colors.white};
`;

const Money = styled.ImageBackground`
    width: 100%;
    height: ${(props: any) => props.theme.scale.height(50)}px;
    position: absolute;
    bottom: ${(props: any) => props.theme.scale.height(10)}px;
`;
