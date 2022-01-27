import { HeaderLink, Icon } from '@components';
import { styled } from '@styles';
import React from 'react';

type Props = {};

export const MilestoneHeader = ({}: Props) => {
  return (
    <Wrapper>
      <HeaderLink selected={true}>
        <Icon name="alert_circle" />
        <span>열린 마일스톤(2)</span>
      </HeaderLink>
      <HeaderLink>
        <Icon name="archive" />
        <span>닫힌 마일스톤(0)</span>
      </HeaderLink>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});
