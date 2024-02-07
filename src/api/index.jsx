import axios from "axios";

const authUrl = "http://localhost:3003/auth";

export const api = {

  register: async (params) => {
    await axios.post(`${authUrl}/sign-up`, params);
  },
  
};
