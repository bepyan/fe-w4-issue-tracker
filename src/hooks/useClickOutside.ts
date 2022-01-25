import React, { useEffect } from 'react';

export const useClickOutside = (
  callback: () => void,
  exceptRefs: (React.RefObject<HTMLDivElement> | null)[],
) => {
  useEffect(() => {
    const onClickOutside = (ev: MouseEvent) => {
      const target = ev.target as Node;
      const isOutside = exceptRefs.every(
        (ref) => !ref?.current?.contains(target),
      );
      if (isOutside) callback();
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [callback, exceptRefs]);
};
