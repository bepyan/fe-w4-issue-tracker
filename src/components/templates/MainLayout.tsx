import { Icon, Logo } from '@components';
import { styled } from '@styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Logo size="medium" />
        <Icon name="user_image_large" />
      </Header>

      <Content>
        <Outlet />
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

const Content = styled('div', {
  padding: '2rem 5rem',
});
