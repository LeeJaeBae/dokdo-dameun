import styled from 'styled-components/native';

type Props = {
    height: string;
};

export default styled.View<Props>`
    width: 100%;
    // height: ${(props: any) =>
        (props.height as string).includes('px')
            ? props.height
            : props.theme.scale.font(+props.height)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
`;
