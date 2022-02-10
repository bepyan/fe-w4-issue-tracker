import { useEffect, useState } from 'react';
import { Dropdown, Icon, Indicator } from '@components';
import { styled } from '@styles';

type Props = {
  label: string;
  title: string;
  children: React.ReactNode;
  value: string;
  onSubmit: (text: string) => void;
};

const INIT_PLACEHOLDER = 'Search all issues';

export const FilterBar = ({ onSubmit, value, ...dropdownProps }: Props) => {
  const [text, setText] = useState(value);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    onSubmit(target.search.value);
  };

  useEffect(() => setText(value), [value]);

  return (
    <Wrapper>
      <Dropdown {...dropdownProps} label="필터" title="상태 변경"></Dropdown>

      <form onSubmit={submitHandler}>
        <Icon name="search" />
        <input
          id="search"
          placeholder={INIT_PLACEHOLDER}
          value={text}
          onChange={(e) => setText(e.target.value)}
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

  '&:focus-within': {
    borderColor: '$title-active',
    backgroundColor: '$off-white',
    [`& ${Indicator}`]: {
      backgroundColor: '$off-white',
    },
  },
});
