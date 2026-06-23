import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const studentService = {
  getAllStudents: async () => {
    const response = await apiClient.get('');
    return response.data;
  },

  getStudentById: async (id) => {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  },

  createStudent: async (studentData) => {
    const response = await apiClient.post('', studentData);
    return response.data;
  },

  updateStudent: async (id, studentData) => {
    const response = await apiClient.put(`/${id}`, studentData);
    return response.data;
  },

  deleteStudent: async (id) => {
    const response = await apiClient.delete(`/${id}`);
    return response.data;
  },
};