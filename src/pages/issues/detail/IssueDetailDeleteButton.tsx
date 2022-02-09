import { DeleteButton } from '@components';
import { API } from '@services';
import { IssueDTO } from '@types';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

interface Props {
  issue: IssueDTO;
}

export const IssueDetailDeleteButton = ({ issue }: Props) => {
  const nav = useNavigate();

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(() => API.delete_issue(issue.id), {
    onSuccess: () => {
      queryClient.invalidateQueries('read_all_issues');
      nav('/issues');
    },
  });

  return (
    <DeleteButton onClick={() => deleteMutation.mutate()}>
      이슈 삭제
    </DeleteButton>
  );
};
