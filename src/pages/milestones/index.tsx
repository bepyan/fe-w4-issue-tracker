import { TableLayout } from '@components';
import { useMilestoneStore } from '@stores';
import { styled } from '@styles';
import { MilestoneHeader } from './MilestoneHeader';
import { MilestoneTableItem } from './MilestoneTableItem';
import { MilestonesToolbar } from './MilestoneToolbar';

export const Milestones = () => {
  const { milestoneList } = useMilestoneStore();

  return (
    <Wrapper>
      <MilestonesToolbar />
      <TableLayout header={<MilestoneHeader />}>
        {milestoneList.map((item, index) => (
          <MilestoneTableItem key={index} milestone={item} />
        ))}
        {!milestoneList.length && <div>마일스톤이 없습니다.</div>}
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
