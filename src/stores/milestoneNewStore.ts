import { API } from '@services';
import { MilestoneRequestDTO } from '@types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

export const milestoneNewVisibleStore = atom<boolean>({
  key: 'milestoneNewVisibleStore',
  default: false,
});

export const milestoneNewStore = atom<MilestoneRequestDTO>({
  key: 'milestoneNewStore',
  default: {
    title: '',
    deadline: '',
    description: '',
  },
});

export const useMilestoneNewVisibleStore = () => {
  const [visible, setVisible] = useRecoilState(milestoneNewVisibleStore);

  return { visible, setVisible };
};

export const useMilestoneNewStore = () => {
  const queryClient = useQueryClient();
  const { setVisible } = useMilestoneNewVisibleStore();
  const [error, setError] = useState('');

  const [milestone, setMilestone] = useRecoilState(milestoneNewStore);
  const reset = useResetRecoilState(milestoneNewStore);

  const submitMutation = useMutation(
    async () => {
      await API.create_milestone(milestone);
    },
    {
      onSuccess: () => {
        setVisible(false);
        reset();
        queryClient.invalidateQueries('read_all_milestones');
      },
      onError: ({ message }) => {
        setError(message);
      },
    },
  );

  return {
    milestone,
    disableSubmit: !milestone.title,
    isLoading: submitMutation.isLoading,
    error,
    submitMilestone: () => submitMutation.mutate(),
    setTitle: (title: string) => setMilestone({ ...milestone, title }),
    setDeadline: (deadline: string) => setMilestone({ ...milestone, deadline }),
    setDescription: (description: string) =>
      setMilestone({ ...milestone, description }),
  };
};
