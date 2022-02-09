import { DeleteButton, Icon, Prograss, TextButton } from '@components';
import { styled } from '@styles';
import { MilestoneDTO } from '@types';
import { MilestoneEditForm } from './MilestoneEditForm';
import { useMilestoneItem } from './_hooks';

interface Props {
  milestone: MilestoneDTO;
  onDeleteMilestone: (milestoneId: string) => void;
  onToggleMilestoneStatus: (milestoneId: string) => void;
}

export const MilestoneTableItem = ({ milestone, ...props }: Props) => {
  const { isEdit, openCnt, closeCnt, percentage, openEdit, closeEdit } =
    useMilestoneItem(milestone);

  if (isEdit)
    return <MilestoneEditForm milestone={milestone} onClose={closeEdit} />;

  const onToggleStatus = () => props.onToggleMilestoneStatus(milestone.id);
  const onDelete = () => props.onDeleteMilestone(milestone.id);

  return (
    <Wrapper>
      <div>
        <TitleWrapper>
          <Title>
            <Icon name="milestone" />
            <span>{milestone.title}</span>
          </Title>

          {milestone.deadline && (
            <CompletionDate>
              <Icon name="calendar" />
              <span>{milestone.deadline}</span>
            </CompletionDate>
          )}
        </TitleWrapper>

        <Description>{milestone.description}</Description>
      </div>

      <ActionWrapper>
        <ActionButtonWrapper>
          <TextButton onClick={onToggleStatus}>
            <Icon name="archive" />
            {milestone.status === 'open' ? '닫기' : '열기'}
          </TextButton>
          <TextButton onClick={openEdit}>
            <Icon name="edit" /> 편집
          </TextButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
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
