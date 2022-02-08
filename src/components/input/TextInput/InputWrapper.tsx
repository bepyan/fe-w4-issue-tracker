import { styled } from '@styles';

export type InputWrapperProps = {
  label: string;
  focused?: boolean;
  disabled?: boolean;
  isLabelSmaller?: boolean;
  isLabelFloat?: boolean;
  status?: 'success' | 'error';
  size?: 'large' | 'medium' | 'small';
};

type Props = InputWrapperProps & {
  children: React.ReactNode;
};

export const InputWrapper = ({ label, children, ...wrapperProps }: Props) => {
  return (
    <Wrapper {...wrapperProps}>
      <label>{label}</label>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  backgroundColor: '$input-background',
  padding: '1rem 1.5rem',
  color: '$title-active',

  '& > label': {
    color: '$placeholder',
    pointerEvents: 'none',
    transition: 'all 200ms ease-in-out',
    position: 'absolute',
  },
  input: {
    flex: 1,
    zIndex: '$1',
    fontSize: '$medium',
    paddingTop: '1rem',
  },
  svg: {
    cursor: 'pointer',
  },
  '&:focus-within': {
    border: '1px solid $title-active',
    backgroundColor: '$off-white',
  },

  defaultVariants: {
    size: 'large',
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        input: {
          cursor: 'not-allowed',
        },
      },
    },
    isLabelSmaller: {
      true: {
        label: {
          fontSize: '$x-small',
        },
      },
    },
    isLabelFloat: {
      true: {
        label: {
          transform: 'translateY(-12px)',
        },
      },
    },
    size: {
      large: {
        height: '64px',
        borderRadius: '16px',
      },
      medium: {
        height: '56px',
        borderRadius: '14px',
      },
      small: {
        height: '40px',
        borderRadius: '11px',
        padding: '0px 1.5rem',

        '& > label': {
          position: 'static',
          marginRight: '0.5rem',
          minWidth: '80px',
        },
        input: {
          paddingTop: '0px',
        },
      },
    },
    status: {
      success: {
        color: '$success500',
        borderColor: '$success500',
        backgroundColor: '$success100',

        label: {
          color: '$success500',
        },
      },
      error: {
        color: '$error500',
        borderColor: '$error500',
        backgroundColor: '$error100',

        label: {
          color: '$error500',
        },
      },
    },
  },
});
