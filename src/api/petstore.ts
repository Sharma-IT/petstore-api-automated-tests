import axios from 'axios';

const BASE_URL = 'https://petstore.swagger.io/v2';

export const petApi = {
  addPet: async (pet: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/pet`, pet);
      return response.data;
    } catch (error: any) {
      console.error('Error adding pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  getPet: async (petId: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/pet/${petId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error getting pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  updatePet: async (pet: any) => {
    try {
      const response = await axios.put(`${BASE_URL}/pet`, pet);
      return response.data;
    } catch (error: any) {
      console.error('Error updating pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  deletePet: async (petId: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/pet/${petId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error deleting pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },
};