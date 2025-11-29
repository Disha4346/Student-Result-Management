import React, { useState } from 'react';

const StudentForm = ({ student, onSave, onCancel, isEdit }) => {
  const [formData, setFormData] = useState(
    student || { name: '', section: '', marks: '', grade: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.section || !formData.marks || !formData.grade) {
      alert('Please fill all fields!');
      return;
    }
    
    if (formData.marks < 0 || formData.marks > 100) {
      alert('Marks must be between 0 and 100!');
      return;
    }
    
    onSave(formData);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>{isEdit ? '✏️ Edit Student' : '➕ Add New Student'}</h1>
      </div>
      
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="name">Student Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="section">Section *</label>
          <input
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            placeholder="e.g., A, B, C"
          />
        </div>

        <div className="form-group">
          <label htmlFor="marks">Marks *</label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            min="0"
            max="100"
            placeholder="Enter marks (0-100)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade *</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          >
            <option value="">Select Grade</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </div>

        <div className="form-actions">
          <button className="btn btn-success" onClick={handleSubmit}>
            {isEdit ? 'Update Student' : 'Add Student'}
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;