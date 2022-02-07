import { API } from '@services';
import { AuthDTO, UserDTO } from '@types';
import { atom, useRecoilState } from 'recoil';
import AuthService from 'services/AuthService';

export const userStore = atom<UserDTO | undefined>({
  key: 'userStore',
  default: undefined,
});

export const useUserStore = () => {
  const [user, setUser] = useRecoilState(userStore);

  return {
    user,
    checkAuth: async () => {
      if (!AuthService.hasAuth()) return;

      const { data } = await API.check_account();
      setUser(data);
    },
    signin: ({ user, ...auth }: AuthDTO) => {
      AuthService.saveAuth(auth);
      setUser(user);
    },
    signout: () => {
      AuthService.removeAuth();
      setUser(undefined);
    },
  };
};
