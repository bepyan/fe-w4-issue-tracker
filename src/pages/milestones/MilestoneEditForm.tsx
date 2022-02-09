import { API } from '@services';
import { MilestoneDTO, MilestoneRequestDTO } from '@types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { MilestoneForm, MilestoneFormProps } from './MilestoneForm';

interface Props {
  milestone: MilestoneDTO;
  onClose: () => void;
}

export const MilestoneEditForm = ({ milestone, onClose }: Props) => {
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
        onClose();
      },
      onError: ({ message }) => {
        setError(message);
      },
    },
  );

  const milestoneFormProps: MilestoneFormProps = {
    milestone: newMilestone,
    error,
    header: <h1>마일스톤 편집</h1>,
    onSubmit: submitMutation.mutate,
    onCancel: onClose,
    setMilestone: setNewMilestone,
  };

  return <MilestoneForm {...milestoneFormProps} />;
};
