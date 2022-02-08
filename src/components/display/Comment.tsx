import { Icon, Label, TableLayout, TextButton } from '@components';
import { useAuthStore } from '@stores';
import { styled } from '@styles';
import { CommentDTO } from '@types';

type Props = {
  comment: CommentDTO;
};

export const Comment = ({ comment }: Props) => {
  const { auth } = useAuthStore();

  return (
    <TableLayout
      header={
        <Header>
          <UserName>{comment.author}</UserName>
          <TimeStamp>20분 전</TimeStamp>

          <HeaderRightActionWrapper>
            {comment.author === auth?.id && (
              <>
                <Label kind="line">작성자</Label>
                <TextButton>
                  <Icon name="edit" /> 편집
                </TextButton>
              </>
            )}

            <TextButton>
              <Icon name="smile" />
            </TextButton>
          </HeaderRightActionWrapper>
        </Header>
      }
    >
      <div>{comment.content}</div>
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
