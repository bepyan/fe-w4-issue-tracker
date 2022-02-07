import { _axios } from '@services';

const baseRoute = '/auth';

export const check_account = (token: string) => {
  return _axios<void>({
    url: `${baseRoute}/account`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GithubAuthHref = `${process.env.REACT_APP_API_ENDPOINT}/auth/github`;
