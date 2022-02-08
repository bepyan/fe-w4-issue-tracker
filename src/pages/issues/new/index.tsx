import { IssueNewFooter } from './IssueNewFooter';
import { IssueNewForm } from './IssueNewForm';
import { IssueNewHeader } from './IssueNewHeader';

export const IssuesNew = () => {
  return (
    <>
      <IssueNewHeader />
      <IssueNewForm />
      <IssueNewFooter />
    </>
  );
};
