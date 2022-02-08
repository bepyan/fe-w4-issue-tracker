import { API } from '@services';
import { useQueryClient } from 'react-query';

export const usePrefetchStores = () => {
  const queryClient = useQueryClient();

  return {
    prefetchStores: () => {
      queryClient.prefetchQuery('read_all_issues', API.read_all_issues);
      queryClient.prefetchQuery('read_all_labels', API.read_all_labels);
      queryClient.prefetchQuery('read_all_milestones', API.read_all_milestones);
      queryClient.prefetchQuery('read_all_users', API.read_all_users);
    },
  };
};
