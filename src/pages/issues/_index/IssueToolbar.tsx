import { useNavigate } from 'react-router-dom';
import {
  Button,
  DropdownCheckbox,
  FilterBar,
  Icon,
  LabelsMilestoneTaps,
  TextButton,
} from '@components';
import { styled } from '@styles';
import { useAuthStore, useIssueFilterStore, useIssueSearchBar } from '@stores';

export const IssueToolbar = () => {
  const nav = useNavigate();
  const { auth } = useAuthStore();
  const { filterText } = useIssueSearchBar();
  const { isFiltered, issueFilter, setIssueFilter, resetIssueFilter } =
    useIssueFilterStore();

  const navToIssueNew = () => nav('new');

  return (
    <>
      <Wrapper>
        <LeftActionWrapper>
          <FilterBar
            label="필터"
            title="이슈 필터"
            value={filterText}
            onSubmit={(text) => console.log(text)}
          >
            <DropdownCheckbox
              value={issueFilter.status === 'open'}
              onClick={() =>
                setIssueFilter((v) => ({
                  ...v,
                  status: issueFilter.status === 'open' ? 'close' : 'open',
                }))
              }
            >
              열린 이슈
            </DropdownCheckbox>
            <DropdownCheckbox
              value={issueFilter.status === 'close'}
              onClick={() =>
                setIssueFilter((v) => ({
                  ...v,
                  status: issueFilter.status === 'close' ? 'open' : 'close',
                }))
              }
            >
              닫힌 이슈
            </DropdownCheckbox>
            <DropdownCheckbox
              value={issueFilter.author === auth?.id}
              onClick={() =>
                setIssueFilter((v) => ({
                  ...v,
                  author:
                    issueFilter.author === auth?.id ? undefined : auth?.id,
                }))
              }
            >
              내가 작성한 이슈
            </DropdownCheckbox>
            <DropdownCheckbox
              value={issueFilter.assignee === auth?.id}
              onClick={() =>
                setIssueFilter((v) => ({
                  ...v,
                  assignee:
                    issueFilter.assignee === auth?.id ? undefined : auth?.id,
                }))
              }
            >
              나에게 할당된 이슈
            </DropdownCheckbox>
            <DropdownCheckbox
              value={issueFilter.hasMyComment}
              onClick={() =>
                setIssueFilter((v) => ({
                  ...v,
                  hasMyComment: !issueFilter.hasMyComment,
                }))
              }
            >
              내가 댓글을 남긴 이슈
            </DropdownCheckbox>
          </FilterBar>
        </LeftActionWrapper>

        <Blank />

        <RightActionWrapper>
          <LabelsMilestoneTaps />
          <Button size="small" onClick={navToIssueNew}>
            <Icon name="plus" />
            이슈 작성
          </Button>
        </RightActionWrapper>
      </Wrapper>

      {isFiltered && (
        <TextButton size="medium" onClick={resetIssueFilter}>
          <Icon name="x_square" /> 현재의 검색 필터 지우기
        </TextButton>
      )}
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const LeftActionWrapper = styled('div', {
  flex: 1,
});

const Blank = styled('div', {
  minWidth: '16px',
  width: '222px',
});

const RightActionWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  '& > * + * ': {
    marginLeft: '1rem',
  },
});
