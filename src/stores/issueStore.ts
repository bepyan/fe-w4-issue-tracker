import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { IssueDTO, IssueStatus } from '@types';

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

    return list.filter((v) => {
      return v.status === filter.status;
    });
  },
});

export const useIssueStore = () => {
  const filterdIssueList = useRecoilValue(filterdIssueStore);
  const [issueList, setIssueList] = useRecoilState(issueStore);
  const [issueFilter, setIssueFilter] = useRecoilState(issueFilterStore);

  return {
    issueList,
    filterdIssueList,
    issueFilter,
    setIssueList,
    setIssueFilter,
  };
};
