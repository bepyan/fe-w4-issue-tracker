import { Button, Icon, LabelsMilestoneTaps } from '@components';
import { useLabelNewVisibleStore } from '@stores';
import { styled } from '@styles';

export const LabelToolbar = () => {
  const { visible, setVisible } = useLabelNewVisibleStore();

  return (
    <Toolbar>
      <LabelsMilestoneTaps />

      <Button
        size="small"
        kind={visible ? 'secondary' : 'standard'}
        onClick={() => setVisible(!visible)}
      >
        <Icon name={visible ? 'x_square' : 'plus'} />{' '}
        {visible ? '닫기' : '추가'}
      </Button>
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
