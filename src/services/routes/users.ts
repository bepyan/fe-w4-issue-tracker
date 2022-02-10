import { _axios } from '@services';
import { AuthDTO, UserDTO, UserLoginDTO, UserRegistDTO } from '@types';

const baseRoute = '/users';

// POST

export const register_user = (data: UserRegistDTO) => {
  return _axios<AuthDTO>({
    url: `${baseRoute}/register`,
    method: 'POST',
    data,
  });
};

export const login_user = (data: UserLoginDTO) => {
  return _axios<AuthDTO>({
    url: `${baseRoute}/login`,
    method: 'POST',
    data,
  });
};

export const github_login = () => {
  return _axios({
    url: `/auth/github/callback`,
    method: 'GET',
  });
};

// GET

export const read_all_users = () => {
  return _axios<UserDTO[]>({
    url: `${baseRoute}`,
    method: 'GET',
  });
};

// PUT

// DELELE

export const withdrawal_user = () => {
  return _axios<void>({
    url: `${baseRoute}/withdrawal`,
    method: 'DELETE',
  });
};
