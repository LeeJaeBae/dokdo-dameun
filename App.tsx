/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {theme} from '@/style/theme';
import {ThemeProvider} from 'styled-components/native';
import {TailwindProvider} from 'tailwind-rn/dist';
import RootComponent from './src';
import utilities from './tailwind.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
    return (
        // @ts-ignore
        <TailwindProvider utilities={utilities}>
            <ThemeProvider theme={theme}>
                <GestureHandlerRootView
                    style={{
                        flex: 1,
                    }}>
                    <RootComponent />
                </GestureHandlerRootView>
            </ThemeProvider>
        </TailwindProvider>
    );
}

export default App;
