import { styled } from '@styles';

export const Label = styled('div', {
  display: 'inline-flex',
  padding: '4px 16px',
  borderRadius: '30px',
  fontSize: '$x-small',
  fontWeight: '$medium',

  defaultVariants: {
    kind: 'light',
  },
  variants: {
    kind: {
      light: {
        color: '$title-active',
        backgroundColor: '$background',
      },
      dark: {
        color: '$off-white',
        backgroundColor: '$body',
      },
      line: {
        color: '$label',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$line',
      },
    },
  },
});
