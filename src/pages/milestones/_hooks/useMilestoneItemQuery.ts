import { API } from '@services';
import { useMutation, useQueryClient } from 'react-query';

export const useMilestoneItemQuery = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(API.delete_milestone, {
    onSuccess: () => {
      queryClient.invalidateQueries('read_all_milestones');
    },
  });

  const toggleStatusMutation = useMutation(API.update_milestone_status, {
    onSuccess: () => {
      queryClient.invalidateQueries('read_all_milestones');
    },
  });

  return {
    onDeleteMilestone: deleteMutation.mutate,
    onToggleMilestoneStatus: toggleStatusMutation.mutate,
  };
};
