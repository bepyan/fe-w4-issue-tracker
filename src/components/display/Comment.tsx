import { Icon, Label, TableLayout, TextButton } from '@components';
import { styled } from '@styles';

type Props = {
  status?: 'inital' | 'closed' | 'reopen';
};

export const Comment = ({}: Props) => {
  return (
    <TableLayout
      header={
        <Header>
          <UserName>Oni</UserName>
          <TimeStamp>20분 전</TimeStamp>

          <HeaderRightActionWrapper>
            <Label kind="line">작성자</Label>
            <TextButton>
              <Icon name="edit" /> 편집
            </TextButton>

            <TextButton>
              <Icon name="smile" />
            </TextButton>
          </HeaderRightActionWrapper>
        </Header>
      }
    >
      <div>
        처음부터 전부 구현하려고 하지 말고 필수적인 기능부터 만든 후, 차근차근
        완성도를 높여보세요.
      </div>
    </TableLayout>
  );
};

const Header = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});

const UserName = styled('span', {
  color: '$title-active',
});

const TimeStamp = styled('span', {
  color: '$label',
});

const HeaderRightActionWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});
