import { Icon, Taps } from '@components';
import { styled } from '@styles';
import React from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';

type Props = {
  labelCnt: number;
  milestoneCnt: number;
};

export const LabelsMilestoneTaps = ({ labelCnt, milestoneCnt }: Props) => {
  return (
    <Taps
      tapList={[
        {
          path: '/labels',
          children: (
            <>
              <Icon name="tag" />
              <span>레이블</span>
              <CountText>({labelCnt})</CountText>
            </>
          ),
        },
        {
          path: '/milestones',
          children: (
            <>
              <Milestone name="milestone" />
              <span>마일스톤</span>
              <CountText>({milestoneCnt})</CountText>
            </>
          ),
        },
      ]}
    />
  );
};

const Milestone = styled(Icon, {
  replaceIconStrokeToFill: '$label',
});

const CountText = styled('span', {
  fontWeight: 400,
});
