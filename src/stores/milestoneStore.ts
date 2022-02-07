import { MilestoneDTO } from '@types';
import { atom } from 'recoil';

export const milestoneStore = atom<MilestoneDTO[]>({
  key: 'milestoneStore',
  default: [],
});
