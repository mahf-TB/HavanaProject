// /api/user.js
import Axios from "@/lib/axiosInstance";
import Cookies from "js-cookie";


export const LoginUser = async (credentials) => {
  try {
    const response = await Axios.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UserAuth = async () => {
  try {
    const response = await Axios.get('/auth/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};



