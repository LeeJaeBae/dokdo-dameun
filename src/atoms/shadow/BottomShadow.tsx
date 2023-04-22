import {theme} from '@/style/theme';
import {Platform} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

export default styled(Shadow).attrs((props: any) => ({
    startColor: props.startColor || theme.colors.shadow,
    offset: props.offset || [0, 0],
    elevation: props.elevation || 5,
    radius: props.radius || 10,
    distance: props.distance || 20,
}))<any>`
    width: 100%;

    ${(props: any) => {
        if (!props.sx) {
            return '';
        }
        return Object.keys(props.sx).reduce((acc, key) => {
            return acc + `${key}: ${props.sx[key]};`;
        }, '');
    }}
`;
