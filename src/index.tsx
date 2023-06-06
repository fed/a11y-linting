import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setGlobalTheme } from '@atlaskit/tokens';
import { App } from './app';
import { FlightsPage } from './flights';
import { HotelsPage } from './hotels';

setGlobalTheme({});

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/flights',
    element: <FlightsPage />,
  },
  {
    path: '/hotels',
    element: <HotelsPage />,
  },
]);

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
);
