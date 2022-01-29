import { useNavigate } from 'react-router-dom';
import { Icon, Label } from '@components';
import { styled } from '@styles';

export const IssueTableItem = () => {
  const nav = useNavigate();

  const navToIssueDetail = () => nav('1');

  return (
    <Wrapper>
      <input type="checkbox" />

      <div>
        <TitleWrapper>
          <Icon name="alert_circle" />
          <Title onClick={navToIssueDetail}>이슈제목</Title>
          <Label>레이블 이름</Label>
        </TitleWrapper>

        <DescWrapper>
          <span>#이슈번호</span>
          <span>작성자 및 타임스탬프 정조</span>
          <span>
            <Icon name="milestone" /> 마스터즈 코스
          </span>
        </DescWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',

  '&:last-child': {
    borderRadius: '0px 0px 1rem 1rem',
  },
  '&:hover': {
    backgroundColor: '$background',
  },
  input: {
    marginTop: '0.5rem',
    marginRight: '1.5rem',
  },
});

const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});

const Title = styled('span', {
  cursor: 'pointer',
  fontSize: '$medium',
  fontWeight: '$bold',

  '&:hover': {
    color: '$primary500',
  },
});

const DescWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.5rem',
  color: '$label',
  replaceIconStrokeToFill: '$label',

  '& > * + *': {
    marginLeft: '1rem',
  },
});
