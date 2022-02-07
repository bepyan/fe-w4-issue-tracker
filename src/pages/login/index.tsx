import { styled } from '@styles';
import { useMutation } from 'react-query';
import { API } from '@services';
import { useAuthStore } from '@stores';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@components';
import { LoginContent, LoginContentProps } from './LoginContent';

export const Login = () => {
  const nav = useNavigate();
  const { signin } = useAuthStore();

  const loginMutation = useMutation(API.login_user, {
    onSuccess: ({ data }) => {
      signin(data);
    },
  });

  const contentProps: LoginContentProps = {
    isLoading: loginMutation.isLoading,
    onSubmitLogin: (e) => {
      e.preventDefault();
      if (loginMutation.isLoading) return;

      const target = e.target as typeof e.target & {
        id: { value: string };
        pw: { value: string };
      };

      loginMutation.mutate({ id: target.id.value, pw: target.pw.value });
    },
    navToRegister: () => nav('/register'),
  };

  return (
    <Wrapper>
      <Logo size="large" />
      <LoginContent {...contentProps} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: '100vh',
  flexCenter: 'column',
});
