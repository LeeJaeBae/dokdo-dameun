import styled from 'styled-components/native';

export default styled.ImageBackground<{index?: number}>`
    width: ${(props: any) => props.theme.scale.calc(120)}px;
    height: ${(props: any) => props.theme.scale.calc(120)}px;
    border-radius: ${(props: any) => props.theme.scale.width(50)}px;
    overflow: hidden;
    transform: ${(props: any) =>
        props.index ? `translateX(-${props.index * 10}px)` : 'translateX(0px)'};
`;
