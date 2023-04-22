import styled from 'styled-components/native';

export default styled.Text<{color?: string}>`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(25)}px;
    font-weight: 700;
    color: ${(props: any) =>
        props.color
            ? props.color === 'primary'
                ? props.theme.colors.primary
                : props.color
            : '#000000'};
`;
