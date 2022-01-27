import { Button, Icon, LabelsMilestoneTaps } from '@components';
import { styled } from '@styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MilestonesToolbar = () => {
  const nav = useNavigate();
  const navToMilestonesNew = () => nav('new');

  return (
    <Toolbar>
      <LabelsMilestoneTaps labelCnt={3} milestoneCnt={3} />

      <Button onClick={navToMilestonesNew}>
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
