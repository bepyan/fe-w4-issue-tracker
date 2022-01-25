import { Icon, Tap, Taps } from '@components';
import { styled } from '@styles';
import React from 'react';

type Props = {
  labelCnt: number;
  milestoneCnt: number;
  initIndex?: number;
  onChange: (index: number) => void;
};

export const LabelsMilestoneTaps = ({
  labelCnt,
  milestoneCnt,
  ...tapsProps
}: Props) => {
  return (
    <Taps {...tapsProps}>
      <Tap>
        <Icon name="tag" />
        <span>레이블</span>
        <CountText>({labelCnt})</CountText>
      </Tap>
      <Tap>
        <Milestone name="milestone" />
        <span>마일스톤</span>
        <CountText>({milestoneCnt})</CountText>
      </Tap>
    </Taps>
  );
};

const Milestone = styled(Icon, {
  replaceIconStrokeToFill: '$label',
});

const CountText = styled('span', {
  fontWeight: 400,
});
