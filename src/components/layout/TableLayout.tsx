import { styled } from '@styles';

export type TableLayoutProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export const TableLayout = ({ header, children }: TableLayoutProps) => {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  border: '1px solid $line',
  borderRadius: '1rem',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$background',
  borderRadius: '1rem 1rem 0px 0px',
  padding: '1rem 2rem',
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$off-white',
  borderRadius: '0px 0px 1rem 1rem',

  '& > *': {
    padding: '1rem 2rem',
    borderTop: '1px solid $line',
  },
});
