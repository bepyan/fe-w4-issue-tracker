import { Icon, Label, TextButton } from '@components';
import { useAuthStore } from '@stores';
import { styled } from '@styles';
import { CommentDTO } from '@types';
import { toTimeDuration } from '@utils';
import { TableLayout } from '../layout/TableLayout';

type Props = {
  comment: CommentDTO;
};

export const Comment = ({ comment }: Props) => {
  const { auth } = useAuthStore();

  return (
    <CommentWrapper status={comment.status}>
      <TableLayout
        header={
          <Header>
            <UserName>{comment.author}</UserName>
            <TimeStamp>{toTimeDuration(comment.timestamp)}</TimeStamp>

            <HeaderRightActionWrapper>
              {comment.author === auth?.id && (
                <>
                  <Label color="line" name="작성자" />
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
    </CommentWrapper>
  );
};

const UserName = styled('span', {
  color: '$title-active',
});

const CommentWrapper = styled('div', {
  variants: {
    status: {
      initial: {},
      closed: {
        '.table': {
          borderColor: '$secondary300',
        },
        '.table__header': {
          backgroundColor: '$secondary100',

          [`& ${UserName}`]: {
            color: '$secondary500',
          },
        },
        '.table__content': {
          color: '$secondary500',
        },
        '.table__content > *': {
          borderColor: '$secondary300',
        },
      },
      reopen: {
        '.table': {
          borderColor: '$primary300',
        },
        '.table__header': {
          backgroundColor: '$primary100',
          [`& ${UserName}`]: {
            color: '$primary500',
          },
        },
        '.table__content': {
          color: '$primary500',
        },
        '.table__content > *': {
          borderColor: '$primary300',
        },
      },
    },
  },
});

const Header = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
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
