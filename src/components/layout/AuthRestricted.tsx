import { useAuthStore } from '@stores';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthRestricted = () => {
  const { auth } = useAuthStore();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
