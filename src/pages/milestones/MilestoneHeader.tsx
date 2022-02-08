import { HeaderLink, Icon } from '@components';
import { useMilestoneStore } from '@stores';
import { styled } from '@styles';
import { MilestoneStatus } from '@types';

export const MilestoneHeader = () => {
  const { milestoneList, milestoneFilter, setMilestoneStatusFilter } =
    useMilestoneStore();

  const getHeaderLinkProp = (
    status: MilestoneStatus,
  ): MilestoneHeaderLinkProps => {
    return {
      status,
      cnt: milestoneList.filter((v) => v.status === status).length,
      selected: milestoneFilter.status === status,
      onClick: () => setMilestoneStatusFilter(status),
    };
  };

  return (
    <Wrapper>
      <MilestoneHeaderLink {...getHeaderLinkProp('open')} />
      <MilestoneHeaderLink {...getHeaderLinkProp('closed')} />
    </Wrapper>
  );
};

interface MilestoneHeaderLinkProps {
  status: MilestoneStatus;
  cnt: number;
  selected: boolean;
  onClick: () => void;
}

const MilestoneHeaderLink = ({
  status,
  cnt,
  ...headerLinkProps
}: MilestoneHeaderLinkProps) => {
  return (
    <HeaderLink {...headerLinkProps}>
      <Icon name={status === 'open' ? 'alert_circle' : 'archive'} />
      <span>열린 마일스톤({cnt})</span>
    </HeaderLink>
  );
};

const Wrapper = styled('div', {
  display: 'flex',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});
