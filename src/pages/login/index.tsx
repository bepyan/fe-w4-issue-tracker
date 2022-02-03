import { CSS } from '@stitches/react';
import { Button, Logo, TextButton, TextInput } from '@components';
import { styled } from '@styles';
import { useMutation } from 'react-query';
import { API } from '@services';
import { useAuthStore } from '@stores';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const nav = useNavigate();
  const { signin } = useAuthStore();

  const loginMutation = useMutation(API.login_user, {
    onSuccess: ({ data }) => {
      signin(data);
    },
  });

  const navToRegister = () => nav('/register');

  const onSubmitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (loginMutation.isLoading) return;

    const target = e.target as typeof e.target & {
      id: { value: string };
      pw: { value: string };
    };

    loginMutation.mutate({ id: target.id.value, pw: target.pw.value });
  };

  const inputErrorProps = loginMutation.isError
    ? {
        status: 'error' as const,
        statusText: '비번 확인점..',
      }
    : {};

  return (
    <Wrapper>
      <Logo size="large" />

      <Content>
        <Button size="large" css={githubButtonStyle}>
          GitHub 계정으로 로그인
        </Button>

        <TextSeparator>or</TextSeparator>

        <form onSubmit={onSubmitLogin}>
          <TextInput id="id" label="아이디" />
          <TextInput
            id="pw"
            label="비밀번호"
            type="password"
            {...inputErrorProps}
          />
          <Button size="large" type="submit" disabled={loginMutation.isLoading}>
            아이디로 로그인
          </Button>
          <TextButton
            type="button"
            disabled={loginMutation.isLoading}
            onClick={navToRegister}
          >
            회원가입
          </TextButton>
        </form>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: '100vh',
  flexCenter: 'column',
});

const Content = styled('div', {
  flexCenter: 'column',
  marginTop: '5rem',
  form: {
    flexCenter: 'column',
    '& > * + *': {
      marginTop: '1.5rem',
    },
  },
});

const TextSeparator = styled('span', {
  color: '$placeholder',
  fontWeight: '$bold',
  margin: '2rem 0px',
});

const githubButtonStyle: CSS = {
  color: '$off-white',
  backgroundColor: '$title-active',
  '&:hover': {
    backgroundColor: '$body',
  },
  '&:focus': {
    border: '4px solid $label',
    backgroundColor: '$title-active',
  },
};
