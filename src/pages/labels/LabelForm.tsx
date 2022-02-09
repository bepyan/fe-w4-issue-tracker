import {
  ColorCodeInput,
  Label,
  RadioOptionSelection,
  TextInput,
} from '@components';
import { styled } from '@styles';
import { LabelColor, LabelRequestDTO } from '@types';

export interface LabelFormProps {
  label: LabelRequestDTO;
  error?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onSubmit: () => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setColor: (color: LabelColor) => void;
}

export const LabelForm = ({
  label,
  error,
  header,
  footer,
  onSubmit,
  setName,
  setDescription,
  setBackgroundColor,
  setColor,
}: LabelFormProps) => {
  const onSubmitLabel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Wrapper>
      {header && <HeaderWrapper>{header}</HeaderWrapper>}

      <ContentWrapper>
        <LabelWrapper>
          <Label {...label} />
        </LabelWrapper>
        <FormWrapper onSubmit={onSubmitLabel}>
          <TextInput
            label="레이블 이름"
            size="small"
            defaultValue={label.name}
            onChange={(e) => setName(e.currentTarget.value)}
            status={!error ? undefined : 'error'}
            statusText={error}
          />
          <TextInput
            label="설명 (선택)"
            size="small"
            defaultValue={label.description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <InlineInputWrapper>
            <ColorCodeInput
              label="배경 색상"
              defaultValue={label.backgroundColor}
              onChange={(e) => setBackgroundColor(e.currentTarget.value)}
            />
            <RadioOptionSelection
              name="color-group"
              label="택스트 색상"
              defaultValue={label.color}
              radios={[
                { label: '어두운 색', value: 'dark' },
                { label: '밝은 색', value: 'light' },
              ]}
              onChange={(value) => setColor(value as LabelColor)}
            />
          </InlineInputWrapper>

          <FooterWrapper>{footer}</FooterWrapper>
        </FormWrapper>
      </ContentWrapper>
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

const ContentWrapper = styled('div', {
  display: 'flex',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});

const LabelWrapper = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FormWrapper = styled('form', {
  flex: 5,

  '& > * + * ': {
    marginTop: '1rem',
  },
});

const InlineInputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '1rem',
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
