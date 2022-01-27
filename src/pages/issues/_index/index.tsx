import React from 'react';
import { Table } from '@components';
import { styled } from '@styles';
import { IssueToolbar } from './IssueToolbar';
import { IssueTableItem } from './IssueTableItem';
import { IssueTableHeader } from './IssueTableHeader';

export const Issues = () => {
  return (
    <Wrapper>
      <IssueToolbar />
      <Table header={<IssueTableHeader />}>
        <IssueTableItem />
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
