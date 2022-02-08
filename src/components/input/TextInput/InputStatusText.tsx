import { styled } from '@styles';

export type InputStatusTextProps = {
  status?: 'success' | 'error';
  statusText?: string;
};

export const InputStatusText = ({
  status,
  statusText,
}: InputStatusTextProps) => {
  if (!status || !statusText) return null;

  return <StatusText status={status}>{statusText}</StatusText>;
};

const StatusText = styled('span', {
  fontSize: '$x-small',
  marginTop: '0.5rem',

  variants: {
    status: {
      success: {
        color: '$success500',
      },
      error: {
        color: '$error500',
      },
    },
  },
});
