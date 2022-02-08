import { Button, Icon, TextInput } from '@components';
import { useMilestoneNewStore, useMilestoneNewVisibleStore } from '@stores';
import { styled } from '@styles';

export const MilestoneNewForm = () => {
  const { visible } = useMilestoneNewVisibleStore();
  const {
    milestone,
    disableSubmit,
    error,
    submitMilestone,
    setTitle,
    setDeadline,
    setDescription,
  } = useMilestoneNewStore();

  if (!visible) return null;

  const onSubmitMilestone = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitMilestone();
  };

  return (
    <Wrapper>
      <h1>새로운 마일스톤 추가</h1>

      <FormWrapper onSubmit={onSubmitMilestone}>
        <InlineInputWrapper>
          <TextInput
            value={milestone.title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            label="마일스톤 이름"
            size="small"
            required
            status={error ? 'error' : undefined}
            statusText={error}
          />
          <TextInput
            value={milestone.description}
            onChange={(e) => setDeadline(e.currentTarget.value)}
            label="완료일(선택)"
            placeholder="ex. YYYY-MM-DD"
            size="small"
          />
        </InlineInputWrapper>

        <TextInput
          value={milestone.description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          label="설명(선택)"
          size="small"
        />

        <Button
          type="submit"
          disabled={disableSubmit}
          css={{ marginLeft: 'auto' }}
        >
          <Icon name="plus" /> 완료
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  backgroundColor: '$off-white',
  border: '1px solid $line',
  borderRadius: '1rem',
  padding: '2rem',

  h1: {
    fontSize: '$large',
    fontWeight: '$regular',
  },
  '& > * + *': {
    marginTop: '1.5rem',
  },
});

const InlineInputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > * + *': {
    marginLeft: '1rem',
  },
});

const FormWrapper = styled('form', {
  '& > * + * ': {
    marginTop: '1rem',
  },
});
