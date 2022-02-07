import { atom, selector } from 'recoil';
import { LabelDTO } from '@types';

export const labelStore = atom<LabelDTO[]>({
  key: 'labelStore',
  default: [],
});

export const labelQuery = selector<LabelDTO[]>({
  key: 'labelQuery',
  get: async () => {
    return [];
  },
  set: ({ set }, newValue) => set(labelStore, newValue),
});
