import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { IssueDTO, IssueStatus } from '@types';
import { useQuery } from 'react-query';
import { API } from '@services';

export const issueStore = atom<IssueDTO[]>({
  key: 'issueStore',
  default: [],
});

export const issueFilterStore = atom<{
  status: IssueStatus;
  assignee?: string;
  milstone?: string;
}>({
  key: 'issueFilterStore',
  default: {
    status: 'open',
    assignee: undefined,
    milstone: undefined,
  },
});

export const filterdIssueStore = selector({
  key: 'filterdIssueStore',
  get: ({ get }) => {
    const list = get(issueStore);
    const filter = get(issueFilterStore);

    return list.filter((issue) => {
      if (
        filter.assignee &&
        issue.assignees.every((v) => v.id !== filter.assignee)
      )
        return false;
      if (filter.milstone && issue.milestone?.id !== filter.milstone)
        return false;

      return issue.status === filter.status;
    });
  },
});

export const useIssueStore = () => {
  const filterdIssueList = useRecoilValue(filterdIssueStore);
  const [issueList, setIssueList] = useRecoilState(issueStore);
  const [issueFilter, setIssueFilter] = useRecoilState(issueFilterStore);

  useQuery('read_all_issues', API.read_all_issues, {
    onSuccess: ({ data }) =>
      setIssueList(
        data.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        ),
      ),
  });

  return {
    issueList,
    filterdIssueList,
    issueFilter,
    setIssueList,
    setIssueFilter,
  };
};
