import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

type TileContainerProps = {
    gradient: string[];
    height?: number | string;
    sx?: {[key: string]: string};
    theme?: any;
};

export default styled(LinearGradient).attrs((props: TileContainerProps) => ({
    colors: [props.gradient[0], props.gradient[1]],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
}))<TileContainerProps>`
    border-radius: 30px;
    padding: ${(props: TileContainerProps) => props.theme.scale.calc(80)}px;
    width: 100%;
    height: auto;
    position: relative;
    border: 1px solid
        ${(props: TileContainerProps) => props.theme.colors.background};
    background-filter: opacity(0.5);
    margin-bottom: ${(props: TileContainerProps) =>
        props.theme.scale.width(10)}px;
`;
