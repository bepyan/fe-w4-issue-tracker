import { Button, Icon, LabelsMilestoneTaps } from '@components';
import { styled } from '@styles';
import React from 'react';

export const MilestonesToolbar = () => {
  return (
    <Toolbar>
      <LabelsMilestoneTaps labelCnt={3} milestoneCnt={3} />

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
