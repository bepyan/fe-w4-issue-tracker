import { Icon } from '@components';
import { styled } from '@styles';
import { InputWrapper } from './TextInput/InputWrapper';

type Props = {
  name: string;
  label: string;
  radios: { label: string; value: string }[];
  defaultValue?: string;
  onChange: (value: string) => void;
};

export const RadioOptionSelection = ({
  name,
  label,
  radios,
  defaultValue,
  onChange,
}: Props) => {
  return (
    <InputWrapper size="small" label={label}>
      {radios.map((v, index) => (
        <RadioItem key={index}>
          <input
            type="radio"
            id={v.value}
            value={v.value}
            defaultChecked={v.value === defaultValue}
            name={name}
            required
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          <label htmlFor={v.value}>
            <Icon className="radio-input__on" name="check_on_circle" />
            <Icon className="radio-input__off" name="check_off_circle" />
            <span>{v.label}</span>
          </label>
        </RadioItem>
      ))}
    </InputWrapper>
  );
};

const RadioItem = styled('div', {
  marginLeft: '0.5rem',

  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '& > :last-child': {
      marginLeft: '0.5rem',
    },
  },
  input: {
    position: 'absolute',
    visibility: 'hidden',
  },
  '.radio-input__on': { display: 'none' },
  'input:checked + label .radio-input__on': { display: 'inherit' },
  'input:checked + label .radio-input__off': { display: 'none' },
});
