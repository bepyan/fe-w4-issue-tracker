import { useUserStore } from '@stores';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthRestricted = () => {
  const { user } = useUserStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
