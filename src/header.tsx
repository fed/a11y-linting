/** @jsxImportSource @compiled/react */
import React from 'react';
import { token } from '@atlaskit/tokens';

export function Header() {
  return (
    <nav
      css={{
        backgroundColor: token('color.background.brand.bold'),
        color: token('color.text.inverse'),
        padding: '8px',
      }}
    >
      <a
        href="/"
        css={{ color: token('color.text.inverse'), textDecoration: 'none', ':focus': { outline: '2px solid' } }}
      >
        Trip planner
      </a>
    </nav>
  );
}
