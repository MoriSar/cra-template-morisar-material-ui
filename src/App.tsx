import { type FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from 'routers/Router';
import GlobalStyles from 'config/globalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      retry: false,
    },
  },
});

const App: FC = () => (
  <>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </>
);

export default App;
