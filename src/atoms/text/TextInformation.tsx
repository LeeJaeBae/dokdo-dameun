import styled from 'styled-components/native';

export default styled.Text<{color?: string}>`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(12)}px;
    font-weight: 500;
    color: ${(props: any) => props.color || props.theme.colors.text};
    text-align: left;
`;
