import { _axios } from '@services';
import { UserDTO } from '@types';

const baseRoute = '/auth';

export const check_account = () => {
  return _axios<UserDTO>({
    url: `${baseRoute}/account`,
    method: 'GET',
  });
};

export const GithubAuthHref = `${process.env.REACT_APP_API_ENDPOINT}/auth/github`;
