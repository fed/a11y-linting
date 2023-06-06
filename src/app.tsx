/** @jsxImportSource @compiled/react */
import React from 'react';

import { token } from '@atlaskit/tokens';
import { Navigation } from './navigation';
import { Header } from './header';

export function App({ children }) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateAreas: `'header header' 'navigation content' 'footer footer'`,
        gridTemplateColumns: '150px 1fr',
        width: '100%',
        margin: 0,
      }}
    >
      <div css={{ gridArea: 'header' }}>
        <Header />
      </div>

      <div
        css={{
          gridArea: 'navigation',
          backgroundColor: token('color.background.neutral'),
          borderRight: `1px solid ${token('color.border')}`,
        }}
      >
        <Navigation />
      </div>

      <main css={{ gridArea: 'content', padding: '16px' }}>{children}</main>

      <footer css={{ gridArea: 'footer', borderTop: `1px solid ${token('color.border')}` }}>Footer</footer>
    </div>
  );
}
