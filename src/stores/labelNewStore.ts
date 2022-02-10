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
  return {
    error,
    isLoading: submitMutation.isLoading,
    onSubmit: submitMutation.mutate,
  };
};
