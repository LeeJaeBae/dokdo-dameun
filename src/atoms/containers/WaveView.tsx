import {ReactNode} from 'react';
import {View} from 'react-native';
import {css} from 'styled-components';
import styled from 'styled-components/native';

const waveRadius = 30;
const cornerRadius = 10;

export const WaveViewTop = ({
    children,
    color,
    bgc,
}: {
    children: ReactNode;
    color?: string;
    bgc?: string;
}) => {
    return (
        <View
            style={{
                position: 'relative',
            }}>
            <WaveComponent color={color}>{children}</WaveComponent>
            <Wave color={color} />
            <WaveCover position="bottom" color={bgc} />
        </View>
    );
};

export const WaveViewBottom = ({
    children,
    color,
    bgc,
}: {
    children: ReactNode;
    color?: string;
    bgc?: string;
}) => {
    return (
        <View
            style={{
                position: 'relative',
            }}>
            <Wave color={bgc} />
            <WaveCover position="top" color={color} />
            <WaveComponent positionState="bottom" color={bgc}>
                {children}
            </WaveComponent>
        </View>
    );
};

const WaveComponent = styled.View<{
    positionState?: 'top' | 'bottom';
    color?: string;
}>`
    background-color: ${(props: any) => props.color || 'white'};
    border-bottom-right-radius: 0px;
    height: ${props =>
        props.positionState === 'bottom'
            ? props.theme.scale.width(400)
            : props.theme.scale.width(350)}px;
    overflow: hidden;
    ${(props: any) =>
        props.positionState === 'top' || props.positionState === undefined
            ? css`
                  border-top-right-radius: ${cornerRadius}px;
                  border-top-left-radius: ${cornerRadius}px;
                  border-bottom-right-radius: 0px;
                  border-bottom-left-radius: ${waveRadius}px;
              `
            : css`
                  border-top-right-radius: ${waveRadius}px;
                  border-top-left-radius: 0px;
                  border-bottom-right-radius: ${cornerRadius}px;
                  border-bottom-left-radius: ${cornerRadius}px;
              `}
`;

const Wave = styled.View<{color?: string}>`
    background-color: ${(props: any) => props.color || 'purple'};
    height: ${props => props.theme.scale.height(18)}px;
`;

const WaveCover = styled.View<{color?: string; position?: 'top' | 'bottom'}>`
    position: absolute;
    background-color: ${(props: any) => props.color || 'white'};
    height: ${props => props.theme.scale.height(18)}px;
    width: 100%;
    ${(props: any) =>
        props.position === 'top'
            ? css`
                  top: 0px;
                  border-bottom-left-radius: ${waveRadius}px;
              `
            : css`
                  bottom: 0px;
                  border-top-right-radius: ${waveRadius}px;
              `}
    left: 0;
`;
