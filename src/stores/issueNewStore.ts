import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';
import { useMutation } from 'react-query';
import { API } from '@services';
import { IssueFormDTO, LabelDTO, MilestoneDTO, UserDTO } from '@types';
import { useNavigate } from 'react-router-dom';

export const issueNewStore = atom<IssueFormDTO>({
  key: 'issueNewStore',
  default: {
    title: '',
    comment: '',
    labels: [],
    assignees: [],
    milestone: undefined,
  },
});

export const canSubmitIssueStore = selector({
  key: 'canSubmitIssueStore',
  get: ({ get }) => {
    const { title } = get(issueNewStore);

    return !!title;
  },
});

export const useIssueNewStore = () => {
  const nav = useNavigate();
  const [issue, setIssue] = useRecoilState(issueNewStore);
  const resetIssue = useResetRecoilState(issueNewStore);

  const submitMutation = useMutation(
    async () => {
      await API.create_issue({
        title: issue.title,
        comment: issue.comment,
        assignees: issue.assignees.map((v) => v.id),
        labels: issue.labels.map((v) => v.id),
        milestone: issue.milestone?.id,
      });
    },
    {
      onSuccess: () => {
        nav('/issues');
        resetIssue();
      },
    },
  );

  return {
    issue,
    isLoading: submitMutation.isLoading,
    setTitle: (title: string) => setIssue((v) => ({ ...v, title })),
    setComment: (comment: string) => setIssue((v) => ({ ...v, comment })),
    setLabels: (labels: LabelDTO[]) => setIssue((v) => ({ ...v, labels })),
    // prettier-ignore
    setAssignees: (assignees:UserDTO[]) => setIssue((v) => ({ ...v, assignees })),
    // prettier-ignore
    setMilestone: (milestone: MilestoneDTO | undefined) => setIssue((v) => ({ ...v, milestone })),
    submitIssue: () => submitMutation.mutate(),
  };
};

export const useCanSubmitIssueStore = () => {
  return useRecoilValue(canSubmitIssueStore);
};
