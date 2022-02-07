import { API } from '@services';
import { MilestoneDTO } from '@types';
import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';

export const milestoneStore = atom<MilestoneDTO[]>({
  key: 'milestoneStore',
  default: [],
});

export const useMilestoneStore = () => {
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneStore);

  useQuery('read_all_milestones', API.read_all_milestones, {
    onSuccess: ({ data }) => setMilestoneList(data),
  });

  return { milestoneList, setMilestoneList };
};
