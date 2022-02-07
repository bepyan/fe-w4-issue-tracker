import { DeleteButton, Icon, Label, TextButton } from '@components';
import { styled } from '@styles';
import { LabelDTO } from '@types';

export interface LabelTableItemProps {
  label: LabelDTO;
}

export const LabelTableItem = ({ label }: LabelTableItemProps) => {
  return (
    <TableItem>
      <LabelWrapper>
        <Label
          kind={label.color}
          css={{ backgroundColor: label.backgroundColor }}
        >
          {label.name}
        </Label>
      </LabelWrapper>

      <LabelDescText>{label.description}</LabelDescText>

      <LabelActionWrapper>
        <TextButton>
          <Icon name="edit" /> 편집
        </TextButton>

        <DeleteButton>삭제</DeleteButton>
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
