import { styled } from '@styles';
import { IssueStatus } from '@types';
import { Icon } from './Icon';

type Props = {
  status: IssueStatus;
};

export const IssueLabel = ({ status }: Props) => {
  return (
    <ToggleLabel kind={status}>
      <Icon name={status === 'open' ? 'alert_circle' : 'archive'} />
      {status === 'open' ? '열린 이슈' : '닫힌 이슈'}
    </ToggleLabel>
  );
};

const ToggleLabel = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$medium',
  fontSize: '$x-small',
  borderRadius: '30px',
  padding: '10px 16.5px',
  svg: {
    marginRight: '4px',
  },

  variants: {
    kind: {
      open: {
        backgroundColor: '$primary100',
        color: '$primary300',
        iconColor: '$primary300',
        border: '1px solid $primary300',
      },
      close: {
        backgroundColor: '$secondary100',
        color: '$secondary300',
        iconColor: '$secondary300',
        border: '1px solid $secondary300',
      },
    },
  },
});
