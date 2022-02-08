import { Icon } from '@components';
import { InputWrapper } from './TextInput/InputWrapper';

type Props = React.HTMLProps<HTMLInputElement> & {
  label: string;
  onReset?: () => void;
};

export const ColorCodeInput = ({ label, onReset, ...inputProps }: Props) => {
  return (
    <InputWrapper size="small" label={label}>
      <input {...inputProps} maxLength={7} />
      <Icon name="refreshCcw" onClick={onReset} />
    </InputWrapper>
  );
};
