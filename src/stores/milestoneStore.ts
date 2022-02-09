import { API } from '@services';
import { MilestoneDTO, MilestoneStatus } from '@types';
import { useQuery } from 'react-query';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const milestoneStore = atom<MilestoneDTO[]>({
  key: 'milestoneStore',
  default: [],
});

export const milestoneFilterStore = atom<{
  status: MilestoneStatus;
}>({
  key: 'milestoneFilterStore',
  default: {
    status: 'open',
  },
});

export const filteredMilestoneStore = selector({
  key: 'filteredMilestoneStore',
  get: ({ get }) => {
    const list = get(milestoneStore);
    const filter = get(milestoneFilterStore);

    return list.filter((milestone) => {
      return milestone.status === filter.status;
    });
  },
});

export const useMilestoneStore = () => {
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneStore);
  // prettier-ignore
  const [milestoneFilter, setMilestoneFilter] = useRecoilState(milestoneFilterStore);
  const filteredMilestoneList = useRecoilValue(filteredMilestoneStore);

  useQuery('read_all_milestones', API.read_all_milestones, {
    onSuccess: ({ data }) => setMilestoneList(data),
  });

  return {
    milestoneList,
    milestoneFilter,
    filteredMilestoneList,
    setMilestoneStatusFilter: (status: MilestoneStatus) =>
      setMilestoneFilter((state) => ({ ...state, status })),
  };
};

export const milestoneNewVisibleStore = atom<boolean>({
  key: 'milestoneNewVisibleStore',
  default: false,
});

export const useMilestoneNewVisibleStore = () => {
  const [visible, setVisible] = useRecoilState(milestoneNewVisibleStore);

  return { visible, setVisible };
};
