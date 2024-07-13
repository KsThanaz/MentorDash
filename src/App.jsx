import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectSubmissions from './components/ProjectSubmissions';

const projects = [
  {
    id: '1',
    name: 'Project 1',
    submissions: [
      { id: 'a', name: 'Student A', date: '2023-01-01', status: 'Completed', marks: 90, comments: 'Good job', batch: 'Batch 1', topic: 'Topic 1' },
      // More submissions...
    ],
  },
  // More projects...
];

const App = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Dashboard projects={projects} />} />
        <Route path="/projects/:projectId" element={<ProjectSubmissions projects={projects} />} />
      </Routes>
    // </Router>
  );
};

export default App;



