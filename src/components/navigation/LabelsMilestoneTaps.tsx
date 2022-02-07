import { Icon, Taps } from '@components';
import { useLabelStore, useMilestoneStore } from '@stores';
import { styled } from '@styles';

export const LabelsMilestoneTaps = () => {
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();

  return (
    <Taps
      tapList={[
        {
          path: '/labels',
          children: (
            <>
              <Icon name="tag" />
              <span>레이블</span>
              <CountText>({labelList.length})</CountText>
            </>
          ),
        },
        {
          path: '/milestones',
          children: (
            <>
              <Milestone name="milestone" />
              <span>마일스톤</span>
              <CountText>({milestoneList.length})</CountText>
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
