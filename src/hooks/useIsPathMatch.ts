import { useMatch, useResolvedPath } from 'react-router-dom';

export const useIsPathMatch = (path: string) => {
  const { pathname } = useResolvedPath(path);
  const match = useMatch({ path: pathname, end: true });
  return !!match;
};
