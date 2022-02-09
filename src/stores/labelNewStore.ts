import { atom, useRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';
import { API } from '@services';
import { useState } from 'react';

export const labelNewVisibleStore = atom<boolean>({
  key: 'labelNewVisibleStore',
  default: false,
});

export const useLabelNewVisibleStore = () => {
  const [visible, setVisible] = useRecoilState(labelNewVisibleStore);

  return { visible, setVisible };
};

export const useLabelNewQuery = (reset?: () => void) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState('');

  const { setVisible } = useLabelNewVisibleStore();

  const submitMutation = useMutation(API.create_label, {
    onSuccess: () => {
      setVisible(false);
      queryClient.invalidateQueries('read_all_labels');
      reset?.();
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  return {
    error,
    isLoading: submitMutation.isLoading,
    onSubmit: submitMutation.mutate,
  };
};
