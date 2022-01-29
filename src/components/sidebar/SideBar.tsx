import { styled } from '@styles';

export const SideBar = styled('div', {
  width: '300px',
  height: 'fit-content',
  backgroundColor: '$off-white',
  border: '1px solid $line',
  borderRadius: '1rem',

  '& > * + *': {
    borderTop: '1px solid $line',
  },
});
