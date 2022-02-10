import { TableLayout } from '@components';
import { styled } from '@styles';
import { useIssueFilterStore, useIssueStore } from '@stores';
import { IssueToolbar } from './IssueToolbar';
import { IssueTableHeader } from './IssueTableHeader';
import { IssueTableList } from './IssueTableList';

export const Issues = () => {
  const { filterdIssueList } = useIssueStore();
  const { issueFilter } = useIssueFilterStore();

  return (
    <Wrapper>
      <IssueToolbar />

      <TableLayout header={<IssueTableHeader />}>
        <IssueTableList
          issueList={filterdIssueList.filter(
            (v) => v.status === issueFilter.status,
          )}
        />
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
