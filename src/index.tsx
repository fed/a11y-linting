import React from 'react';
import { createRoot } from 'react-dom/client';
import { setGlobalTheme } from '@atlaskit/tokens';
import { App } from './app';

setGlobalTheme({});

const root = createRoot(document.getElementById('app'));

root.render(<App />);
