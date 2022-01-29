import { CSS } from '@stitches/react';
import { Button, Logo, TextButton, TextInput } from '@components';
import { styled } from '@styles';

export const Login = () => {
  return (
    <Wrapper>
      <Logo size="large" />

      <Content>
        <Button size="large" css={githubButtonStyle}>
          GitHub 계정으로 로그인
        </Button>

        <TextSeparator>or</TextSeparator>

        <form>
          <TextInput label="아이디" />
          <TextInput label="비밀번호" type="password" />
          <Button size="large" type="submit">
            아이디로 로그인
          </Button>
          <TextButton type="button">회원가입</TextButton>
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
