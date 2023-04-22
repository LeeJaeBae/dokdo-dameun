import styled from 'styled-components/native';

export default styled.View<{gap?: number | string}>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${(props: any) => props.theme.scale.font(+props.gap || 5)}px;
`;
