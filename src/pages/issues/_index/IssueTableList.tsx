import { IssueDTO } from '@types';
import { IssueTableEmptyView } from './IssueTableEmptyView';
import { IssueTableItem } from './IssueTableItem';

interface Props {
  issueList: IssueDTO[];
}
export const IssueTableList = ({ issueList }: Props) => {
  return (
    <>
      {issueList.length ? (
        issueList.map((item, index) => (
          <IssueTableItem key={index} issue={item} />
        ))
      ) : (
        <IssueTableEmptyView />
      )}
    </>
  );
};
