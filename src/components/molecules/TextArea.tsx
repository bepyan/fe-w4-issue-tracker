import { Icon } from '@components';
import { styled } from '@styles';
import React, { useState } from 'react';

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  label: string;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...defaultTextareaProps }, ref) => {
    const [hasContent, setHasContent] = useState(
      defaultTextareaProps.defaultValue !== '' &&
        defaultTextareaProps.defaultValue !== undefined,
    );
    const [focused, setFocused] = useState(false);

    // TODO: 파일 첨부하기, 2초후 최대 길이 표시

    const resizeTextarea = (target: HTMLTextAreaElement) => {
      target.style.height = '0px';
      target.style.height = target.scrollHeight + 'px';
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasContent(e.target.value !== '');
      defaultTextareaProps.onChange && defaultTextareaProps.onChange(e);
      resizeTextarea(e.target);
    };

    // props
    const wrapperProps = {
      active: focused,
      isLabelFloat: focused || hasContent,
    };

    const textareaProps = {
      ...defaultTextareaProps,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onChange: inputChangeHandler,
    };

    return (
      <Wrapper {...wrapperProps}>
        <InputWrapper>
          <label>{label}</label>
          <textarea ref={ref} {...textareaProps} />
        </InputWrapper>

        <Footer>
          <Icon name="paperclip" />
          <span>파일 첨부하기</span>
        </Footer>
      </Wrapper>
    );
  },
);

TextArea.displayName = 'TextArea';

const Wrapper = styled('div', {
  position: 'relative',
  backgroundColor: '$input-background',
  border: '1px solid transparent',
  borderWidth: '1px',
  borderRadius: '1rem',
  boxSizing: 'border-box',
  transition: 'background-color 200ms ease-in-out',

  variants: {
    active: {
      true: {
        backgroundColor: '$off-white',
        border: '1px solid $title-active',
      },
    },
    isLabelFloat: {
      true: {
        label: {
          fontSize: '$x-small',
        },
      },
    },
  },
});

const InputWrapper = styled('div', {
  padding: '1rem 0.5rem 0rem 1.5rem',
  label: {
    color: '$placeholder',
    pointerEvents: 'none',
    transition: 'all 200ms ease-in-out',
    position: 'absolute',
  },
  textarea: {
    paddingTop: '1.5rem',
    minHeight: '200px',
    width: '100%',
    zIndex: '$1',
    resize: 'vertical',
    fontSize: '$small',
  },
});

const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 2rem',
  borderTop: '1px dashed $title-active',
  color: '$body',
  iconColor: '$body',
  cursor: 'pointer',

  svg: {
    marginRight: '0.5rem',
  },
  span: {
    fontSize: '$x-small',
    fontWeight: '$bold',
  },
});
