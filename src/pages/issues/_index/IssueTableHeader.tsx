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
  useIssueFilterStore,
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
  const { issueList, filterdIssueList } = useIssueStore();
  const { issueFilter, setIssueFilter } = useIssueFilterStore();

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

  const issueStatusFilterProps: IssueStatusFilterProps = useMemo(
    () => ({
      getIssueStatusFilterProps: (status: IssueStatus) => {
        return {
          issueCnt: filterdIssueList.filter((v) => v.status === status).length,
          selected: issueFilter.status === status,
          onClick: () => setIssueFilter((state) => ({ ...state, status })),
        };
      },
    }),
    [filterdIssueList, issueFilter],
  );

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
            {userList.map((user, index) => {
              const value = issueFilter.assignee === user.id;
              return (
                <DropdownCheckbox
                  key={index}
                  value={value}
                  onClick={() =>
                    setIssueFilter((v) => ({
                      ...v,
                      assignee: value ? undefined : user.id,
                    }))
                  }
                >
                  {user.name}
                </DropdownCheckbox>
              );
            })}
          </Dropdown>

          <Dropdown label="레이블" title="레이블 필터" position="right">
            <DropdownCheckbox>레이블이 없는 이슈</DropdownCheckbox>
            {labelList.map((label, index) => {
              const value = issueFilter.labels.some((v) => v.id === label.id);
              return (
                <DropdownCheckbox
                  key={index}
                  value={value}
                  onClick={() =>
                    setIssueFilter((v) => ({
                      ...v,
                      labels: value
                        ? v.labels.filter((e) => e.id !== label.id)
                        : [...v.labels, label],
                    }))
                  }
                >
                  {label.name}
                </DropdownCheckbox>
              );
            })}
          </Dropdown>

          <Dropdown label="마일스톤" title="마일스톤 필터" position="right">
            <DropdownCheckbox>마일스톤이 없는 이슈</DropdownCheckbox>
            {milestoneList.map((milestone, index) => {
              const value = issueFilter.milestone?.id === milestone?.id;
              return (
                <DropdownCheckbox
                  key={index}
                  value={value}
                  onClick={() =>
                    setIssueFilter((v) => ({
                      ...v,
                      milestone: value ? undefined : milestone,
                    }))
                  }
                >
                  {milestone.title}
                </DropdownCheckbox>
              );
            })}
          </Dropdown>

          <Dropdown label="작성자" title="작성자 필터" position="right">
            {writerList.map((writer, index) => {
              const value = issueFilter.author === writer;
              return (
                <DropdownCheckbox
                  key={index}
                  value={value}
                  onClick={() =>
                    setIssueFilter((v) => ({
                      ...v,
                      author: value ? undefined : writer,
                    }))
                  }
                >
                  <Icon name="user_image_small" />
                  <span>{writer}</span>
                </DropdownCheckbox>
              );
            })}
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
