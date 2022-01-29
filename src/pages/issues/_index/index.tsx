import { useRecoilValue } from 'recoil';
import { TableLayout } from '@components';
import { styled } from '@styles';
import { issueStore } from '@stores';
import { IssueToolbar } from './IssueToolbar';
import { IssueTableItem } from './IssueTableItem';
import { IssueTableHeader } from './IssueTableHeader';
import { IssueTableEmptyView } from './IssueTableEmptyView';

export const Issues = () => {
  const issueList = useRecoilValue(issueStore);

  return (
    <Wrapper>
      <IssueToolbar />
      <TableLayout header={<IssueTableHeader />}>
        {issueList.length ? (
          issueList.map((item, index) => (
            <IssueTableItem key={index} issue={item} />
          ))
        ) : (
          <IssueTableEmptyView />
        )}
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
