import { Icon, TextButton } from '@components';
import { styled } from '@styles';

export const MilestoneTableItem = () => {
  return (
    <Wrapper>
      <div>
        <TitleWrapper>
          <Title>
            <Icon name="milestone" />
            <span>마일스톤 제목</span>
          </Title>

          <CompletionDate>
            <Icon name="calendar" />
            <span>완료일 일정</span>
          </CompletionDate>
        </TitleWrapper>

        <Description>레이블에 대한 설명</Description>
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
          <progress value="50" max="100" />

          <DetailInfo>
            <span>50%</span>
            <div>
              <span>열린 이슈 1</span>
              <span>닫힌 이슈 1</span>
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

  progress: {
    appearance: 'none',
    width: '100%',
    height: '0.5rem',

    '&::-webkit-progress-bar': {
      backgroundColor: '$input-background',
      borderRadius: '10px',
    },
    '&::-webkit-progress-value': {
      backgroundColor: '$primary300',
      borderRadius: '10px',
    },
  },
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
