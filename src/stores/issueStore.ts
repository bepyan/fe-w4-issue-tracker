import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { CheckboxStatus, IssueDTO, IssueStatus } from '@types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { API } from '@services';
import { useEffect, useMemo } from 'react';

export const issueStore = atom<IssueDTO[]>({
  key: 'issueStore',
  default: [],
});

export const issueFilterStore = atom<{
  status: IssueStatus;
  assignee?: string;
  milstone?: string;
  labels: string[];
}>({
  key: 'issueFilterStore',
  default: {
    status: 'open',
    assignee: undefined,
    milstone: undefined,
    labels: [],
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
    onSuccess: ({ data }) => {
      setIssueList(
        [...data].sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        ),
      );
    },
  });

  return {
    issueList,
    filterdIssueList,
    issueFilter,
    setIssueList,
    setIssueFilter,
  };
};

export const checkedIssueStore = atom<IssueDTO[]>({
  key: 'checkedIssueStore',
  default: [],
});

export const useCheckedIssueItem = () => {
  const [checkedIssueList, setCheckedIssueList] =
    useRecoilState(checkedIssueStore);

  return {
    getIssueToggleStatus: (issue: IssueDTO): CheckboxStatus =>
      checkedIssueList.some((v) => v.id === issue.id) ? 'checked' : 'unchecked',
    onToggleIssue: (issue: IssueDTO) => {
      const isChecked = checkedIssueList.some((v) => v.id === issue.id);
      if (isChecked) {
        setCheckedIssueList(checkedIssueList.filter((v) => v.id !== issue.id));
      } else {
        setCheckedIssueList([...checkedIssueList, issue]);
      }
    },
  };
};

export const useCheckedIssueHeader = () => {
  const queryClient = useQueryClient();
  const filterdIssueList = useRecoilValue(filterdIssueStore);
  const [checkedIssueList, setCheckedIssueList] =
    useRecoilState(checkedIssueStore);

  const headerToggleStatus: CheckboxStatus = useMemo(() => {
    if (!checkedIssueList.length) return 'unchecked';
    if (checkedIssueList.length === filterdIssueList.length) return 'checked';

    return 'half';
  }, [checkedIssueList]);

  useEffect(() => {
    setCheckedIssueList(
      checkedIssueList.filter((v) =>
        filterdIssueList.some((e) => e.id === v.id),
      ),
    );
  }, [filterdIssueList]);

  const toggleStatusMutation = useMutation(
    (status: IssueStatus) =>
      Promise.all(
        checkedIssueList.map((v) => API.update_issue_status(v.id, status)),
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('read_all_issues');
      },
    },
  );

  return {
    checkedIssueList,
    headerToggleStatus,
    toggleHeader: () => {
      if (checkedIssueList.length === filterdIssueList.length) {
        setCheckedIssueList([]);
      } else {
        setCheckedIssueList(filterdIssueList);
      }
    },
    openCheckedIssueStatus: () => toggleStatusMutation.mutate('open'),
    closeChekdedIssueStatus: () => toggleStatusMutation.mutate('close'),
  };
};
