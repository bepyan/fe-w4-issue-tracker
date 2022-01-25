import { styled } from '@styles';

export const TextButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$bold',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  color: '$label',
  backgroundColor: 'transparent',
  svg: {
    marginRight: '4px',
  },
  iconColor: '$label',
  transition: 'all 200ms ease-in-out',
  '&:active': {
    color: '$title-active',
    iconColor: '$title-active',
  },
  '&:hover': {
    color: '$body',
    iconColor: '$body',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
    color: '$body',
    iconColor: '$body',
  },
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      medium: {
        width: 87,
        height: 32,
        fontSize: '$small',
      },
      small: {
        width: 70,
        height: 32,
        fontSize: '$x-small',
      },
    },
  },
});
