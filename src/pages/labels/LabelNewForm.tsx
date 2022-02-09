import { API } from '@services';
import { useLabelNewVisibleStore } from '@stores';
import { styled } from '@styles';
import { LabelRequestDTO } from '@types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { LabelForm, LabelFormProps } from './LabelForm';

const DEFAULT_NEW_LABEL: LabelRequestDTO = {
  name: '레이블 이름',
  color: 'dark',
  backgroundColor: '#EFF0F6',
  description: '',
};

export const LabelNewForm = () => {
  const queryClient = useQueryClient();
  const { visible, setVisible } = useLabelNewVisibleStore();
  const [label, setLabel] = useState<LabelRequestDTO>(DEFAULT_NEW_LABEL);
  const [error, setError] = useState('');

  const submitMutation = useMutation(() => API.create_label(label), {
    onSuccess: () => {
      setVisible(false);
      queryClient.invalidateQueries('read_all_labels');
      setLabel(DEFAULT_NEW_LABEL);
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  if (!visible) return null;

  const labelFormProps: LabelFormProps = {
    label,
    error,
    header: <h1>새로운 레이블 추가</h1>,
    setLabel,
    onSubmit: submitMutation.mutate,
  };

  return (
    <Wrapper>
      <LabelForm {...labelFormProps} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  backgroundColor: '$off-white',
  border: '1px solid $line',
  borderRadius: '1rem',
});
