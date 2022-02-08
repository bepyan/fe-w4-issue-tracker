import { useState } from 'react';

export const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);

  return {
    value,
    setValue,
    onChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.currentTarget.value);
    },
  };
};
