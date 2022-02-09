import { IssueLabel } from '@components';
import { styled } from '@styles';
import { IssueDTO } from '@types';
import { toTimeDuration } from '@utils';

interface Props {
  issue: IssueDTO;
}

export const IssueDetailHeaderDesc = ({ issue }: Props) => {
  return (
    <HeaderDesc>
      <IssueLabel status={issue.status} />
      <span>
        이 이슈가 {toTimeDuration(issue.timestamp)}에 {issue.writer.name}님에
        의해 열렸습니다
      </span>
      <span> ∙ </span>
      <span>코멘트 {issue.comments.length}개</span>
    </HeaderDesc>
  );
};

const HeaderDesc = styled('div', {
  span: {
    color: '$body',
  },

  '& > * + *': {
    marginLeft: '0.5rem',
  },
});
