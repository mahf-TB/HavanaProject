// /api/user.js
import Axios from "@/lib/axiosInstance";


export const CreateFournisseur = async (credentials) => {
  try {
    const response = await Axios.post('/fournisseur/ajouter' , credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const AllFournisseur = async (credentials) => {
  try {
    const response = await Axios.get('/fournisseur/index' );
    return response.data;
  } catch (error) {
    throw error;
  }
};