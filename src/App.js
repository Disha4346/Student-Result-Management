import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import studentService from './services/studentService';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'form', 'details'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  // Load all students
  const handleLoadStudents = async () => {
    try {
      const data = await studentService.getAllStudents();
      setStudents(data);
      alert('✅ Students loaded successfully!');
    } catch (error) {
      alert('❌ Error loading students. Make sure JSON Server is running on port 3000.');
      console.error('Error:', error);
    }
  };

  // Add new student
  const handleAddStudent = async (student) => {
    try {
      await studentService.addStudent(student);
      alert('✅ Student added successfully! Click "Load Students" to refresh the list.');
      setCurrentView('list');
    } catch (error) {
      alert('❌ Error adding student.');
      console.error('Error:', error);
    }
  };

  // Update existing student
  const handleUpdateStudent = async (student) => {
    try {
      await studentService.updateStudent(selectedStudent.id, student);
      alert('✅ Student updated successfully! Click "Load Students" to refresh the list.');
      setCurrentView('list');
      setSelectedStudent(null);
    } catch (error) {
      alert('❌ Error updating student.');
      console.error('Error:', error);
    }
  };

  // Delete student
  const handleDeleteStudent = async (id) => {
    if (window.confirm('⚠️ Are you sure you want to delete this student?')) {
      try {
        await studentService.deleteStudent(id);
        alert('✅ Student deleted successfully! Click "Load Students" to refresh the list.');
      } catch (error) {
        alert('❌ Error deleting student.');
        console.error('Error:', error);
      }
    }
  };

  // View switching functions
  const showAddForm = () => {
    setIsEdit(false);
    setSelectedStudent(null);
    setCurrentView('form');
  };

  const showEditForm = (student) => {
    setIsEdit(true);
    setSelectedStudent(student);
    setCurrentView('form');
  };

  const showDetails = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const showList = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  // Render based on current view
  return (
    <div className="App">
      {currentView === 'list' && (
        <StudentList
          students={students}
          onAdd={showAddForm}
          onEdit={showEditForm}
          onDelete={handleDeleteStudent}
          onView={showDetails}
          onLoad={handleLoadStudents}
        />
      )}

      {currentView === 'form' && (
        <StudentForm
          student={selectedStudent}
          onSave={isEdit ? handleUpdateStudent : handleAddStudent}
          onCancel={showList}
          isEdit={isEdit}
        />
      )}

      {currentView === 'details' && selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onBack={showList}
        />
      )}
    </div>
  );
}

export default App;