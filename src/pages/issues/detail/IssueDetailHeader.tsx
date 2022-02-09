import { useToggle } from '@hooks';
import { API } from '@services';
import { styled } from '@styles';
import { IssueDTO } from '@types';
import { useMutation, useQueryClient } from 'react-query';
import { IssueDetailHeaderDesc } from './IssueDetailHeaderDesc';
import {
  IssueDetailHeaderTitle,
  IssueDetailHeaderTitleProps,
} from './IssueDetailHeaderTitle';

export interface IssueDetailHeaderProps {
  issue: IssueDTO;
}

export const IssueDetailHeader = ({ issue }: IssueDetailHeaderProps) => {
  const titleToggleProps = useToggle();

  const queryClient = useQueryClient();
  const updateTitle = useMutation(
    (title: string) => API.update_issue_title(issue.id, { title }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('read_issue_by_id');
        titleToggleProps.close();
      },
    },
  );

  const toggleStatus = useMutation(() => API.update_issue_status(issue.id), {
    onSuccess: () => queryClient.invalidateQueries('read_issue_by_id'),
  });

  const headerTitleProps: IssueDetailHeaderTitleProps = {
    issue,
    ...titleToggleProps,
    onToggleIssueStatus: toggleStatus.mutate,
    onEditTitle: updateTitle.mutate,
  };

  return (
    <Header>
      <IssueDetailHeaderTitle {...headerTitleProps} />
      <IssueDetailHeaderDesc issue={issue} />
    </Header>
  );
};

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '2rem',

  '& > *': {
    display: 'flex',
    alignItems: 'center',
  },
  '& > * + *': {
    marginTop: '1rem',
  },
});
