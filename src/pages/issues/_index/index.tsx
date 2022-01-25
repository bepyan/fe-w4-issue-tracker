import { styled } from '@styles';
import React from 'react';
import { IssueTable } from './IssueTable';
import { IssueToolbar } from './IssueToolbar';

export const Issues = () => {
  return (
    <Wrapper>
      <IssueToolbar />
      <IssueTable />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '3rem',
  },
});
