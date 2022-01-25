import { MainLayout } from '@components';
import { Page } from '@pages';
import { globalStyles } from '@styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" />
          <Route path="/issues" element={<Page.Issues />} />
          <Route path="/issues/:issuesId" element={<Page.IssuesDetail />} />
          <Route path="/issues/new" element={<Page.IssuesNew />} />
          <Route path="/labels" element={<Page.Labels />} />
          <Route path="/milestones" element={<Page.Milestones />} />
          <Route path="/milestones/new" element={<Page.MilestonesNew />} />
        </Route>
        <Route path="/login" element={<Page.Login />} />
        <Route path="/about" element={<Page.AboutPage />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
