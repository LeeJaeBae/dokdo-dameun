import styled from 'styled-components/native';

export default styled.View<{size: number}>`
    width: ${(props: any) => props.theme.scale.width(props.size)}px;
    height: ${(props: any) => props.theme.scale.height(props.size)}px;
`;
