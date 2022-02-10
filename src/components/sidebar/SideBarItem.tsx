import { DropdownBase, Icon } from '@components';
import { styled } from '@styles';

export type SideBarItemProps = {
  title: string;
  panelHeader: string;
  dropdownChildren: React.ReactNode;
  children?: React.ReactNode;
};

export const SideBarItem = ({
  title,
  children,
  dropdownChildren,
  ...dropdownProps
}: SideBarItemProps) => {
  return (
    <Wrapper>
      <Header>
        <span>{title}</span>

        <DropdownBase
          position="right"
          {...dropdownProps}
          indicator={<Icon name="plus" />}
        >
          {dropdownChildren}
        </DropdownBase>
      </Header>

      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',

  '& > * + *': {
    marginTop: '1rem',
  },
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$label',
  iconColor: '$label',
  fontWeight: '$bold',

  '& > :last-child': {
    marginLeft: 'auto',
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& > * + *': {
    marginTop: '0.25rem',
  },
});
