import { Button, Icon } from '@components';
import { LabelDTO } from '@types';
import { useState } from 'react';
import { LabelForm, LabelFormProps } from './LabelForm';

interface Props {
  label: LabelDTO;
  onClose: () => void;
  onSubmit: (label: LabelDTO) => void;
}

export const LabelEditForm = ({ label, onClose, onSubmit }: Props) => {
  const [newLabel, setNewLabel] = useState(label);
  const labelFormProps: LabelFormProps = {
    label: newLabel,
    header: <h1>레이블 편집</h1>,
    footer: (
      <>
        <Button type="button" kind="secondary" size="small" onClick={onClose}>
          <Icon name="x_square" /> 취소
        </Button>
        <Button type="submit" size="small">
          <Icon name="edit" /> 완료
        </Button>
      </>
    ),
    onSubmit: () => onSubmit(newLabel),
    setName: (name) => setNewLabel({ ...newLabel, name }),
    setDescription: (description) => setNewLabel({ ...newLabel, description }),
    //prettier-ignore
    setBackgroundColor: (backgroundColor) => setNewLabel({ ...newLabel, backgroundColor }),
    setColor: (color) => setNewLabel({ ...newLabel, color }),
  };

  return <LabelForm {...labelFormProps} />;
};
