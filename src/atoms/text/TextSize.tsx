import styled from 'styled-components/native';

/**
 * @name TextSize
 * @description 글자 크기를 조절할 수 있는 텍스트입니다.
 */
export default styled.Text<{
    color?: string;
    size?: number;
    fontWeight?: number;
}>`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) =>
        props.theme.scale.font(props.size ? props.size : 14)}px;
    font-weight: ${(props: any) => props.fontWeight || 400};
    color: ${(props: any) => props.color || '#000000'};
`;
