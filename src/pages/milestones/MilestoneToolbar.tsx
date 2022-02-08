import { Button, Icon, LabelsMilestoneTaps } from '@components';
import { styled } from '@styles';

export const MilestonesToolbar = () => {
  return (
    <Toolbar>
      <LabelsMilestoneTaps />

      <Button>
        <Icon name="plus" /> 추가
      </Button>
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
