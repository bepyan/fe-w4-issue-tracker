import { Button, Icon, IssueLabel } from '@components';
import { styled } from '@styles';
import { IssueDTO } from '@types';

export interface IssueDetailHeaderProps {
  issue: IssueDTO;
}

export const IssueDetailHeader = ({ issue }: IssueDetailHeaderProps) => {
  return (
    <Header>
      <HeaderTitle>
        <h5>
          {issue.title} <span>#{issue.num}</span>
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
        <IssueLabel status={issue.status} />
        <span>
          이 이슈가 {issue.timestamp}에 {issue.writer.name}님에 의해 열렸습니다
        </span>
        <span> ∙ </span>
        <span>코멘트 {issue.comments.length}개</span>
      </HeaderDesc>
    </Header>
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
