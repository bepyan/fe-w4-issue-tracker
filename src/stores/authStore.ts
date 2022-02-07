import { usePrefetchStores } from '@hooks';
import { API, AuthService } from '@services';
import { AuthDTO, UserDTO } from '@types';
import { atom, useRecoilState } from 'recoil';

export const authStore = atom<UserDTO | undefined>({
  key: 'authStore',
  default: undefined,
});

export const useAuthStore = () => {
  const [auth, setAuth] = useRecoilState(authStore);
  const { prefetchStores } = usePrefetchStores();

  return {
    auth,
    checkAuth: async () => {
      if (!AuthService.hasAuth()) return;

      const { data } = await API.check_account();
      setAuth(data);
      prefetchStores();
    },
    signin: ({ user, ...auth }: AuthDTO) => {
      AuthService.saveAuth(auth);
      setAuth(user);
      prefetchStores();
    },
    signout: () => {
      AuthService.removeAuth();
      setAuth(undefined);
    },
  };
};
