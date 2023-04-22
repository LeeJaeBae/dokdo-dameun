import {Dimensions} from 'react-native';

export const theme = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    colors: {
        primary: '#4C2A6A',
        secondary: '#F2F2F2',
        error: '#FF0000',
        success: '#00FF00',
        warning: '#FFA500',
        info: '#0000FF',
        white: '#FFFFFF',
        black: '#000000',
        purple: '#730EFC',
        gray: '#808080',
        lightGray: '#D3D3D3',
        lightGrayGradient: ['#F1F1F1', '#F9F9F9'],
        darkGray: '#A9A9A9',
        transparent: 'transparent',
        text: '#000000',
        background: '#FFFFFF',
        red: '#D21312',
        brown: '#927F69',
        deepBrown: '#6F593F',
        jade: '#6699AC',
        green: '#79AC66',
        backgroundOpacity: 'rgba(0, 0, 0, 0.1)',
        setOpacity: (color: string, opacity: number) =>
            `rgba(${color},${opacity})`,
        border: 'rgba(0, 0, 0, 0.1)',
        shadow: 'rgba(0, 0, 0, 0.05)',
    },
    scale: {
        calc: (value: number) => {
            return value / Dimensions.get('window').scale;
        },
        font: (value: number) => {
            return value / Dimensions.get('window').fontScale;
        },
        width: (value: number) => {
            return (
                (value / 1000) *
                Dimensions.get('window').width *
                Dimensions.get('window').scale
            );
        },
        height: (value: number) => {
            return (
                (value / 1000) *
                Dimensions.get('window').height *
                Dimensions.get('window').scale
            );
        },
        widthPercent: (value: number) => {
            return (value / 100) * Dimensions.get('window').width;
        },
        heightPercent: (value: number) => {
            return (value / 100) * Dimensions.get('window').height;
        },
    },
};
