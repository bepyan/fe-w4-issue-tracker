import { Button, Icon, LabelsMilestoneTaps } from '@components';
import { styled } from '@styles';

export const LabelToolbar = () => {
  return (
    <Toolbar>
      <LabelsMilestoneTaps />

      <Button size="small">
        <Icon name="plus" /> 추가
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
