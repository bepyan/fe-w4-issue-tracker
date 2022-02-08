import { useNavigate } from 'react-router-dom';
import { useIsPathMatch } from '@hooks';
import { styled } from '@styles';

export type TapsProps = {
  tapList: TapItemProps[];
};

export const Taps = ({ tapList }: TapsProps) => {
  return (
    <TapsWrapper>
      {tapList.map((itemProps, index) => (
        <TapItem key={index} {...itemProps} />
      ))}
    </TapsWrapper>
  );
};

const TapsWrapper = styled('div', {
  display: 'inline-flex',
  backgroundColor: '$background',
  border: '1px solid $line',
  borderRadius: '11px',
  overflow: 'hidden',

  '& > * + *': {
    borderLeft: '1px solid $line',
  },
});

type TapItemProps = {
  path: string;
  children: React.ReactNode;
};

const TapItem = ({ path, children }: TapItemProps) => {
  const nav = useNavigate();
  const isMatch = useIsPathMatch(path);

  const props = {
    selected: isMatch,
    onClick: () => nav(path),
  };

  return (
    <TapItemWrapper role="tab" tabIndex={0} {...props}>
      {children}
    </TapItemWrapper>
  );
};

const TapItemWrapper = styled('div', {
  flexCenter: 'row',
  width: '160px',
  height: '40px',
  color: '$label',
  iconColor: '$label',
  fontWeight: '$bold',
  cursor: 'pointer',
  '& > * + *': {
    marginLeft: '8px',
  },
  '&:hover': {
    backgroundColor: '$input-background',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '$line',
      },
      false: {
        backgroundColor: '$background',
      },
    },
  },
});
