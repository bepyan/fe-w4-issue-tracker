import { MainLayout } from '@components';
import Page from '@pages';
import { globalStyles } from '@styles';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

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

          <Route path="/milestones">
            <Route index element={<Page.Milestones />} />
            <Route path="new" element={<Page.MilestonesNew />} />
          </Route>
        </Route>

        <Route path="/login" element={<Page.Login />} />
        <Route path="/about" element={<Page.AboutPage />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
