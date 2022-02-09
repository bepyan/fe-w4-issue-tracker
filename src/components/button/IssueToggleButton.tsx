import { Icon } from '@components';
import { IssueStatus } from '@types';
import { Button } from './Button';

interface Props {
  status: IssueStatus;
  onToggle: () => void;
}

export const IssueToggleButton = ({ status, onToggle }: Props) => {
  return (
    <Button type="button" kind="secondary" size="small" onClick={onToggle}>
      <Icon name={status === 'open' ? 'archive' : 'alert_circle'} />
      <span>{status === 'open' ? '이슈 닫기' : '다시 열기'}</span>
    </Button>
  );
};
