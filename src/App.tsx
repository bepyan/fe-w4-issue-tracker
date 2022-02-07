import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthRequired, AuthRestricted, MainLayout } from '@components';
import Page from '@pages';

const App = () => {
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
          <Route path="/github/callback" element={<Page.GithubCallback />} />
        </Route>

        <Route path="/about" element={<Page.AboutPage />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
