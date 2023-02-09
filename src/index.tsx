import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RawIntlProvider } from 'react-intl';

import intl from 'config/intl';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RawIntlProvider value={intl}>
      <App />
    </RawIntlProvider>
  </StrictMode>
);
