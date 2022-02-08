import { LabelsMilestoneTaps, VisibleToggleButton } from '@components';
import { styled } from '@styles';
import { useMilestoneNewVisibleStore } from 'stores/milestoneNewStore';

export const MilestonesToolbar = () => {
  const { visible, setVisible } = useMilestoneNewVisibleStore();

  return (
    <Toolbar>
      <LabelsMilestoneTaps />

      <VisibleToggleButton
        visible={visible}
        onClick={() => setVisible(!visible)}
      />
    </Toolbar>
  );
};

const Toolbar = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > *:last-child': {
    marginLeft: 'auto',
  },
});
