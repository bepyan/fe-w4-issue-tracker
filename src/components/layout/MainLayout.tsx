import React from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Icon, Logo } from '@components';
import { styled } from '@styles';
import { useAuthStore } from '@stores';

export const MainLayout = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { auth } = useAuthStore();

  const navToLaddingPage = () => nav('/');

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Wrapper>
      <Header>
        <HeaderLogo size="medium" onClick={navToLaddingPage} />
        <Icon name="user_image_large" />
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

  svg: {
    marginLeft: 'auto',
  },
});

const HeaderLogo = styled(Logo, {
  cursor: 'pointer',
});

const Content = styled('div', {
  padding: '2rem 5rem',
});
