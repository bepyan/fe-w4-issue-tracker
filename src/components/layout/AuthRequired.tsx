import { useUserStore } from '@stores';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthRequired = () => {
  const location = useLocation();
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
