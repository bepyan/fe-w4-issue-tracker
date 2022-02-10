import React, { useEffect, useState } from 'react';
import { styled } from '@styles';
import { Icon } from '@components';
import { DropdownItemWrapper } from './DropdownItem';

type Props = {
  initSelected?: boolean;
  children: React.ReactNode;
  value?: boolean;
  onChange?: (selected: boolean) => void;
  onClick?: () => void;
};

export const DropdownCheckbox = ({
  initSelected,
  value,
  children,
  onChange,
  onClick,
}: Props) => {
  const [selected, setSelected] = useState(!!initSelected);

  const onClickCheckbox = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onChange?.(newSelected);
    onClick?.();
  };

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  return (
    <Wrapper onClick={onClickCheckbox}>
      {children}
      <Icon name={selected ? 'check_on_circle' : 'check_off_circle'} />
    </Wrapper>
  );
};

const Wrapper = styled(DropdownItemWrapper, {
  '& svg:last-child': {
    marginLeft: 'auto',
  },
});
