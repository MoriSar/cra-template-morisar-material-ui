import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RawIntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

import intl from 'config/intl';
import defaultTheme from 'theme/default';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RawIntlProvider value={intl}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={defaultTheme}>
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </RawIntlProvider>
  </StrictMode>
);
