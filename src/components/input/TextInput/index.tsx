import React, { useState } from 'react';
import { styled } from '@styles';
import { InputStatusText, InputStatusTextProps } from './InputStatusText';
import { InputWrapperProps, InputWrapper } from './InputWrapper';

type Props = Omit<React.HTMLProps<HTMLInputElement>, 'size'> &
  InputStatusTextProps &
  InputWrapperProps;

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      size = 'large',
      disabled,
      status,
      statusText,
      onChange,
      ...defaultInputProps
    },
    ref,
  ) => {
    const [hasContent, setHasContent] = useState(
      defaultInputProps.defaultValue !== '' &&
        defaultInputProps.defaultValue !== undefined,
    );
    const [focused, setFocused] = useState(false);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasContent(e.target.value !== '');
      onChange && onChange(e);
    };

    // props

    const inputWrapperProps: InputWrapperProps = {
      label,
      disabled,
      isLabelSmaller: hasContent || focused,
      isLabelFloat: size !== 'small' && (hasContent || focused),
      size,
      status,
    };

    const inputProps = {
      ...defaultInputProps,
      disabled,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onChange: inputChangeHandler,
    };

    const statusTextProps: InputStatusTextProps = {
      status,
      statusText,
    };

    return (
      <Wrapper>
        <InputWrapper {...inputWrapperProps}>
          <input ref={ref} type="text" {...inputProps} />
        </InputWrapper>
        <InputStatusText {...statusTextProps} />
      </Wrapper>
    );
  },
);

TextInput.displayName = 'TextInput';

const Wrapper = styled('div', {
  width: '100%',
});
