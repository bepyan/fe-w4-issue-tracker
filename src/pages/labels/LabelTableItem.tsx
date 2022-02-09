import { DeleteButton, Icon, Label, TextButton } from '@components';
import { useToggle } from '@hooks';
import { useLabelQuery } from '@stores';
import { styled } from '@styles';
import { LabelDTO } from '@types';
import { LabelEditForm } from './LabelEditForm';

export interface LabelTableItemProps {
  label: LabelDTO;
}

export const LabelTableItem = ({ label }: LabelTableItemProps) => {
  const { toggle: isEdit, open: openEdit, close: closeEdit } = useToggle();

  const { onEditLabel, onDeleteLabel } = useLabelQuery({
    labelId: label.id,
    onSuccessEdit: closeEdit,
  });

  if (isEdit)
    return (
      <LabelEditForm label={label} onClose={closeEdit} onSubmit={onEditLabel} />
    );

  return (
    <TableItem>
      <LabelWrapper>
        <Label {...label} />
      </LabelWrapper>

      <LabelDescText>{label.description}</LabelDescText>

      <LabelActionWrapper>
        <TextButton onClick={openEdit}>
          <Icon name="edit" /> 편집
        </TextButton>

        <DeleteButton onClick={onDeleteLabel}>삭제</DeleteButton>
      </LabelActionWrapper>
    </TableItem>
  );
};

const TableItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '2rem',
});

const LabelWrapper = styled('div', {
  flex: 1,
});

const LabelDescText = styled('div', {
  color: '$label',
  flex: 3,
});

const LabelActionWrapper = styled('div', {
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});
