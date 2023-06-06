import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { FlightsPage } from './flights';
import { HotelsPage } from './hotels';

export const router = createBrowserRouter([
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
