import { Button, Icon } from '@components';
import { useLabelNewQuery, useLabelNewVisibleStore } from '@stores';
import { styled } from '@styles';
import { LabelRequestDTO } from '@types';
import { useState } from 'react';
import { LabelForm, LabelFormProps } from './LabelForm';

const DEFAULT_NEW_LABEL: LabelRequestDTO = {
  name: '레이블 이름',
  color: 'dark',
  backgroundColor: '#EFF0F6',
  description: '',
};

export const LabelNewForm = () => {
  const { visible } = useLabelNewVisibleStore();
  const [label, setLabel] = useState<LabelRequestDTO>(DEFAULT_NEW_LABEL);
  const { error, onSubmit } = useLabelNewQuery(() =>
    setLabel(DEFAULT_NEW_LABEL),
  );

  if (!visible) return null;

  const labelFormProps: LabelFormProps = {
    label,
    error,
    header: <h1>새로운 레이블 추가</h1>,
    footer: (
      <Button type="submit" size="small">
        <Icon name="plus" /> 완료
      </Button>
    ),
    onSubmit: () => onSubmit(label),
    setName: (name) => setLabel({ ...label, name }),
    setDescription: (description) => setLabel({ ...label, description }),
    //prettier-ignore
    setBackgroundColor: (backgroundColor) => setLabel({ ...label, backgroundColor }),
    setColor: (color) => setLabel({ ...label, color }),
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
