import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Icon, Logo, TextButton } from '@components';
import { styled } from '@styles';
import { useAuthStore } from '@stores';

export const MainLayout = () => {
  const nav = useNavigate();
  const { auth, signout } = useAuthStore();

  const navToLaddingPage = () => nav('/issues');

  return (
    <Wrapper>
      <Header>
        <HeaderLogo size="medium" onClick={navToLaddingPage} />
        <HeaderRightWrapper>
          <Icon name="user_image_large" />
          <span>{auth?.name}님 환영합니다.</span>
          <TextButton size="medium" onClick={signout}>
            로그아웃
          </TextButton>
        </HeaderRightWrapper>
      </Header>

      <Content>
        <React.Suspense fallback={<h1>로딩중</h1>}>
          <Outlet />
        </React.Suspense>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  backgroundColor: '$background',
  width: '100%',
  height: '100vh',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '1.75rem 5rem',
});

const HeaderLogo = styled(Logo, {
  cursor: 'pointer',
});

const HeaderRightWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});

const Content = styled('div', {
  padding: '2rem 5rem',
});
