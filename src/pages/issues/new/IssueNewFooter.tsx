import { Button, Icon, TextButton } from '@components';
import { useCanSubmitIssueStore, useIssueNewStore } from '@stores';
import { styled } from '@styles';
import { useNavigate } from 'react-router-dom';

export const IssueNewFooter = () => {
  const nav = useNavigate();
  const { submitIssue } = useIssueNewStore();
  const canSubmit = useCanSubmitIssueStore();

  return (
    <Footer>
      <TextButton size="medium" onClick={() => nav('/issues')}>
        <Icon name="x_square" /> 작성 취소
      </TextButton>

      <Button onClick={submitIssue} size="medium" disabled={!canSubmit}>
        완료
      </Button>
    </Footer>
  );
};

const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: '2rem',

  '& > * + *': {
    marginLeft: '2rem',
  },
});
