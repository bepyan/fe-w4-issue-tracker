import { Icon } from '@components';
import { styled } from '@styles';

export type SideBarItemProps = {
  title: string;
  children?: React.ReactNode;
  onClickPlusIcon?: () => void;
};

export const SideBarItem = ({
  title,
  children,
  onClickPlusIcon,
}: SideBarItemProps) => {
  return (
    <Wrapper>
      <Header>
        <span>{title}</span>
        <Icon name="plus" onClick={onClickPlusIcon} />
      </Header>

      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$label',
  iconColor: '$label',
  fontWeight: '$bold',

  svg: {
    marginLeft: 'auto',
    cursor: 'pointer',

    '&:hover': {
      iconColor: '$body',
    },
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
