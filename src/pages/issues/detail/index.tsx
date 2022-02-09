import { Comment, Icon, IssueSideBar } from '@components';
import { useIssueSideBar } from '@hooks';
import { useIssueDetailStore } from '@stores';
import { styled } from '@styles';
import { IssueDetailHeader } from './IssueDetailHeader';
import { IssueDetailCommentForm } from './IssueDetailCommentForm';
import { IssueDetailDeleteButton } from './IssueDetailDeleteButton';

export const IssuesDetail = () => {
  const { issue } = useIssueDetailStore();
  const issueSideBarProps = useIssueSideBar();

  if (!issue) {
    return <>로딩중...</>;
  }

  return (
    <>
      <IssueDetailHeader issue={issue} />

      <Content>
        <CommentContainer>
          {issue.comments.map((comment, index) => (
            <CommentWrapper key={index}>
              <Icon name="user_image_large" />
              <Comment comment={comment} />
            </CommentWrapper>
          ))}

          <IssueDetailCommentForm issue={issue} />
        </CommentContainer>

        <SideBarWrapper>
          <IssueSideBar {...issueSideBarProps} />
          <IssueDetailDeleteButton issue={issue} />
        </SideBarWrapper>
      </Content>
    </>
  );
};

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

export const CommentWrapper = styled('div', {
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
