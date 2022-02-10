import { Button, Logo, TextButton, TextInput } from '@components';
import { styled } from '@styles';
import { useMutation } from 'react-query';
import { API } from '@services';
import { useAuthStore } from '@stores';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Register = () => {
  const nav = useNavigate();
  const { signin } = useAuthStore();
  const [error, setError] = useState('');

  const registerMutation = useMutation(API.register_user, {
    onSuccess: ({ data }) => {
      signin(data);
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  const navToLogin = () => nav('/login');

  const onSubmitRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (registerMutation.isLoading) return;

    const { id, name, pw } = e.target as typeof e.target & {
      id: { value: string };
      name: { value: string };
      pw: { value: string };
    };

    registerMutation.mutate({ id: id.value, pw: pw.value, name: name.value });
  };

  return (
    <Wrapper>
      <Logo size="large" />

      <Form onSubmit={onSubmitRegister}>
        <TextInput
          id="id"
          name="id"
          label="아이디"
          status={error ? 'error' : undefined}
          statusText={error}
        />
        <TextInput id="name" name="name" label="이름" />
        <TextInput id="pw" name="pw" label="비밀번호" type="password" />

        <Button
          size="large"
          type="submit"
          disabled={registerMutation.isLoading}
        >
          회원가입
        </Button>

        <TextButton
          type="button"
          onClick={navToLogin}
          disabled={registerMutation.isLoading}
        >
          로그인으로 돌아가기
        </TextButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: '100vh',
  flexCenter: 'column',
});

const Form = styled('form', {
  flexCenter: 'column',
  marginTop: '9rem',
  '& > * + *': {
    marginTop: '1.5rem',
  },
});
