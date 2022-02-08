import { Icon, IssueSideBar, TextArea, TextInput } from '@components';
import { useIssueNewStore } from '@stores';
import { styled } from '@styles';

export const IssueNewForm = () => {
  const { issue, setTitle, setComment, ...issueSideBarProps } =
    useIssueNewStore();

  return (
    <Content>
      <Icon name="user_image_large" />

      <InputWrapper>
        <TextInput
          id="title"
          label="제목"
          size="medium"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <TextArea
          id="comment"
          label="코멘트를 입력하세요"
          onChange={(e) => setComment(e.currentTarget.value)}
        />
      </InputWrapper>

      <IssueSideBar {...issue} {...issueSideBarProps} />
    </Content>
  );
};

const Content = styled('div', {
  display: 'flex',
  padding: '2rem 0rem',
  borderTop: '1px solid $line',
  borderBottom: '1px solid $line',
});

const InputWrapper = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginLeft: '1rem',
  marginRight: '2rem',

  '& > * + * ': {
    marginTop: '1rem',
  },
});
