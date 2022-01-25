import { styled } from '@styles';
import React from 'react';
import { IssueTable } from './IssueTable';
import { IssueToolbar } from './IssueToolbar';
import { IssueTableItem } from './IssueTableItem';

export const Issues = () => {
  return (
    <Wrapper>
      <IssueToolbar />
      <IssueTable>
        <IssueTableItem />
      </IssueTable>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '3rem',
  },
});
