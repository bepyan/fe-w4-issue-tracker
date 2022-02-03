import { _axios } from '@services';
import { UserDTO } from '@types';

const baseRoute = '/users';

// POST

export const register_user = (data: UserDTO) => {
  return _axios<void>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
  });
};

export const login_user = (data: { id: string; pw: string }) => {
  return _axios<UserDTO>({
    url: `${baseRoute}`,
    method: 'POST',
    data,
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

export const delete_user = () => {
  return _axios<UserDTO[]>({
    url: `${baseRoute}`,
    method: 'DELETE',
  });
};
