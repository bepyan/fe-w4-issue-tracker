import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@components';
import Page from '@pages';
import { globalStyles } from '@styles';

const App = () => {
  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/issues" />} />

          <Route path="/issues">
            <Route index element={<Page.Issues />} />
            <Route path=":issuesId" element={<Page.IssuesDetail />} />
            <Route path="new" element={<Page.IssuesNew />} />
          </Route>

          <Route path="/labels" element={<Page.Labels />} />
          <Route path="/milestones" element={<Page.Milestones />} />
        </Route>

        <Route path="/login" element={<Page.Login />} />
        <Route path="/about" element={<Page.AboutPage />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
