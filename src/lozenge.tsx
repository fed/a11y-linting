/** @jsxImportSource @compiled/react */
import React from 'react';
import { token } from '@atlaskit/tokens';

export const Lozenge = (props) => (
  <span
    css={[
      props.type === 'primary' && {
        border: `3px solid ${token('color.text.success')}`,
        color: token('color.text.success'),
      },
      props.type === 'default' && {
        border: `3px solid ${token('color.border.discovery')}`,
        color: token('color.text.discovery'),
        backgroundColor: token('color.background.accent.purple.subtler'),
      },
      {
        padding: '4px 8px',
        fontWeight: 600,
        borderRadius: 3,
      },
    ]}
  >
    {props.children}
  </span>
);
