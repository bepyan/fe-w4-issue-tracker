import { styled } from '@styles';
import React, { useState } from 'react';
import {
  TextInputStatusText,
  TextInputStatusTextProps,
} from './TextInputStatusText';
import { InputWrapperProps, TextInputWrapper } from './TextInputWrapper';

type Props = Omit<React.HTMLProps<HTMLInputElement>, 'size'> &
  TextInputStatusTextProps &
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
      focused: focused && !status,
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

    const statusTextProps: TextInputStatusTextProps = {
      status,
      statusText,
    };

    return (
      <Wrapper>
        <TextInputWrapper {...inputWrapperProps}>
          <input ref={ref} type="text" {...inputProps} />
        </TextInputWrapper>
        <TextInputStatusText {...statusTextProps} />
      </Wrapper>
    );
  },
);

TextInput.displayName = 'TextInput';

const Wrapper = styled('div', {
  width: '100%',
});
