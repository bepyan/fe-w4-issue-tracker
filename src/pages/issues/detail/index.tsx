import { useMutation, useQueryClient } from 'react-query';
import {
  Button,
  Comment,
  DeleteButton,
  Icon,
  IssueSideBar,
  TextArea,
} from '@components';
import { useInput, useIssueSideBar } from '@hooks';
import { API } from '@services';
import { useIssueDetailStore } from '@stores';
import { styled } from '@styles';
import { IssueDetailHeader } from './IssueDetailHeader';

export const IssuesDetail = () => {
  const queryClient = useQueryClient();
  const { issue } = useIssueDetailStore();
  const { setValue, ...commentProps } = useInput();

  const issueSideBarProps = useIssueSideBar();

  const commentMutaion = useMutation(
    async () => {
      if (!issue) return;

      await API.create_issue_comment(issue.id, {
        status: 'initial',
        content: commentProps.value,
      });
      setValue('');
    },
    {
      onSuccess: () => queryClient.invalidateQueries('read_issue_by_id'),
    },
  );

  const statusMutaion = useMutation(
    async () => {
      if (!issue) return;

      await API.update_issue_status(issue.id);
    },
    {
      onSuccess: () => queryClient.invalidateQueries('read_issue_by_id'),
    },
  );

  if (!issue) {
    return <>로딩중...</>;
  }

  return (
    <>
      <IssueDetailHeader
        issue={issue}
        onToggleIssueStatus={statusMutaion.mutate}
      />

      <Content>
        <CommentContainer>
          {issue.comments.map((comment, index) => (
            <CommentWrapper key={index}>
              <Icon name="user_image_large" />
              <Comment comment={comment} />
            </CommentWrapper>
          ))}

          <CommentWrapper>
            <Icon name="user_image_large" />
            <TextArea label="코멘트를 입력하세요" {...commentProps} />
          </CommentWrapper>

          <Button
            size="small"
            css={{ marginLeft: 'auto' }}
            onClick={() => commentMutaion.mutate()}
          >
            <Icon name="plus" /> 코멘트 작성
          </Button>
        </CommentContainer>

        <SideBarWrapper>
          <IssueSideBar {...issueSideBarProps} />
          <DeleteButton>이슈 삭제</DeleteButton>
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
