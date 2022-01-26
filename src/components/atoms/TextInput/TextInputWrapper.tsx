import { styled } from '@styles';
import React from 'react';

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

export const TextInputWrapper = ({
  label,
  children,
  ...wrapperProps
}: Props) => {
  return (
    <InputWrapper {...wrapperProps}>
      <label>{label}</label>
      {children}
      {status && <span>{status}</span>}
    </InputWrapper>
  );
};

const InputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
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
  },
  span: {
    fontSize: '$x-small',
    fontWeight: '$medium',
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
        input: {
          marginTop: '10px',
        },
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

  defaultVariants: {
    size: 'large',
  },
});
