import React from 'react';

const StudentList = ({ students, onAdd, onEdit, onDelete, onView, onLoad }) => {
  return (
    <div className="container">
      <div className="header">
        <h1>📚 Student Result Management System 📚</h1>
      </div>
      
      <div className="actions">
        <button className="btn btn-primary" onClick={onLoad}>
          Load Students
        </button>
        <button className="btn btn-success" onClick={onAdd}>
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students found. Click "Load Students" to fetch data.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.section}</td>
                  <td>{student.marks}</td>
                  <td>
                    <span className={`grade grade-${student.grade}`}>
                      {student.grade}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-small btn-info" 
                        onClick={() => onView(student)}
                      >
                        View
                      </button>
                      <button 
                        className="btn-small btn-warning" 
                        onClick={() => onEdit(student)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn-small btn-danger" 
                        onClick={() => onDelete(student.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;