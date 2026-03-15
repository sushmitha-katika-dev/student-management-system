import axios from 'axios';

// Backend API URL (Railway)
const REST_API_BASE_URL = 'https://backend-production-1263.up.railway.app/api/students';

export const listStudents = () => axios.get(REST_API_BASE_URL);

export const createStudent = (student) => axios.post(REST_API_BASE_URL, student);

export const getStudent = (studentId) => axios.get(REST_API_BASE_URL + '/' + studentId);

export const updateStudent = (studentId, student) => axios.put(REST_API_BASE_URL + '/' + studentId, student);

export const deleteStudent = (studentId) => axios.delete(REST_API_BASE_URL + '/' + studentId);