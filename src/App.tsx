import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Default } from 'layouts';
import { Home } from 'pages';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import 'styles/_fonts.scss';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Default>
            <Home />
        </Default>
    </ThemeProvider>
);

export default App;
