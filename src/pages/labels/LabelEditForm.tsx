import { LabelDTO, LabelRequestDTO } from '@types';
import { useState } from 'react';
import { LabelForm, LabelFormProps } from './LabelForm';

interface Props {
  label: LabelDTO;
  onClose: () => void;
  onSubmit: (label: LabelDTO) => void;
}

export const LabelEditForm = ({ label, onClose, onSubmit }: Props) => {
  const [newLabel, setNewLabel] = useState<LabelRequestDTO>(label);

  const labelFormProps: LabelFormProps = {
    label: newLabel,
    header: <h1>레이블 편집</h1>,
    onSubmit: () => onSubmit({ ...label, ...newLabel }),
    onCancel: onClose,
    setLabel: setNewLabel,
  };

  return <LabelForm {...labelFormProps} />;
};
