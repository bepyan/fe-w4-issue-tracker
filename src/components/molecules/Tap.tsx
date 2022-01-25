import { styled } from '@styles';
import React from 'react';

export type TapProps = {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Tap = ({ selected, ...props }: TapProps) => {
  return <TapView role="tab" tabIndex={0} selected={selected} {...props} />;
};

export const TapView = styled('div', {
  flexCenter: 'row',
  width: '160px',
  height: '40px',
  color: '$label',
  iconColor: '$label',
  fontWeight: '$bold',
  cursor: 'pointer',
  '& > * + *': {
    marginLeft: '8px',
  },
  '&:hover': {
    backgroundColor: '$input-background',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '$line',
      },
      false: {
        backgroundColor: '$background',
      },
    },
  },
});
