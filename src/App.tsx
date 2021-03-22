import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { MusicProvider } from './contexts/MusicContext';
import { QuestionsProvider } from './contexts/QuestionsContext';
import Routes from './routes';
import api from './services/api';
import GlobalStyles from './styles/GlobalStyles';
import { themes } from "./styles/Themes";

function App() {
  return (
    <ThemeProvider theme={themes.main}>
      <MusicProvider>
        <QuestionsProvider>
          <SWRConfig value={{fetcher: (url: string) => api(url).then(r => r.data)}}>
            <Routes />
          </SWRConfig>
          <GlobalStyles />
        </QuestionsProvider>
      </MusicProvider>
    </ThemeProvider>
  );
}

export default App;
