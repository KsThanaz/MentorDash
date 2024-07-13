import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ projects }) => {
  return (
    <div className="container mt-4">
      <h2>Mentor Dashboard</h2>
      <ul className="list-group">
        {projects.map((project) => (
          <li key={project.id} className="list-group-item">
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
