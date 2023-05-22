/** @jsxImportSource @compiled/react */
import React from 'react';
import { token } from '@atlaskit/tokens';

const linkStyles = {
  border: `1px solid ${token('color.border')}`,
  marginBottom: `8px`,
  padding: `6px 8px`,
  display: 'block',
  color: token('color.link'),
  textDecoration: 'none',
  ':focus': {
    outline: '2px solid',
  },
};

export function Navigation() {
  return (
    <ul css={{ padding: `12px`, listStyleType: 'none', margin: 0 }}>
      <li>
        <a href="/about" css={linkStyles}>
          Flights
        </a>
      </li>
      <li>
        <a href="/about" css={linkStyles}>
          Hotels
        </a>
      </li>
      <li>
        <a href="/about" css={linkStyles}>
          Cars
        </a>
      </li>
      <li>
        <a href="/about" css={linkStyles}>
          Packages
        </a>
      </li>
      <li>
        <a href="/about" css={linkStyles}>
          Activities
        </a>
      </li>
      <li>
        <a href="/about" css={linkStyles}>
          Cruises
        </a>
      </li>
    </ul>
  );
}
