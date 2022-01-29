import { IMilestone } from '@types';
import { atom } from 'recoil';

export const milestoneStore = atom<IMilestone[]>({
  key: 'milestoneStore',
  default: [],
});
