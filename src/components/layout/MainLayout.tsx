import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Icon, Logo } from '@components';
import { styled } from '@styles';
import { useUserStore } from '@stores';

export const MainLayout = () => {
  const nav = useNavigate();
  const { signout } = useUserStore();

  const navToLaddingPage = () => nav('/issues');

  return (
    <Wrapper>
      <Header>
        <HeaderLogo size="medium" onClick={navToLaddingPage} />
        <Icon name="user_image_large" onClick={signout} />
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
    cursor: 'pointer',
    marginLeft: 'auto',
  },
});

const HeaderLogo = styled(Logo, {
  cursor: 'pointer',
});

const Content = styled('div', {
  padding: '2rem 5rem',
});
