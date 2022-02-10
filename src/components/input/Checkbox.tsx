import { Icon, IconName } from '@components';
import { CheckboxStatus } from '@types';

export interface CheckboxProps {
  status: CheckboxStatus;
  onClick: () => void;
}

const checkedIconMapper: {
  [key in CheckboxStatus]: IconName;
} = {
  checked: 'check_box_active',
  unchecked: 'check_box_initial',
  half: 'check_box_disable',
};

export const Checkbox = ({ status, onClick }: CheckboxProps) => {
  return (
    <Icon
      className="checkbox"
      name={checkedIconMapper[status]}
      onClick={onClick}
    />
  );
};
