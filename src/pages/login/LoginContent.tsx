import { CSS } from '@stitches/react';
import { Button, TextButton, TextInput } from '@components';
import { API } from '@services';
import { styled } from '@styles';

export interface LoginContentProps {
  isLoading: boolean;
  navToRegister: () => void;
  onSubmitLogin: (e: React.SyntheticEvent) => void;
}

export const LoginContent = ({
  isLoading,
  onSubmitLogin,
  navToRegister,
}: LoginContentProps) => {
  return (
    <Content>
      <Button
        as="a"
        href={API.GithubAuthHref}
        size="large"
        css={githubButtonStyle}
      >
        GitHub 계정으로 로그인
      </Button>

      <TextSeparator>or</TextSeparator>

      <form onSubmit={onSubmitLogin}>
        <TextInput id="id" label="아이디" />

        <TextInput id="pw" label="비밀번호" type="password" />

        <Button size="large" type="submit" disabled={isLoading}>
          아이디로 로그인
        </Button>
      </form>

      <TextButton type="button" disabled={isLoading} onClick={navToRegister}>
        회원가입
      </TextButton>
    </Content>
  );
};

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
  padding: '0px',
  backgroundColor: '$title-active',
  '&:hover': {
    backgroundColor: '$body',
  },
  '&:focus': {
    border: '4px solid $label',
    backgroundColor: '$title-active',
  },
};
