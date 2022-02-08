import { styled } from '@styles';
import { LabelColor } from '@types';

const LabelBase = styled('div', {
  display: 'inline-flex',
  padding: '4px 16px',
  borderRadius: '30px',
  fontSize: '$x-small',
  fontWeight: '$medium',
  alignSelf: 'flex-start',

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

export const Label = ({
  color,
  backgroundColor,
  name,
}: {
  name: string;
  color?: LabelColor;
  backgroundColor?: string;
}) => {
  return (
    <LabelBase kind={color} css={{ backgroundColor }}>
      {name}
    </LabelBase>
  );
};
