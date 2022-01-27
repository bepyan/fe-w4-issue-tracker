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
      {wrapperProps.status && <span>{wrapperProps.status}</span>}
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

  label: {
    color: '$placeholder',
    pointerEvents: 'none',
    transition: 'all 200ms ease-in-out',
    position: 'absolute',
  },
  input: {
    flex: 1,
    color: '$title-active',
    zIndex: '$1',
    fontSize: '$medium',
    paddingTop: '1rem',
  },
  span: {
    fontSize: '$x-small',
    fontWeight: '$medium',
  },

  defaultVariants: {
    size: 'large',
  },
  variants: {
    focused: {
      true: {
        border: '1px solid $title-active',
        backgroundColor: '$off-white',
      },
    },
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

        label: {
          position: 'static',
          marginRight: '0.5rem',
          width: '80px',
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