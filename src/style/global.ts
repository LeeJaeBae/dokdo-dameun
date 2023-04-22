import {StyleSheet} from 'react-native';

export const setColor = (color?: string, style?: object) => {
    if (style) {
        return {...style, color: color};
    }
    return {color: color ? color : 'black'};
};

const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
    textSmall: {
        fontSize: 14,
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
    textSmallBold: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
    textLight: {
        fontSize: 16,
        fontWeight: '300',
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
    textTiny: {
        fontSize: 10,
        fontFamily: 'Noto Sans KR',
        color: '#000',
    },
});

export default GlobalStyle;
