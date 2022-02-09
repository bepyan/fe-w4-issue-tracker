import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useMilestoneNewVisibleStore } from '@stores';
import { styled } from '@styles';
import { MilestoneRequestDTO } from '@types';
import { API } from '@services';
import { MilestoneForm, MilestoneFormProps } from './MilestoneForm';

const DEFAULT_MILESTONE: MilestoneRequestDTO = {
  title: '',
  deadline: '',
  description: '',
};

export const MilestoneNewForm = () => {
  const { visible } = useMilestoneNewVisibleStore();

  const queryClient = useQueryClient();
  const { setVisible } = useMilestoneNewVisibleStore();
  const [milestone, setMilestone] = useState(DEFAULT_MILESTONE);
  const [error, setError] = useState('');

  const submitMutation = useMutation(() => API.create_milestone(milestone), {
    onSuccess: () => {
      setVisible(false);
      setMilestone(DEFAULT_MILESTONE);
      queryClient.invalidateQueries('read_all_milestones');
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  if (!visible) return null;

  const milestoneFormProps: MilestoneFormProps = {
    milestone,
    error,
    header: <h1>새로운 마일스톤 추가</h1>,
    onSubmit: submitMutation.mutate,
    setMilestone,
  };

  return (
    <Wrapper>
      <MilestoneForm {...milestoneFormProps} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  backgroundColor: '$off-white',
  border: '1px solid $line',
  borderRadius: '1rem',
});
