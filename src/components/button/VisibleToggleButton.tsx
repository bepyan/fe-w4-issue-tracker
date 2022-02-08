import { Icon } from '@components';
import { Button } from '.';

interface Props {
  visible: boolean;
  onClick: () => void;
}

export const VisibleToggleButton = ({ visible, onClick }: Props) => {
  return (
    <Button
      size="small"
      kind={visible ? 'secondary' : 'standard'}
      onClick={onClick}
    >
      <Icon name={visible ? 'x_square' : 'plus'} /> {visible ? '닫기' : '추가'}
    </Button>
  );
};
