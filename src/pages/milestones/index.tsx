import { Table, TextButton } from '@components';
import { styled } from '@styles';
import React from 'react';
import { MilestoneHeader } from './MilestoneHeader';
import { MilestoneTableItem } from './MilestoneTableItem';
import { MilestonesToolbar } from './MilestoneToolbar';

export const Milestones = () => {
  return (
    <Wrapper>
      <MilestonesToolbar />
      <Table header={<MilestoneHeader />}>
        <MilestoneTableItem />
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
