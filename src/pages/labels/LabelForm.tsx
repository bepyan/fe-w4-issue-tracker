import {
  ColorCodeInput,
  FormLayout,
  InlineInputWrapper,
  Label,
  RadioOptionSelection,
  TextInput,
} from '@components';
import { styled } from '@styles';
import { LabelColor, LabelRequestDTO } from '@types';
import { getFormChangeHandler } from '@utils';

export interface LabelFormProps {
  label: LabelRequestDTO;
  error?: string;
  header?: React.ReactNode;
  onSubmit: () => void;
  onCancel?: () => void;
  setLabel: React.Dispatch<React.SetStateAction<LabelRequestDTO>>;
}

export const LabelForm = ({
  label,
  error,
  setLabel,
  ...formProps
}: LabelFormProps) => {
  const onChange = getFormChangeHandler(setLabel);

  const onChangeColor = (value: string) => {
    setLabel((state) => ({ ...state, color: value as LabelColor }));
  };

  return (
    <FormLayout
      {...formProps}
      form={
        <FormWrapper>
          <LabelWrapper>
            <Label {...label} />
          </LabelWrapper>

          <ContentWrapper>
            <TextInput
              label="레이블 이름"
              size="small"
              value={label.name}
              name="name"
              onChange={onChange}
              status={!error ? undefined : 'error'}
              statusText={error}
            />
            <TextInput
              label="설명 (선택)"
              size="small"
              value={label.description}
              name="description"
              onChange={onChange}
            />
            <InlineInputWrapper>
              <ColorCodeInput
                label="배경 색상"
                value={label.backgroundColor}
                name="backgroundColor"
                onChange={onChange}
              />
              <RadioOptionSelection
                name="color-group"
                label="택스트 색상"
                defaultValue={label.color}
                radios={[
                  { label: '어두운 색', value: 'dark' },
                  { label: '밝은 색', value: 'light' },
                ]}
                onChange={onChangeColor}
              />
            </InlineInputWrapper>
          </ContentWrapper>
        </FormWrapper>
      }
    />
  );
};

const FormWrapper = styled('div', {
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

const ContentWrapper = styled('div', {
  flex: 5,
  '& > * + *': {
    marginTop: '0.5rem',
  },
});
