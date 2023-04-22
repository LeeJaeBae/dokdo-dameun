declare module '*.png' {
    const value: any;
    export = value;
}

// override styled-components typings
declare module 'styled-components' {
    export interface DefaultTheme {
        scale: {
            [key: string]: any;
        };
    }
}
