import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthRequired, AuthRestricted, MainLayout } from '@components';
import Page from '@pages';
import { useUserStore } from '@stores';
import { useQuery, useQueryClient } from 'react-query';
import { API } from '@services';

const App = () => {
  const queryClient = useQueryClient();
  const { checkAuth } = useUserStore();
  const { isLoading } = useQuery('checkAuth', checkAuth, {
    onSuccess: () => {
      queryClient.prefetchQuery('read_all_issues', API.read_all_issues);
      queryClient.prefetchQuery('read_all_labels', API.read_all_labels);
      queryClient.prefetchQuery('read_all_milestones', API.read_all_milestones);
      queryClient.prefetchQuery('read_all_users', API.read_all_users);
    },
  });

  if (isLoading) return <h1>로딩중...</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRequired />}>
          <Route index element={<Navigate to="/issues" />} />

          <Route element={<MainLayout />}>
            <Route path="/issues">
              <Route index element={<Page.Issues />} />
              <Route path=":issuesId" element={<Page.IssuesDetail />} />
              <Route path="new" element={<Page.IssuesNew />} />
            </Route>

            <Route path="/labels" element={<Page.Labels />} />
            <Route path="/milestones" element={<Page.Milestones />} />
          </Route>
        </Route>

        <Route element={<AuthRestricted />}>
          <Route path="/login" element={<Page.Login />} />
          <Route path="/register" element={<Page.Register />} />
          <Route path="/auth/callback" element={<Page.GithubCallback />} />
        </Route>

        <Route path="/about" element={<Page.AboutPage />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
