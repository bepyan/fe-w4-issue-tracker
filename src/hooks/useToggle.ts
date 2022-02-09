import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  return {
    toggle,
    onToggle: () => setToggle(!toggle),
    open: () => setToggle(true),
    close: () => setToggle(false),
  };
};

export type useToggleType = ReturnType<typeof useToggle>;
