import styled from 'styled-components/native';

/**
 * @name Text14
 * @description 14px의 글자 크기를 가진 텍스트입니다.
 */
export default styled.Text<{color?: string}>`
    font-family: 'Noto Sans KR';
    font-size: ${(props: any) => props.theme.scale.font(14)}px;
    font-weight: 500;
    color: ${(props: any) => props.color || '#000000'};
`;
