import { useAuthStore } from '@stores';
import { Navigate } from 'react-router-dom';

export const AuthRestricted = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuthStore();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
