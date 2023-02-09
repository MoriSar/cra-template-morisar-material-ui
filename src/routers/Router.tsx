import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

import { homeRoute } from './routes';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: homeRoute,
    element: <Home />,
  },
]);

const AppRouter: FC = () => <RouterProvider router={router} />;
export default AppRouter;
