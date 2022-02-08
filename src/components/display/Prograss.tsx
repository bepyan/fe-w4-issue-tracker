import { styled } from '@styles';

export const Prograss = styled('progress', {
  appearance: 'none',
  width: '100%',
  height: '0.5rem',

  '&::-webkit-progress-bar': {
    backgroundColor: '$input-background',
    borderRadius: '10px',
  },
  '&::-webkit-progress-value': {
    backgroundColor: '$primary300',
    borderRadius: '10px',
  },
});
