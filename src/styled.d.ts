import 'styled-components';

export interface MinMax {
    max?: string;
    min?: string;
}
declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            smDevices: MinMax;
            mdDevices: MinMax;
            laptops: MinMax;
            desktop: MinMax;
            qhd: MinMax;
            uhd: MinMax;
        };
        colors: {
            [k: string]: string | undefined;
            gray800: string;
            gray400: string;
            gray200: string;
            gray100: string;
            primary400: string;
            secondary400: string;
            transparent: string;
            white: string;
            blackOverlay: string;
            redGradient: string;
        };
        motions: {
            cubic: string;
        };
        shadows: {
            [k: string]: string | undefined;
            small: string;
            large: string;
        };
        spacings: {
            mobile: string;
        };
        views: {
            desktop: string;
            mobile: string;
        };
        zIndexes: {
            [k: string]: number | undefined;
            bellow: number;
            step: number;
            priority: number;
            topPriority: number;
        };
    }
}
