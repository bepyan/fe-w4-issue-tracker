import { TableLayout } from '@components';
import { styled } from '@styles';
import { MilestoneHeader } from './MilestoneHeader';
import { MilestoneTableItem } from './MilestoneTableItem';
import { MilestonesToolbar } from './MilestoneToolbar';

export const Milestones = () => {
  return (
    <Wrapper>
      <MilestonesToolbar />
      <TableLayout header={<MilestoneHeader />}>
        <MilestoneTableItem />
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
