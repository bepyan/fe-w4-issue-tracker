import { atom, selector } from 'recoil';
import { IssueDTO, IssueStatus } from '@types';

export const issueQuery = selector<IssueDTO[]>({
  key: 'issueQuery',
  get: async () => {
    return [];
  },
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

export const issueStore = selector({
  key: 'issueStore',
  get: ({ get }) => {
    const filter = get(issueFilterStore);
    const list = get(issueQuery);

    return list.filter((v) => {
      return v.status === filter.status;
    });
  },
});
