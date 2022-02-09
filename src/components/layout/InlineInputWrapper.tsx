import { styled } from '@styles';

export const InlineInputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '1rem',
  },
});
