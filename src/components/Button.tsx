import { styled } from '@styles';

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$bold',
  fontSize: 18,
  border: 'none',
  borderRadius: 20,
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  defaultVariants: {
    kind: 'standard',
    size: 'large',
  },
  variants: {
    kind: {
      standard: {
        color: '$off-white',
        backgroundColor: '$primary300',
        '&:hover': {
          backgroundColor: '$primary500',
        },
        '&:focus': {
          border: '4px solid $primary100',
          backgroundColor: '$primary300',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
      },
      secondary: {
        color: '$primary300',
        backgroundColor: '$off-white',
        border: '2px solid $primary300',
        '&:hover': {
          color: '$primary500',
          borderColor: '$primary500',
        },
        '&:focus': {
          borderColor: '$primary300',
          border: '4px solid $primary100',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          borderColor: '$primary100',
          opacity: 0.5,
        },
      },
    },
    size: {
      large: {
        width: 340,
        height: 64,
        padding: '0px 24px',
      },
      medium: {
        width: 240,
        height: 56,
        padding: '0px 24px',
      },
      small: {
        width: 120,
        height: 40,
        fontSize: 12,
        padding: '0px 16px',
        borderRadius: 11,
      },
    },
  },
});
