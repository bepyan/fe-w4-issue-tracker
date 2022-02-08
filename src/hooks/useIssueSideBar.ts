import { LabelDTO, MilestoneDTO, UserDTO } from '@types';
import { useState } from 'react';

export const useIssueSideBar = () => {
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
