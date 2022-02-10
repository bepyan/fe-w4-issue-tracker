import { API } from '@services';
import { IssueDTO } from '@types';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';

export const issueDetailStore = atom<IssueDTO | undefined>({
  key: 'issueDetailStore',
  default: undefined,
});

export const useIssueDetailStore = () => {
  const params = useParams();
  const nav = useNavigate();
  const issueId = params.issueId as string;
  const [issue, setIssue] = useRecoilState(issueDetailStore);

  const { isLoading } = useQuery(
    ['read_issue_by_id', issueId],
    () => API.read_issue_by_id(issueId),
    {
      onSuccess: ({ data }) => setIssue(data),
      onError: () => {
        alert('잘못된 이슈 접근입니다.');
        nav('/issues');
      },
    },
  );

  return { issue, isLoading, setIssue };
};
