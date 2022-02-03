import { UserDTO } from '@types';
import { atom, useRecoilState } from 'recoil';

export const authStore = atom<UserDTO | undefined>({
  key: 'authStore',
  default: { id: 'edward', pw: 'asdf', name: 'edward' },
});

export const useAuthStore = () => {
  const [auth, setAuth] = useRecoilState(authStore);

  return {
    auth,
    signin: async (data: UserDTO) => {
      setAuth(data);
    },
    signout: () => {
      setAuth(undefined);
    },
  };
};
