import { LabelsMilestoneTaps, VisibleToggleButton } from '@components';
import { useLabelNewVisibleStore } from '@stores';
import { styled } from '@styles';

export const LabelToolbar = () => {
  const { visible, setVisible } = useLabelNewVisibleStore();

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

  '& > :last-child': {
    marginLeft: 'auto',
  },
});
