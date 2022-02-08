import {
  Button,
  ColorCodeInput,
  Icon,
  Label,
  RadioOptionSelection,
  TextInput,
} from '@components';
import { useLabelNewStore, useLabelNewVisibleStore } from '@stores';
import { styled } from '@styles';

export const LabelNewForm = () => {
  const { visible } = useLabelNewVisibleStore();
  const {
    label,
    error,
    setName,
    setDescription,
    setBackgroundColor,
    resetBackgroundColor,
    setColor,
    submitLabel,
  } = useLabelNewStore();

  const onSubmitLabel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitLabel();
  };

  if (!visible) return null;

  return (
    <Wrapper>
      <h1>새로운 레이블 추가</h1>
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
              onReset={resetBackgroundColor}
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
              onChange={setColor}
            />
          </InlineInputWrapper>

          <Button type="submit" size="small" css={{ marginLeft: 'auto' }}>
            <Icon name="plus" /> 완료
          </Button>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  backgroundColor: '$off-white',
  border: '1px solid $line',
  borderRadius: '1rem',
  padding: '2rem',

  h1: {
    fontSize: '$large',
    fontWeight: '$regular',
  },
  '& > * + *': {
    marginTop: '1.5rem',
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
