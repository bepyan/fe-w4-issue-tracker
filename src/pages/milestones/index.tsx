import { TableLayout } from '@components';
import { useMilestoneStore } from '@stores';
import { styled } from '@styles';
import { MilestoneHeader } from './MilestoneHeader';
import { MilestoneNewForm } from './MilestoneNewForm';
import { MilestoneTableItem } from './MilestoneTableItem';
import { MilestonesToolbar } from './MilestoneToolbar';

export const Milestones = () => {
  const { filteredMilestoneList } = useMilestoneStore();

  return (
    <Wrapper>
      <MilestonesToolbar />
      <MilestoneNewForm />

      <TableLayout header={<MilestoneHeader />}>
        {filteredMilestoneList.map((item, index) => (
          <MilestoneTableItem key={index} milestone={item} />
        ))}
        {!filteredMilestoneList.length && <div>마일스톤이 없습니다.</div>}
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
