import { atom, useRecoilState, useResetRecoilState } from 'recoil';
import { LabelColor, LabelRequestDTO } from '@types';
import { useMutation, useQueryClient } from 'react-query';
import { API } from '@services';
import { useState } from 'react';

export const labelNewVisibleStore = atom<boolean>({
  key: 'labelNewVisibleStore',
  default: false,
});

const DEFALULT_BC = '#EFF0F6';

export const labelNewStore = atom<LabelRequestDTO>({
  key: 'labelNewStore',
  default: {
    name: '레이블 이름',
    color: 'dark',
    backgroundColor: DEFALULT_BC,
    description: '',
  },
});

export const useLabelNewVisibleStore = () => {
  const [visible, setVisible] = useRecoilState(labelNewVisibleStore);

  return { visible, setVisible };
};

export const useLabelNewStore = () => {
  const queryClient = useQueryClient();
  const { setVisible } = useLabelNewVisibleStore();
  const [error, setError] = useState('');

  const [label, setLabel] = useRecoilState(labelNewStore);
  const reset = useResetRecoilState(labelNewStore);

  const submitMutation = useMutation(
    async () => {
      await API.create_label(label);
    },
    {
      onSuccess: () => {
        setVisible(false);
        reset();
        queryClient.invalidateQueries('read_all_labels');
      },
      onError: ({ message }) => {
        setError(message);
      },
    },
  );

  return {
    label,
    isLoading: submitMutation.isLoading,
    error,
    setName: (name: string) => {
      setLabel({ ...label, name });
    },
    setDescription: (description: string) => {
      setLabel({ ...label, description });
    },
    setColor: (color: string) => {
      setLabel({ ...label, color: color as LabelColor });
    },
    setBackgroundColor: (backgroundColor: string) => {
      setLabel({ ...label, backgroundColor });
    },
    resetBackgroundColor: () => {
      setLabel({ ...label, backgroundColor: DEFALULT_BC });
    },
    submitLabel: () => submitMutation.mutate(),
  };
};
