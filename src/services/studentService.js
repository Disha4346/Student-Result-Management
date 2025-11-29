const API_URL = 'https://student-result-management-qlzz.onrender.com/students';

const studentService = {
  // Get all students
  getAllStudents: async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },
  
  // Get single student by ID
  getStudentById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  },
  
  // Add new student
  addStudent: async (student) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    return await response.json();
  },
  
  // Update existing student
  updateStudent: async (id, student) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    return await response.json();
  },
  
  // Delete student
  deleteStudent: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return response;
  },
};

export default studentService;