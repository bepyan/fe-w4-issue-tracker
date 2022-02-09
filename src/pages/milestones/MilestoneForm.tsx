import { FormLayout, InlineInputWrapper, TextInput } from '@components';
import { MilestoneRequestDTO } from '@types';
import { getFormChangeHandler } from '@utils';

export interface MilestoneFormProps {
  header?: React.ReactNode;
  milestone: MilestoneRequestDTO;
  error?: string;
  setMilestone: React.Dispatch<React.SetStateAction<MilestoneRequestDTO>>;
  onSubmit: () => void;
  onCancel?: () => void;
}

export const MilestoneForm = ({
  milestone,
  error,
  setMilestone,
  ...formLayoutProps
}: MilestoneFormProps) => {
  const onChange = getFormChangeHandler(setMilestone);

  return (
    <FormLayout
      {...formLayoutProps}
      form={
        <>
          <InlineInputWrapper>
            <TextInput
              value={milestone.title}
              name="title"
              onChange={onChange}
              label="마일스톤 이름"
              size="small"
              required
              status={error ? 'error' : undefined}
              statusText={error}
            />
            <TextInput
              value={milestone.deadline}
              name="deadline"
              onChange={onChange}
              label="완료일(선택)"
              placeholder="ex. YYYY-MM-DD"
              size="small"
            />
          </InlineInputWrapper>

          <TextInput
            value={milestone.description}
            name="description"
            onChange={onChange}
            label="설명(선택)"
            size="small"
          />
        </>
      }
    />
  );
};
