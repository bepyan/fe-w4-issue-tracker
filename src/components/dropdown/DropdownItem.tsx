import { styled } from '@styles';
import { DROPDOWN_ITEM_CLASSNAME } from './Dropdown';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const DropdownItem = (props: Props) => {
  return <DropdownItemWrapper className={DROPDOWN_ITEM_CLASSNAME} {...props} />;
};

export const DropdownItemWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: '$body',
  backgroundColor: '$off-white',
  padding: '0.5rem 1rem',

  '&:hover': {
    color: '$title-active',
    backgroundColor: '$background',
  },
  '& > * + *': {
    marginLeft: '0.5rem',
  },
});
