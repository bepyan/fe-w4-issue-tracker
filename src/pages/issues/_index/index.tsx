import { useQuery } from 'react-query';
import { TableLayout } from '@components';
import { API } from '@services';
import { styled } from '@styles';
import { useIssueStore } from '@stores';
import { IssueToolbar } from './IssueToolbar';
import { IssueTableItem } from './IssueTableItem';
import { IssueTableHeader } from './IssueTableHeader';
import { IssueTableEmptyView } from './IssueTableEmptyView';

export const Issues = () => {
  const { filterdIssueList, setIssueList } = useIssueStore();

  useQuery('read_all_issues', API.read_all_issues, {
    onSuccess: ({ data }) => {
      setIssueList(data);
    },
  });

  return (
    <Wrapper>
      <IssueToolbar />

      <TableLayout header={<IssueTableHeader />}>
        {filterdIssueList.length ? (
          filterdIssueList.map((item, index) => (
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
