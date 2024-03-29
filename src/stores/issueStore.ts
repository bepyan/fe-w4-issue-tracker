import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';
import {
  CheckboxStatus,
  IssueDTO,
  IssueStatus,
  LabelDTO,
  MilestoneDTO,
} from '@types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { API } from '@services';
import { useEffect, useMemo } from 'react';
import { authStore } from './authStore';
import { useSearchLabel } from './labelStore';
import { useSearchMilestone } from './milestoneStore';

export const issueStore = atom<IssueDTO[]>({
  key: 'issueStore',
  default: [],
});

type issueFilterType = {
  status: IssueStatus;
  author?: string;
  assignee?: string | 'none';
  milestone?: MilestoneDTO | 'none';
  labels: LabelDTO[] | 'none';
  hasMyComment?: boolean;
};

export const issueFilterStore = atom<issueFilterType>({
  key: 'issueFilterStore',
  default: {
    status: 'open',
    author: undefined,
    assignee: undefined,
    milestone: undefined,
    labels: [],
    hasMyComment: undefined,
  },
});

// is:open
// is:close
// author:@me
// assignee:@me
// comment:@me

/**
 * issue의 status, open, close에 대해서는 필터링하지 않는다! 열린 이슈, 닫힌 이슈 탭이 동시 보이기 때문.
 */
export const filterdIssueStore = selector({
  key: 'filterdIssueStore',
  get: ({ get }) => {
    const auth = get(authStore);
    const list = get(issueStore);
    const filter = get(issueFilterStore);

    return list.filter((issue) => {
      if (
        filter.assignee &&
        issue.assignees.every((v) => v.id !== filter.assignee)
      ) {
        return false;
      }

      if (filter.milestone === 'none') {
        if (issue.milestone) return;
      } else if (
        filter.milestone &&
        issue.milestone?.id !== filter.milestone.id
      ) {
        return false;
      }

      if (
        filter.hasMyComment &&
        issue.comments.some((v) => v.author !== auth?.id)
      ) {
        return false;
      }

      if (filter.labels === 'none') {
        if (issue.labels.length) return false;
      } else if (
        filter.labels.length &&
        filter.labels.every((v) => issue.labels.every((e) => e.id !== v.id))
      )
        return false;

      if (filter.author && filter.author !== issue.writer.id) {
        return false;
      }

      return true;
    });
  },
});

export const useIssueSearchBar = () => {
  const issueFilter = useRecoilValue(issueFilterStore);
  type filterKey = keyof typeof issueFilter;

  const filterText = useMemo(() => {
    const filterList: string[] = [`is:${issueFilter.status}`];

    const filterKeys: filterKey[] = ['author', 'assignee'];
    filterKeys.forEach((key) => {
      if (issueFilter[key]) filterList.push(`${key}:${issueFilter[key]}`);
    });
    if (issueFilter.milestone)
      filterList.push(
        `milestone:${
          issueFilter.milestone === 'none'
            ? 'none'
            : `"${issueFilter.milestone.title}"`
        }`,
      );

    if (issueFilter.labels === 'none') {
      filterList.push(`label:none`);
    } else {
      issueFilter.labels.forEach((v) => filterList.push(`label:"${v.name}"`));
    }

    if (issueFilter.hasMyComment) {
      filterList.push(`comment:@me`);
    }

    return filterList.join(' ');
  }, [issueFilter]);

  return {
    filterText,
  };
};

export const useIssueFilterStore = () => {
  const [issueFilter, setIssueFilter] = useRecoilState(issueFilterStore);
  const resetIssueFilter = useResetRecoilState(issueFilterStore);

  const isFiltered =
    !!issueFilter.assignee ||
    !!issueFilter.author ||
    !!issueFilter.hasMyComment ||
    !!issueFilter.labels.length ||
    !!issueFilter.milestone;

  const { searchLabelByName } = useSearchLabel();
  const { searchMilestoneByName } = useSearchMilestone();
  const onSearchFilterBar = (text: string) => {
    const filterList = text.split(' ');

    const newFilter: issueFilterType = {
      status: 'open',
      labels: [],
    };

    filterList.forEach((v) => {
      const [key, value] = v.split(':') as [
        keyof issueFilterType | 'is',
        string,
      ];

      if (key === 'is') {
        newFilter.status = value as never;
        return;
      }

      if (key === 'labels') {
        if (value === 'none') newFilter.labels = 'none';
        else {
          const label = searchLabelByName(value);
          if (label) {
            const preLabelList =
              newFilter.labels === 'none' ? [] : newFilter.labels;
            newFilter.labels = [...preLabelList, label];
          }
        }
        return;
      }

      if (key === 'assignee') {
        if (value === 'none') newFilter.milestone = 'none';
        else {
          const milestone = searchMilestoneByName(value);
          if (milestone) {
            newFilter.milestone = milestone;
          }
        }
        return;
      }

      newFilter[key] = value as never;
    });

    setIssueFilter(newFilter);
  };

  return {
    isFiltered,
    issueFilter,
    setIssueFilter,
    resetIssueFilter,
    onSearchFilterBar,
  };
};

export const useIssueStore = () => {
  const filterdIssueList = useRecoilValue(filterdIssueStore);
  const [issueList, setIssueList] = useRecoilState(issueStore);

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
    setIssueList,
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
