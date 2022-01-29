import { atom, selector } from 'recoil';
import { IIssue } from '@types';
import { sleep } from '@utils';
import { getIssueList } from './issueMockup';

export const issueQuery = selector<IIssue[]>({
  key: 'issueQuery',
  get: async () => {
    await sleep(1000);
    console.log('fetching');
    return getIssueList();
  },
});

export const issueFilterStore = atom({
  key: 'issueFilterStore',
  default: {
    isclose: false,
    assignner: undefined,
    milstone: undefined,
  },
});

export const issueStore = selector({
  key: 'issueStore',
  get: ({ get }) => {
    const filter = get(issueFilterStore);
    const list = get(issueQuery);

    return list.filter((v) => {
      return v.isclose === filter.isclose;
    });
  },
});
