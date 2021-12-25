import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from 'pages';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import 'styles/styles.scss';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
    </ThemeProvider>
);

export default App;
