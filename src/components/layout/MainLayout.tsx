import { Outlet, useNavigate } from 'react-router-dom';
import { Icon, Logo } from '@components';
import { styled } from '@styles';

export const MainLayout = () => {
  const nav = useNavigate();

  const navToLaddingPage = () => nav('/');

  return (
    <Wrapper>
      <Header>
        <HeaderLogo size="medium" onClick={navToLaddingPage} />
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

const HeaderLogo = styled(Logo, {
  cursor: 'pointer',
});

const Content = styled('div', {
  padding: '2rem 5rem',
});
