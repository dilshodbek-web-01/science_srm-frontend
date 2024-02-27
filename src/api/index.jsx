import axios from "axios";

const authUrl = "http://localhost:3003/auth";
const studentsURL = "http://localhost:3003/students";
const teachersURL = "http://localhost:3003/teachers";

export const api = {
  register: async (params) => {
    const auth = await axios.post(`${authUrl}/sign-up`, params);
    return auth;
  },

  createStudent: async (studentForm) => {
    const student = await axios.post(`${studentsURL}/create`, studentForm);
    return student;
  },

  getAllStudents: async () => {
    const allStudents = await axios.get(`${studentsURL}/read`);
    return allStudents;
  },

  getOneStudent: async (id) => {
    const oneStudent = await axios.get(`${studentsURL}/read/${id}`);
    return oneStudent;
  },

  updateStudent: (id, updateStudentForm) => {
    axios.put(`${studentsURL}/update${id}`, updateStudentForm);
  },

  deleteStudent: (id) => {
    const student = axios.delete(`${studentsURL}/delete/${id}`);
    return student;
  },

  createTeacher: async (teacherForm) => {
    const teacher = await axios.post(`${teachersURL}/create`, teacherForm);
    return teacher;
  },

  getAllTeachers: async () => {
    const allTeachers = await axios.get(`${teachersURL}/read`);
    return allTeachers;
  },

  deleteTeacher: (id) => {
    const teacher = axios.delete(`${teachersURL}/delete/${id}`);
    return teacher;
  },
};
