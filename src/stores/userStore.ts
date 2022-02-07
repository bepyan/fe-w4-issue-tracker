import { API } from '@services';
import { UserDTO } from '@types';
import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';

export const userStore = atom<UserDTO[]>({
  key: 'userStore',
  default: [],
});

export const useUserStore = () => {
  const [userList, setUserList] = useRecoilState(userStore);

  useQuery('read_all_users', API.read_all_users, {
    onSuccess: ({ data }) => setUserList(data),
  });

  return { userList, setUserList };
};
