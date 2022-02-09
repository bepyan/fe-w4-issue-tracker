import { HeaderLink, Icon } from '@components';
import { IssueStatus } from '@types';

export interface IssueStatusFilterProps {
  getIssueStatusFilterProps: (status: IssueStatus) => {
    issueCnt: number;
    selected: boolean;
    onClick: () => void;
  };
}

export const IssueStatusFilter = ({
  getIssueStatusFilterProps,
}: IssueStatusFilterProps) => {
  const { issueCnt: openCnt, ...openProps } = getIssueStatusFilterProps('open');
  // prettier-ignore
  const { issueCnt: closeCnt, ...closeProps } = getIssueStatusFilterProps('close');

  return (
    <>
      <HeaderLink {...openProps}>
        <Icon name="alert_circle" />
        <span>열린 이슈({openCnt})</span>
      </HeaderLink>
      <HeaderLink {...closeProps}>
        <Icon name="archive" />
        <span>닫힌 이슈({closeCnt})</span>
      </HeaderLink>
    </>
  );
};
