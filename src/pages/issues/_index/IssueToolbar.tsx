import {
  Button,
  DropdownCheckbox,
  FilterBar,
  Icon,
  LabelsMilestoneTaps,
} from '@components';
import { styled } from '@styles';
import React from 'react';

type Props = {
  onClick?: () => void;
};

export const IssueToolbar = (props: Props) => {
  return (
    <Wrapper>
      <LeftActionWrapper>
        <FilterBar
          label="필터"
          title="이슈 필터"
          onSubmit={(text) => console.log(text)}
        >
          <DropdownCheckbox>열린 이슈</DropdownCheckbox>
          <DropdownCheckbox>내가 작성한 이슈</DropdownCheckbox>
          <DropdownCheckbox>나에게 할당된 이슈</DropdownCheckbox>
          <DropdownCheckbox>내가 댓글을 남긴 이슈</DropdownCheckbox>
          <DropdownCheckbox>닫힌 이슈</DropdownCheckbox>
        </FilterBar>
      </LeftActionWrapper>

      <Blank />

      <RightActionWrapper>
        <LabelsMilestoneTaps
          labelCnt={3}
          milestoneCnt={2}
          onChange={(index) => console.log(index)}
        />
        <Button size="small">
          <Icon name="plus" />
          이슈 작성
        </Button>
      </RightActionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const LeftActionWrapper = styled('div', {
  flex: 1,
});

const Blank = styled('div', {
  minWidth: '16px',
  width: '222px',
});

const RightActionWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  '& > * + * ': {
    marginLeft: '1rem',
  },
});
