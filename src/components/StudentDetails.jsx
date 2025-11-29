import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  return (
    <div className="container">
      <div className="header">
        <h1>👤 Student Details</h1>
      </div>
      
      <div className="details-container">
        <div className="detail-card">
          <div className="detail-row">
            <span className="detail-label">Student ID:</span>
            <span className="detail-value">{student.id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Name:</span>
            <span className="detail-value">{student.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Section:</span>
            <span className="detail-value">{student.section}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Marks:</span>
            <span className="detail-value">{student.marks} / 100</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Grade:</span>
            <span className={`detail-value grade grade-${student.grade}`}>
              {student.grade}
            </span>
          </div>
        </div>
        
        <button className="btn btn-primary" onClick={onBack}>
          ← Back to List
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;