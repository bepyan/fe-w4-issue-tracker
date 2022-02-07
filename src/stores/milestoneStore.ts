import { MilestoneDTO } from '@types';
import { atom, useRecoilState } from 'recoil';

export const milestoneStore = atom<MilestoneDTO[]>({
  key: 'milestoneStore',
  default: [],
});

export const useMilestoneStore = () => {
  const [milestoneList] = useRecoilState(milestoneStore);
  return { milestoneList };
};
