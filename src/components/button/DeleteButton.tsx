import type * as Stitches from '@stitches/react';
import { Icon } from '@components';
import { styled } from '@styles';
import { TextButton } from './TextButton';

type Props = Stitches.VariantProps<typeof TextButton> & {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DeleteButton = ({ children, ...props }: Props) => {
  return (
    <BaseButton {...props}>
      <Icon name="trash" />
      {children}
    </BaseButton>
  );
};

const BaseButton = styled(TextButton, {
  color: '$red300',
  iconColor: '$red300',

  '&:hover': {
    color: '$red500',
    iconColor: '$red500',
  },
});
