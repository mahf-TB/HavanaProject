// /api/user.js
import Axios from "@/lib/axiosInstance";


export const CreateClient = async (credentials) => {
  try {
    const response = await Axios.post('/client/ajouter', credentials);
    console.log("hello")
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const AllClients = async () => {
  try {
    const response = await Axios.get('/client/index');
    return response.data;
  } catch (error) {
    throw error;
  }
};

