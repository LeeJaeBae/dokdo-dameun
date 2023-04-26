import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

type TileContainerProps = {
    gradient: string[];
    height?: number | string;
    isPadding?: boolean;
};

export default styled(LinearGradient).attrs((props: TileContainerProps) => ({
    colors: [props.gradient[0], props.gradient[1]],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
}))<TileContainerProps>`
    border-radius: 10px;
    width: 100%;
    height: ${(props: TileContainerProps) => props.height || 'auto'};
    position: relative;
    overflow: hidden;
`;
