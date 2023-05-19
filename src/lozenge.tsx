/** @jsxImportSource @compiled/react */
import React from 'react';

interface Props {
  type: 'primary' | 'default';
  children: string;
}

export const Lozenge: React.FC<Props> = (props) => (
  <span
    css={[
      props.type === 'primary' && {
        border: '3px solid pink',
        color: 'pink',
      },
      props.type === 'default' && {
        border: '3px solid blue',
        color: 'blue',
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
