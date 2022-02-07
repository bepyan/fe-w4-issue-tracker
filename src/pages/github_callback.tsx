import { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '@services';
import { useAuthStore } from '@stores';

export const GithubCallback = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    const getToken = async () => {
      const query = qs.parse(location.search, { ignoreQueryPrefix: true });
      const accessToken = query.accessToken as string;
      AuthService.saveAuth({ accessToken, refreshToken: accessToken });

      try {
        await checkAuth();
        nav('/');
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, [location]);

  return <h1>로딩중...</h1>;
};
