import { useMutation, useQueryClient } from 'react-query';
import { API } from '@services';
import { useState } from 'react';
import { MilestoneDTO, MilestoneRequestDTO } from '@types';

export const useMilestoneEditQuery = (
  milestone: MilestoneDTO,
  onSuccessEdit?: () => void,
) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState('');
  const [newMilestone, setNewMilestone] =
    useState<MilestoneRequestDTO>(milestone);

  const submitMutation = useMutation(
    () => API.update_milestone(milestone.id, newMilestone),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('read_all_milestones');
        setNewMilestone(milestone);
        onSuccessEdit?.();
      },
      onError: ({ message }) => {
        setError(message);
      },
    },
  );

  return {
    newMilestone,
    isLoading: submitMutation.isLoading,
    error,
    onSubmit: submitMutation.mutate,
    setTitle: (title: string) => setNewMilestone({ ...newMilestone, title }),
    setDeadline: (deadline: string) =>
      setNewMilestone({ ...newMilestone, deadline }),
    setDescription: (description: string) =>
      setNewMilestone({ ...newMilestone, description }),
  };
};
