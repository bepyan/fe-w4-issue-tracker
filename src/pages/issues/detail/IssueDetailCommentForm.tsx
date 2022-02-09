import { Button, Icon, TextArea } from '@components';
import { API } from '@services';
import { styled } from '@styles';
import { IssueDTO } from '@types';
import { useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { CommentWrapper } from '.';

interface Props {
  issue: IssueDTO;
}

export const IssueDetailCommentForm = ({ issue }: Props) => {
  const submitRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();
  const commentMutaion = useMutation(
    (content: string) =>
      API.create_issue_comment(issue.id, {
        status: 'initial',
        content,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('read_issue_by_id');
        submitRef.current?.reset();
      },
    },
  );

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { content } = e.target as typeof e.target & {
      content: { value: string };
    };
    commentMutaion.mutate(content.value);
  };

  return (
    <FormWrapper ref={submitRef} onSubmit={onSubmit}>
      <CommentWrapper>
        <Icon name="user_image_large" />
        <TextArea label="코멘트를 입력하세요" name="content" />
      </CommentWrapper>

      <Button size="small" type="submit" css={{ marginLeft: 'auto' }}>
        <Icon name="plus" /> 코멘트 작성
      </Button>
    </FormWrapper>
  );
};

const FormWrapper = styled('form', {
  '& > * + *': {
    marginTop: '1rem',
  },
});
