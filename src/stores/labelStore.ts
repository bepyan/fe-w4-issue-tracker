import { atom, useRecoilState } from 'recoil';
import { LabelDTO } from '@types';
import { useQuery } from 'react-query';
import { API } from '@services';

export const labelStore = atom<LabelDTO[]>({
  key: 'labelStore',
  default: [],
});

export const useLabelStore = () => {
  const [labelList, setLabelList] = useRecoilState(labelStore);

  useQuery('read_all_labels', API.read_all_labels, {
    onSuccess: ({ data }) => setLabelList(data),
  });

  return { labelList, setLabelList };
};
