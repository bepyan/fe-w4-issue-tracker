import { atom, selector } from 'recoil';
import { ILabel } from '@types';
import { sleep } from '@utils';

export const labelStore = atom<ILabel[]>({
  key: 'labelStore',
  default: [],
});

export const labelQuery = selector<ILabel[]>({
  key: 'labelQuery',
  get: async () => {
    await sleep(1000);
    return [
      { name: '라벨 1', color: '#888', backgroundColor: '#eee' },
      { name: '라벨 2', color: '#777', backgroundColor: '#ddd' },
      { name: '라벨 3', color: '#666', backgroundColor: '#ccc' },
      { name: '라벨 4', color: '#555', backgroundColor: '#bbb' },
    ];
  },
  set: ({ set }, newValue) => set(labelStore, newValue),
});
