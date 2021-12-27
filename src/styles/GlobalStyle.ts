import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    ${({
        theme: {
            breakpoints: { smDevices, mdDevices, laptops, desktop, qhd, uhd },
            colors,
            views,
        },
    }) => css`
        html {
            box-sizing: border-box;
            color: ${colors.gray800};
            font-family: 'IBM Plex Sans', sans-serif;
            scroll-behavior: smooth;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
        }

        body {
            font-family: 'IBM Plex Sans', sans-serif;
            overflow-y: scroll;
            width: 100%;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
        }

        img,
        svg {
            user-select: none;
        }

        li {
            list-style: none;
        }

        a {
            color: inherit;
        }

        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        li,
        input,
        small,
        button {
            border: 0;
            margin: 0;
            padding: 0;
            text-decoration: none;
        }

        h1 {
            line-height: 1em;
        }

        i {
            font-family: 'IBM Plex Serif', serif;
        }

        input,
        textarea,
        button {
            background: transparent;
            font-family: 'IBM Plex Sans', sans-serif;
            outline: none;
            user-select: none;
            -moz-osx-font-smoothing: grayscale;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
            -webkit-font-smoothing: antialiased;
        }

        input,
        input:before,
        input:after {
            -webkit-user-select: initial;
            -khtml-user-select: initial;
            -moz-user-select: initial;
            -ms-user-select: initial;
            user-select: initial;
        }

        button {
            cursor: pointer;
            line-height: 1em;
        }

        #root {
            margin: 0;
            overflow: overlay;
            padding: 0 !important;
            width: 100%;
        }

        .wrapper {
            margin: 0 auto;
            max-width: ${views.desktop};

            @media all and (${smDevices.min}) and (${laptops.max}) {
                margin: 0 auto;
                max-width: ${views.mobile};
            }
        }

        ::-webkit-scrollbar {
            height: 1.2rem;
            width: 1.2rem;
        }

        ::-webkit-scrollbar-track {
            background: white;
        }

        ::-webkit-scrollbar-thumb {
            background-clip: padding-box;
            background-color: ${colors.gray200};
            border: 4px solid white;
            border-radius: 0.6rem;
            height: 0.6rem;
            -webkit-border-radius: 0.6rem;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: ${colors.gray400};
        }

        ::-webkit-scrollbar-thumb {
        }

        /* uhd */
        @media all and (${uhd.min}) {
            html {
                font-size: calc(((1vw + 1vw) / 10) + 10px);
            }
        }

        /* qhd */
        @media all and (${qhd.min}) and (${qhd.max}) {
            html {
                font-size: calc(((1vw + 1vw) / 13) + 9px);
            }
        }

        /* desktop */
        @media all and (${desktop.min}) and (${desktop.max}) {
            html {
                font-size: calc(((1vw + 1vw) / 14) + 7px);
            }
        }

        /* small-desktop */
        @media all and (${laptops.min}) and (${laptops.max}) {
            html {
                font-size: calc(((1vw + 1vw) / 18) + 7px);
            }
        }

        /* medium devices */
        @media all and (${mdDevices.min}) and (${mdDevices.max}) {
            html {
                font-size: calc(((1vw + 1vw) / 8) + 7px);
            }
        }

        /* small devices */
        @media all and (${smDevices.min}) and (${smDevices.max}) {
            html {
                font-size: calc(((1vw + 1vw) / 4) + 6px);
            }
        }
    `}
`;
