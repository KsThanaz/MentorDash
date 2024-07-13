import React, { useState } from 'react';

const Evaluation = ({ submission }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [marks, setMarks] = useState(submission.marks);
  const [comments, setComments] = useState(submission.comments);

  const handleSave = () => {
    setIsEditing(false);
    // Save marks and comments to the backend
  };

  const handleDelete = () => {
    // Delete the submission
  };

  return (
    <tr>
      <td>{submission.name}</td>
      <td>{submission.date}</td>
      <td>{submission.status}</td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        ) : (
          submission.marks
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        ) : (
          submission.comments
        )}
      </td>
      <td>
        {isEditing ? (
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Evaluation;
