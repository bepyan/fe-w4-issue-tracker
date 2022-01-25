import { styled } from '@styles';
import React, { useState } from 'react';
import { TapProps, TapView } from './Tap';

type TapsProps = {
  initIndex: number;
  children: React.ReactNode;
  onChange?: (index: number) => void;
};

export const Taps = ({ initIndex = 0, children, onChange }: TapsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(initIndex);

  const handleChildChange = (index: number) => {
    setSelectedIndex(index);
    onChange && onChange(index);
  };

  return (
    <TapsView>
      {React.Children.map(children, (child, index) => {
        const item = child as React.ReactElement<React.PropsWithChildren<TapProps>>;

        return React.cloneElement(item, {
          selected: index === selectedIndex,
          onClick: () => {
            handleChildChange(index);
            item.props.onClick && item.props.onClick();
          },
        });
      })}
    </TapsView>
  );
};

Taps.defaultProps = {
  initIndex: 0,
};

export const TapsView = styled('div', {
  display: 'inline-flex',
  backgroundColor: '$background',
  border: '1px solid $line',
  borderRadius: '11px',
  overflow: 'hidden',
  [`& ${TapView} + ${TapView}`]: {
    borderLeft: '1px solid $line',
  },
});
