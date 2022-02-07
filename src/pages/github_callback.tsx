import { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { API } from '@services';

export const GithubCallback = () => {
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const res = await API.check_account(code + '');

        console.log(code);
        console.log(res);
        // 20e8602e7ee4519fbc83

        nav('/');
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, [location]);

  return <h1>로딩중...</h1>;
};
