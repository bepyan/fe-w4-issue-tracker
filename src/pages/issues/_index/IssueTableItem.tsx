import { useNavigate } from 'react-router-dom';
import { Icon, Label } from '@components';
import { styled } from '@styles';
import { IssueDTO } from '@types';

interface Props {
  issue: IssueDTO;
}

export const IssueTableItem = ({ issue }: Props) => {
  const nav = useNavigate();

  const navToIssueDetail = () => nav('1');

  return (
    <Wrapper>
      <input type="checkbox" />

      <div>
        <TitleWrapper>
          <Icon name="alert_circle" />
          <Title onClick={navToIssueDetail}>{issue.title}</Title>
          {issue.labels.map((item, i) => (
            <Label key={i}>{item.name}</Label>
          ))}
        </TitleWrapper>

        <DescWrapper>
          <span>#{issue.num}</span>
          <span>
            {issue.writer.name} 및 {issue.timestamp}
          </span>
          {issue.milestone && (
            <span>
              <Icon name="milestone" /> {issue.milestone.title}
            </span>
          )}
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
