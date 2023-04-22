import styled from 'styled-components/native';

export default styled.ImageBackground<{index?: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props: any) => props.theme.scale.calc(180)}px;
    height: ${(props: any) => props.theme.scale.calc(180)}px;
    border-radius: ${(props: any) => props.theme.scale.calc(200)}px;
    background-color: ${(props: any) => props.theme.colors.background};
    overflow: hidden;
    background-fit: cover;
    transform: translateX(${(props: any) => props.index * -20}px);
`;
