import styled from 'styled-components/native';

type ImageViewProps = {
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    source?: string;
};

export default styled.View<ImageViewProps>`
    width: ${(props: ImageViewProps) => props.width || '100%'};
    height: ${(props: ImageViewProps) => props.height || '100%'};
    border-radius: ${(props: ImageViewProps) => props.borderRadius || '0px'};
    overflow: hidden;
    background-size: ${(props: ImageViewProps) =>
        props.resizeMode || 'contain'};
    background-repeat: no-repeat;
`;
