import { TableLayout } from '@components';
import { styled } from '@styles';
import { IssueToolbar } from './IssueToolbar';
import { IssueTableItem } from './IssueTableItem';
import { IssueTableHeader } from './IssueTableHeader';

export const Issues = () => {
  return (
    <Wrapper>
      <IssueToolbar />
      <TableLayout header={<IssueTableHeader />}>
        <IssueTableItem />
      </TableLayout>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
