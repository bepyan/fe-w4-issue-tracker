import { Button, Icon, IssueToggleButton, TextInput } from '@components';
import { useToggleType } from '@hooks';
import { styled } from '@styles';
import { IssueDTO } from '@types';

export interface IssueDetailHeaderTitleProps extends useToggleType {
  issue: IssueDTO;
  onToggleIssueStatus: () => void;
  onEditTitle: (title: string) => void;
}

export const IssueDetailHeaderTitle = ({
  issue,
  toggle,
  open,
  close,
  onToggleIssueStatus,
  onEditTitle,
}: IssueDetailHeaderTitleProps) => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { title } = e.target as typeof e.target & {
      title: { value: string };
    };
    onEditTitle(title.value);
  };

  return (
    <HeaderTitleForm onSubmit={onSubmit}>
      {toggle ? (
        <InputWrapper>
          <TextInput
            size="small"
            label="제목"
            name="title"
            defaultValue={issue.title}
          />
        </InputWrapper>
      ) : (
        <h5>
          {issue.title} <span>#{issue.num}</span>
        </h5>
      )}

      {toggle ? (
        <div>
          <Button kind="secondary" size="small" type="button" onClick={close}>
            <Icon name="x_square" /> 편집 취소
          </Button>

          <Button kind="secondary" size="small" type="button" onClick={open}>
            <Icon name="edit" /> 편집 완료
          </Button>
        </div>
      ) : (
        <div>
          <Button kind="secondary" size="small" type="submit" onClick={open}>
            <Icon name="edit" /> 제목 편집
          </Button>

          <IssueToggleButton
            status={issue.status}
            onToggle={onToggleIssueStatus}
          />
        </div>
      )}
    </HeaderTitleForm>
  );
};

const HeaderTitleForm = styled('form', {
  height: '50px',

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

const InputWrapper = styled('div', {
  flex: 1,
  marginRight: '5rem',
});
