import axios from "axios";

const authUrl = "http://localhost:3003/auth";
const students = "http://localhost:3003/students";

export const api = {
  register: async (params) => {
    const auth = await axios.post(`${authUrl}/sign-up`, params);
    return auth;
  },

  createStudent: async (studentForm) => {
    const student = await axios.post(`${students}/create`, studentForm);
    return student;
  },

  getAllStudents: async () => {
    const allStudents = await axios.get(`${students}/read`);
    return allStudents;
  },

  getOneStudent: async (id) => {
    const oneStudent = await axios.get(`${students}/read/${id}`);
    return oneStudent;
  },

  deleteStudent: (id) => {
    axios.delete(`${students}/delete/${id}`);
  },
};
