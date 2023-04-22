import styled from 'styled-components/native';

/**
 * @name TextSmall
 * @description 12px의 글자 크기를 가진 텍스트입니다.
 */
export default styled.Text<{color?: string; fontWeight?: number}>`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(12)}px;
    font-weight: ${(props: any) => props.fontWeight || 400};
    color: ${(props: any) => props.color || '#000000'};
`;
