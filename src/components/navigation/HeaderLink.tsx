import { styled } from '@styles';

export const HeaderLink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: '$label',
  iconColor: '$label',
  fontWeight: '$bold',

  '& > * + * ': {
    marginLeft: '4px',
  },
  '&:hover': {
    color: '$body',
    iconColor: '$body',
  },
  variants: {
    selected: {
      true: {
        color: '$title-active',
        iconColor: '$title-active',
      },
    },
  },
});
