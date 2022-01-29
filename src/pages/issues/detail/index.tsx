import {
  Button,
  Comment,
  DeleteButton,
  Icon,
  IssueLabel,
  IssueSideBar,
  TextArea,
} from '@components';
import { styled } from '@styles';

export const IssuesDetail = () => {
  return (
    <>
      <Header>
        <HeaderTitle>
          <h5>
            FE 이슈트래커 디자인 시스템 구현 <span>#2</span>
          </h5>

          <div>
            <Button kind="secondary" size="small">
              <Icon name="edit" /> 제목 편집
            </Button>
            <Button kind="secondary" size="small">
              <Icon name="archive" /> 이슈 닫기
            </Button>
          </div>
        </HeaderTitle>

        <HeaderDesc>
          <IssueLabel isOpen={false} />
          <span>이 이슈가 20분 전에 Oni님에 의해 열렸습니다</span>
          <span> ∙ </span>
          <span>코멘트 1개</span>
        </HeaderDesc>
      </Header>

      <Content>
        <CommentContainer>
          <CommentWrapper>
            <Icon name="user_image_large" />
            <Comment />
          </CommentWrapper>

          <CommentWrapper>
            <Icon name="user_image_large" />
            <TextArea label="코멘트를 입력하세요" />
          </CommentWrapper>

          <Button size="small" css={{ marginLeft: 'auto' }}>
            <Icon name="plus" /> 코멘트 작성
          </Button>
        </CommentContainer>

        <SideBarWrapper>
          <IssueSideBar />
          <DeleteButton>이슈 삭제</DeleteButton>
        </SideBarWrapper>
      </Content>
    </>
  );
};

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '2rem',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
  },
  '& > * + *': {
    marginTop: '1rem',
  },
});

const HeaderTitle = styled('div', {
  h5: {
    color: '$title-active',
    fontSize: '$display',
    fontWeight: '$regular',

    span: {
      color: '$label',
      marginLeft: '0.5rem',
    },
  },

  '& > div:last-child': {
    display: 'flex',
    marginLeft: 'auto',

    '& > * + *': {
      marginLeft: '0.5rem',
    },
  },
});

const HeaderDesc = styled('div', {
  span: {
    color: '$body',
  },

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});

const Content = styled('div', {
  display: 'flex',
  paddingTop: '2rem',
  borderTop: '1px solid $line',

  '& > * + *': {
    marginLeft: '2rem',
  },
});

const CommentContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  '& > * + *': {
    marginTop: '1rem',
  },
});

const CommentWrapper = styled('div', {
  flex: 1,
  display: 'flex',

  '& > * + *': {
    marginLeft: '1rem',
    flex: 1,
  },
});

const SideBarWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  '& > * + *': {
    marginTop: '1.5rem',
  },
});
