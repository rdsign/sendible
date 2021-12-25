import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            color: ${theme.colors.gray800};
        }

        ::-webkit-scrollbar-track {
            background: white;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.gray200};
            border: 4px solid white;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: ${theme.colors.gray400};
        }
    `}
`;
