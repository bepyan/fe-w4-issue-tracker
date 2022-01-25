import { styled } from '@styles';
import React from 'react';
import { Icon } from './Icon';

const ToggleLabel = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$medium',
  fontSize: '$x-small',
  borderRadius: '30px',
  padding: '10px 16.5px',
  svg: {
    marginRight: '4px',
  },

  variants: {
    kind: {
      open: {
        backgroundColor: '$primary100',
        color: '$primary300',
        iconColor: '$primary300',
        border: '1px solid $primary300',
      },
      close: {
        backgroundColor: '$secondary100',
        color: '$secondary300',
        iconColor: '$secondary300',
        border: '1px solid $secondary300',
      },
    },
  },
});

type Props = {
  isOpen: boolean;
};

export const IssueLabel = ({ isOpen }: Props) => {
  return (
    <ToggleLabel kind={isOpen ? 'open' : 'close'}>
      <Icon name={isOpen ? 'alert_circle' : 'archive'} />
      {isOpen ? '열린 이슈' : '닫힌 이슈'}
    </ToggleLabel>
  );
};
