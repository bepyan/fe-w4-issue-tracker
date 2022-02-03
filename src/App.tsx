import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthRequired, AuthRestricted, MainLayout } from '@components';
import Page from '@pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequired>
              <MainLayout />
            </AuthRequired>
          }
        >
          <Route index element={<Navigate to="/issues" />} />

          <Route path="/issues">
            <Route index element={<Page.Issues />} />
            <Route path=":issuesId" element={<Page.IssuesDetail />} />
            <Route path="new" element={<Page.IssuesNew />} />
          </Route>

          <Route path="/labels" element={<Page.Labels />} />
          <Route path="/milestones" element={<Page.Milestones />} />
        </Route>

        <Route
          path="/login"
          element={
            <AuthRestricted>
              <Page.Login />
            </AuthRestricted>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRestricted>
              <Page.Register />
            </AuthRestricted>
          }
        />

        <Route path="/about" element={<Page.AboutPage />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
