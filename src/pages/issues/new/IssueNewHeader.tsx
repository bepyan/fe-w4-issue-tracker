import { styled } from '@styles';

export const IssueNewHeader = () => {
  return (
    <Header>
      <h5>새로운 이슈 작성</h5>
    </Header>
  );
};

const Header = styled('div', {
  paddingBottom: '2rem',

  h5: {
    fontSize: '$display',
    fontWeight: '$regular',
  },
});
