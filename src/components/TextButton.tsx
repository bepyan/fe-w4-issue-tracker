import { styled } from '@styles';

export const TextButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$bold',
  border: 'none',
  borderRadius: 20,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  transition: 'all 200ms ease-in-out',

  color: '$label',
  '&:active': {
    color: '$title-active',
  },
  '&:hover': {
    color: '$body',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: '$body',
    opacity: 0.5,
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
        padding: '0px 24px',
      },
      small: {
        width: 70,
        height: 32,
        fontSize: '$x-small',
        padding: '0px 16px',
      },
    },
  },
});
