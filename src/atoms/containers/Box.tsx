import styled from 'styled-components/native';

type BoxProps = {
    width?: string;
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    zIndex?: string;
    overflow?: string;
};

export default styled.View<BoxProps>`
    width: ${(props: BoxProps) => props.width || '100%'};
    height: ${(props: BoxProps) => props.height || '100%'};
    border-radius: ${(props: BoxProps) => props.borderRadius || '0px'};
    background-color: ${(props: BoxProps) =>
        props.backgroundColor || 'transparent'};
    padding: ${(props: BoxProps) => props.padding || '0px'};
    margin: ${(props: BoxProps) => props.margin || '0px'};
    display: ${(props: BoxProps) => props.display || 'flex'};
    justify-content: ${(props: BoxProps) =>
        props.justifyContent || 'flex-start'};
    align-items: ${(props: BoxProps) => props.alignItems || 'flex-start'};
    flex-direction: ${(props: BoxProps) => props.flexDirection || 'row'};
    flex-wrap: ${(props: BoxProps) => props.flexWrap || 'nowrap'};
    position: ${(props: BoxProps) => props.position || 'relative'};
    top: ${(props: BoxProps) => props.top || '0px'};
    left: ${(props: BoxProps) => props.left || '0px'};
    right: ${(props: BoxProps) => props.right || '0px'};
    bottom: ${(props: BoxProps) => props.bottom || '0px'};
    z-index: ${(props: BoxProps) => props.zIndex || '0'};
    overflow: ${(props: BoxProps) => props.overflow || 'visible'};
`;
