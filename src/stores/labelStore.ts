import { atom, useRecoilState } from 'recoil';
import { LabelDTO } from '@types';

export const labelStore = atom<LabelDTO[]>({
  key: 'labelStore',
  default: [],
});

export const useLabelStore = () => {
  const [labelList, setLabelList] = useRecoilState(labelStore);

  return { labelList, setLabelList };
};
