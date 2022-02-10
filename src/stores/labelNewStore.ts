import { atom, useRecoilState } from 'recoil';

export const labelNewVisibleStore = atom<boolean>({
  key: 'labelNewVisibleStore',
  default: false,
});

export const useLabelNewVisibleStore = () => {
  const [visible, setVisible] = useRecoilState(labelNewVisibleStore);

  return { visible, setVisible };
};
