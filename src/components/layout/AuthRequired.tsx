import { useAuthStore } from '@stores';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { auth } = useAuthStore();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
