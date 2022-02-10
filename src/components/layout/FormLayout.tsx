import { Button, Icon } from '@components';
import { styled } from '@styles';

export interface FormLayoutProps {
  header?: React.ReactNode;
  form?: React.ReactNode;
  disableSubmit?: boolean;
  /**
   * 사용시 Footer에 취소 버튼을 생성한다.
   */
  onCancel?: () => void;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

export const FormLayout = ({
  disableSubmit,
  header,
  form,
  onCancel,
  onSubmit,
}: FormLayoutProps) => {
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disableSubmit) return;

    onSubmit(e);
  };

  return (
    <Wrapper>
      {header && <HeaderWrapper>{header}</HeaderWrapper>}

      <FormWrapper onSubmit={onSubmitForm}>
        {form}
        <FooterWrapper>
          {onCancel && (
            <Button
              type="button"
              kind="secondary"
              size="small"
              onClick={onCancel}
            >
              <Icon name="x_square" /> 취소
            </Button>
          )}
          <Button type="submit" disabled={disableSubmit}>
            <Icon name="plus" /> 완료
          </Button>
        </FooterWrapper>
      </FormWrapper>
    </Wrapper>
  );
};
const Wrapper = styled('div', {
  padding: '2rem',

  '& > * + *': {
    marginTop: '1.5rem',
  },
});

const HeaderWrapper = styled('div', {
  h1: {
    fontSize: '$large',
    fontWeight: '$regular',
  },
});

const FormWrapper = styled('form', {
  '& > * + * ': {
    marginTop: '1rem',
  },
});

const FooterWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});
