import { useMemo } from 'react';
import {
  Checkbox,
  Dropdown,
  DropdownCheckbox,
  DropdownItem,
  Icon,
} from '@components';
import {
  useCheckedIssueHeader,
  useIssueStore,
  useLabelStore,
  useMilestoneStore,
  useUserStore,
} from '@stores';
import { styled } from '@styles';
import { IssueStatus } from '@types';
import { IssueStatusFilter, IssueStatusFilterProps } from './IssueStatusFilter';

type Props = {};

export const IssueTableHeader = ({}: Props) => {
  const { issueList, issueFilter, setIssueFilter } = useIssueStore();
  const {
    checkedIssueList,
    headerToggleStatus,
    toggleHeader,
    closeChekdedIssueStatus,
    openCheckedIssueStatus,
  } = useCheckedIssueHeader();
  const { userList } = useUserStore();
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();

  const writerList = useMemo(() => {
    const userSet = new Set(issueList.map((issue) => issue.writer.name));
    return Array.from(userSet);
  }, [issueList]);

  const issueStatusFilterProps: IssueStatusFilterProps = {
    getIssueStatusFilterProps: (status: IssueStatus) => {
      return {
        issueCnt: issueList.filter((v) => v.status === status).length,
        selected: issueFilter.status === status,
        onClick: () => setIssueFilter((state) => ({ ...state, status })),
      };
    },
  };

  return (
    <Wrapper>
      <div className="wrapper__left">
        <Checkbox status={headerToggleStatus} onClick={toggleHeader} />
        <IssueStatusFilter {...issueStatusFilterProps} />
      </div>

      <div className="wrapper__right">
        <VisibleWrapper visible={!!checkedIssueList.length}>
          <Dropdown label="상태 수정" title="상태 변경" position="right">
            <DropdownItem onClick={openCheckedIssueStatus}>
              선택한 이슈 열기
            </DropdownItem>
            <DropdownItem onClick={closeChekdedIssueStatus}>
              선택한 이슈 닫기
            </DropdownItem>
          </Dropdown>
        </VisibleWrapper>

        <VisibleWrapper visible={!checkedIssueList.length}>
          <Dropdown label="담당자" title="담당자 필터" position="right">
            <DropdownCheckbox>담당자가 없는 이슈</DropdownCheckbox>
            {userList.map((user, index) => (
              <DropdownCheckbox key={index}>{user.name}</DropdownCheckbox>
            ))}
          </Dropdown>

          <Dropdown label="레이블" title="레이블 필터" position="right">
            <DropdownCheckbox>레이블이 없는 이슈</DropdownCheckbox>
            {labelList.map((label, index) => (
              <DropdownCheckbox key={index}>{label.name}</DropdownCheckbox>
            ))}
          </Dropdown>

          <Dropdown label="마일스톤" title="마일스톤 필터" position="right">
            <DropdownCheckbox>마일스톤이 없는 이슈</DropdownCheckbox>
            {milestoneList.map((milesone, index) => (
              <DropdownCheckbox key={index}>{milesone.title}</DropdownCheckbox>
            ))}
          </Dropdown>

          <Dropdown label="작성자" title="작성자 필터" position="right">
            {writerList.map((writer, index) => (
              <DropdownCheckbox key={index}>
                <Icon name="user_image_small" />
                <span>{writer}</span>
              </DropdownCheckbox>
            ))}
          </Dropdown>
        </VisibleWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flex: 1,

  '.wrapper__left': {
    display: 'flex',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: '1.5rem',
    },
  },
  '.wrapper__right': {
    display: 'flex',
    marginLeft: 'auto',
  },
});

const VisibleWrapper = styled('div', {
  '& > * + *': {
    marginLeft: '2rem',
  },

  variants: {
    visible: {
      true: {
        display: 'inherit',
      },
      false: {
        display: 'none',
      },
    },
  },
});
