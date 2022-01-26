import { styled } from '@styles';
import React from 'react';

export type TextInputStatusTextProps = {
  status?: 'success' | 'error';
  statusText?: string;
};

export const TextInputStatusText = ({
  status,
  statusText,
}: TextInputStatusTextProps) => {
  if (!status || !statusText) return null;

  return <StatusText status={status}>{statusText}</StatusText>;
};

const StatusText = styled('span', {
  fontSize: '$x-small',
  marginTop: '0.5rem',

  variants: {
    status: {
      success: {
        color: '$success500',
      },
      error: {
        color: '$error500',
      },
    },
  },
});
