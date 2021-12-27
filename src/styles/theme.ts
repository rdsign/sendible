export const theme = {
    breakpoints: {
        smDevices: {
            min: 'min-width: 260px',
            max: 'max-width: 767px',
        },
        mdDevices: {
            min: 'min-width: 768px',
            max: 'max-width: 1024px',
        },
        laptops: {
            min: 'min-width: 1025px',
            max: 'max-width: 1440px',
        },
        desktop: {
            min: 'min-width: 1441px',
            max: 'max-width: 1920px',
        },
        qhd: {
            min: 'min-width: 1921px',
            max: 'max-width: 2560px',
        },
        uhd: {
            min: 'min-width: 2561px',
        },
    },
    colors: {
        gray800: '#201e24',
        gray400: '#48464b',
        gray200: '#a09fa0',
        gray100: '#f4f4f4',
        primary400: '#4d36ff',
        secondary400: '#ff6153',
        transparent: 'transparent',
        white: '#ffffff',
        blackOverlay: 'rgba(32, 30, 36, 0.9)',
        redGradient: 'linear-gradient(180deg, rgba(255, 97, 83, 0.3) 0%, #FF6153 100%);',
    },
    motions: {
        cubic: 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
    shadows: {
        small: '0 0.4rem 1.2rem rgba(0, 0, 0, 0.07)',
        large: '0 1.6rem 4.8rem rgba(0, 0, 0, 0.07)',
    },
    spacings: {
        mobile: '3rem',
    },
    views: {
        desktop: '70%',
        mobile: '90%',
    },
    zIndexes: {
        bellow: -1,
        step: 1,
        priority: 10,
        topPriority: 100,
    },
};
