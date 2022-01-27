import { styled } from '@styles';

export const TextButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$bold',
  lineHeight: '$medium',
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
    size: 'small',
  },
  variants: {
    size: {
      medium: {
        fontSize: '$small',
      },
      small: {
        fontSize: '$x-small',
      },
    },
  },
});
