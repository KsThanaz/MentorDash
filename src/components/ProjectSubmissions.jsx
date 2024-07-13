import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Evaluation from './Evaluation';

const ProjectSubmissions = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  const [filter, setFilter] = useState('');

  const filteredSubmissions = project.submissions.filter(
    (submission) =>
      submission.batch.includes(filter) || submission.topic.includes(filter)
  );

  return (
    <div className="container mt-4">
      <h2>{project.name}</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filter by batch or topic"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Evaluation Status</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission) => (
            <Submission key={submission.id} submission={submission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectSubmissions;
