import { Icon, Prograss, TextButton } from '@components';
import { styled } from '@styles';
import { MilestoneDTO } from '@types';
import { useMemo } from 'react';

interface Props {
  milestone: MilestoneDTO;
}

export const MilestoneTableItem = ({ milestone }: Props) => {
  const [openCnt, closeCnt] = useMemo(() => {
    return milestone.issues.reduce(
      ([openCnt, closeCnt], issue) => {
        if (issue.status === 'open') return [openCnt + 1, closeCnt];
        return [openCnt, closeCnt + 1];
      },
      [0, 0],
    );
  }, [milestone]);

  const percentage = useMemo(() => {
    if (openCnt + closeCnt === 0) return 0;

    return Math.floor((closeCnt * 100) / (openCnt + closeCnt));
  }, [openCnt, closeCnt]);

  return (
    <Wrapper>
      <div>
        <TitleWrapper>
          <Title>
            <Icon name="milestone" />
            <span>{milestone.title}</span>
          </Title>

          <CompletionDate>
            <Icon name="calendar" />
            <span>{milestone.deadline}</span>
          </CompletionDate>
        </TitleWrapper>

        <Description>{milestone.description}</Description>
      </div>

      <ActionWrapper>
        <ActionButtonWrapper>
          <TextButton>
            <Icon name="archive" /> 닫기
          </TextButton>
          <TextButton>
            <Icon name="edit" /> 편집
          </TextButton>
          <TextButton>
            <Icon name="trash" /> 삭제
          </TextButton>
        </ActionButtonWrapper>

        <PrograssIndicator>
          <Prograss value={percentage} max="100" />

          <DetailInfo>
            <span>{percentage}%</span>
            <div>
              <span>열린 이슈 {openCnt}</span>
              <span>닫힌 이슈 {closeCnt}</span>
            </div>
          </DetailInfo>
        </PrograssIndicator>
      </ActionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',

  '& > *:last-child': {
    marginLeft: 'auto',
  },
  '& > div > * + *': {
    marginTop: '0.5rem',
  },
});

const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '0.75rem',
  },
  '& > div > * + *': {
    marginLeft: '0.5rem',
  },
});

const Title = styled('div', {
  color: '$title-active',
  fontWeight: '$bold',
  fontSize: '$medium',
});

const CompletionDate = styled('div', {
  color: '$label',
  iconColor: '$label',
});

const Description = styled('div', {
  color: '$label',
});

//

const ActionWrapper = styled('div', {
  width: '244px',
  display: 'flex',
  flexDirection: 'column',
});

const ActionButtonWrapper = styled('div', {
  display: 'flex',
  marginLeft: 'auto',

  '& > * + *': {
    marginLeft: '1.5rem',
  },
});

const PrograssIndicator = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > * + *': {
    marginTop: '0.5rem',
  },
});

const DetailInfo = styled('div', {
  color: '$label',
  display: 'flex',
  fontWeight: '$medium',
  fontSize: '$x-small',

  '& > * + *': {
    marginLeft: '0.5rem',
  },
  '& > *:last-child': {
    marginLeft: 'auto',

    '& > * + *': {
      marginLeft: '0.5rem',
    },
  },
});
