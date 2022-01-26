import { styled } from '@styles';
import React, { useState } from 'react';

type Props = Omit<React.HTMLProps<HTMLInputElement>, 'size'> & {
  label: string;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  status?: 'success' | 'error';
  statusText?: string;
};

export const TextInput = ({
  label,
  size = 'large',
  disabled,
  status,
  statusText,
  onChange,
  ...defaultinputProps
}: Props) => {
  const [hasContent, setHasContent] = useState(
    defaultinputProps.defaultValue !== '' &&
      defaultinputProps.defaultValue !== undefined,
  );
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);

  const onBlur = () => setFocused(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(e.target.value !== '');
    onChange && onChange(e);
  };

  // props

  const wrapperProps = {
    focused,
    size,
    disabled,
    status,
    isLabelSmaller: hasContent || focused,
    isLabelFloat: size !== 'small' && (hasContent || focused),
  };

  const inputProps = {
    ...defaultinputProps,
    disabled,
    onFocus,
    onBlur,
  };

  return (
    <Wrapper>
      <InputWrapper {...wrapperProps}>
        <label>
          {label}
          {defaultinputProps.required && '(선택)'}
        </label>
        <input type="text" {...inputProps} onChange={inputChangeHandler} />
        {status && <span>{status}</span>}
      </InputWrapper>
      {status && statusText && (
        <StatusText status={status}>{statusText}</StatusText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  width: '100%',
});

const InputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  backgroundColor: '$input-background',
  padding: '1rem 1.5rem',

  label: {
    color: '$placeholder',
    userSelect: 'none',
    transition: 'all 200ms ease-in-out',
    position: 'absolute',
  },
  input: {
    flex: 1,
    color: '$title-active',
    backgroundColor: 'transparent',
    zIndex: '$1',
    fontSize: '1rem',
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
    isLabelSmaller: {
      true: {
        label: {
          color: '$label',
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
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
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
