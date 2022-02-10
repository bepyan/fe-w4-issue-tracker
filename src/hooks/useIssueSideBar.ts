import { IssueSideBarProps } from '@components';
import { API } from '@services';
import {
  IssueDTO,
  IssueUpdateDTO,
  LabelDTO,
  MilestoneDTO,
  UserDTO,
} from '@types';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

export const useIssueSideBar = (): IssueSideBarProps => {
  const [assignees, setAssignees] = useState<UserDTO[]>([]);
  const [labels, setLabels] = useState<LabelDTO[]>([]);
  const [milestone, setMilestone] = useState<MilestoneDTO | undefined>();

  return {
    assignees,
    labels,
    milestone,
    setAssignees,
    setLabels,
    setMilestone,
  };
};

export const useIssueDetailSideBar = (issue?: IssueDTO): IssueSideBarProps => {
  const queryClient = useQueryClient();

  const update = useMutation(
    async (data: IssueUpdateDTO) => {
      if (!issue) return;
      return await API.update_issue(issue.id, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('read_issue_by_id');
      },
    },
  );

  return {
    assignees: issue?.assignees || [],
    labels: issue?.labels || [],
    milestone: issue?.milestone,
    setAssignees: (v) => update.mutate({ assignees: v.map((e) => e.id) }),
    setLabels: (v) => update.mutate({ labels: v.map((e) => e.id) }),
    setMilestone: (v) => update.mutate({ milestone: v?.id }),
  };
};
