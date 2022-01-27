import { styled } from '@styles';
import React, { useState } from 'react';
import { Dropdown, Icon, Indicator } from '../';

type Props = {
  label: string;
  title: string;
  children: React.ReactNode;
  onSubmit: (text: string) => void;
};

const INIT_PLACEHOLDER = 'is:issue is:open';
const FOCUS_PlACEHOLDER = 'Search all issues';

export const FilterBar = ({ onSubmit, ...dropdownProps }: Props) => {
  const [focused, setFocused] = useState(false);

  const submitHandler = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as typeof ev.target & {
      search: { value: string };
    };
    onSubmit(target.search.value);
  };

  return (
    <Wrapper focused={focused}>
      <Dropdown {...dropdownProps} label="필터" title="상태 변경"></Dropdown>

      <form onSubmit={submitHandler}>
        <Icon name="search" />
        <input
          id="search"
          placeholder={focused ? FOCUS_PlACEHOLDER : INIT_PLACEHOLDER}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  $$br: '11px',

  display: 'flex',
  alignItems: 'center',
  border: '1px solid $line',
  borderRadius: '$$br',
  backgroundColor: '$input-background',

  [`& ${Indicator}`]: {
    padding: '6px 24px',
    width: '128px',
    boxSizing: 'border-box',
    borderRight: '1px solid $line',
    borderTopLeftRadius: '$$br',
    borderBottomLeftRadius: '$$br',
    backgroundColor: '$background',
    '&:hover': {
      backgroundColor: '$line',
    },
  },

  form: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 26px',
    color: '$title-active',
    iconColor: '$label',
    svg: {
      marginRight: '10px',
    },
    input: {
      flex: 1,
      backgroundColor: 'transparent',
    },
  },

  variants: {
    focused: {
      true: {
        borderColor: '$title-active',
        backgroundColor: '$off-white',
        [`& ${Indicator}`]: {
          backgroundColor: '$off-white',
        },
      },
    },
  },
});
