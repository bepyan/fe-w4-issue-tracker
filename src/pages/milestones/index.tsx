import { TableLayout } from '@components';
import { useMilestoneStore } from '@stores';
import { styled } from '@styles';
import { MilestoneHeader } from './MilestoneHeader';
import { MilestoneNewForm } from './MilestoneNewForm';
import { MilestoneTableItem } from './MilestoneTableItem';
import { MilestonesToolbar } from './MilestoneToolbar';
import { useMilestoneItemQuery } from './_hooks';

export const Milestones = () => {
  const { filteredMilestoneList } = useMilestoneStore();

  const { onDeleteMilestone, onToggleMilestoneStatus } =
    useMilestoneItemQuery();

  return (
    <Wrapper>
      <MilestonesToolbar />
      <MilestoneNewForm />
      <TableLayout header={<MilestoneHeader />}>
        {filteredMilestoneList.map((item, index) => (
          <MilestoneTableItem
            key={index}
            milestone={item}
            onToggleMilestoneStatus={onToggleMilestoneStatus}
            onDeleteMilestone={onDeleteMilestone}
          />
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
