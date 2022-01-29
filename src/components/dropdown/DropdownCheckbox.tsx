import React, { useState } from 'react';
import { styled } from '@styles';
import { Icon } from '@components';
import { DropdownItemWrapper } from './DropdownItem';

type Props = {
  initSelected?: boolean;
  children: React.ReactNode;
  onChange?: (selected: boolean) => void;
};

export const DropdownCheckbox = ({
  initSelected,
  children,
  onChange,
}: Props) => {
  const [selected, setSelected] = useState(!!initSelected);

  const onClick = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onChange && onChange(newSelected);
  };

  return (
    <Wrapper onClick={onClick}>
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
