import axios from 'axios';

const BASE_URL = 'https://petstore.swagger.io/v2';

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: 'available' | 'pending' | 'sold';
}

export const petApi = {
  addPet: async (pet: Pet): Promise<Pet> => {
    try {
      const response = await axios.post<Pet>(`${BASE_URL}/pet`, pet);
      return response.data;
    } catch (error: any) {
      console.error('Error adding pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  getPet: async (petId: number): Promise<Pet> => {
    try {
      const response = await axios.get<Pet>(`${BASE_URL}/pet/${petId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error getting pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  updatePet: async (pet: Pet): Promise<Pet> => {
    try {
      const response = await axios.put<Pet>(`${BASE_URL}/pet`, pet);
      return response.data;
    } catch (error: any) {
      console.error('Error updating pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },

  deletePet: async (petId: number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/pet/${petId}`);
    } catch (error: any) {
      console.error('Error deleting pet:', error.response?.status, error.response?.data);
      throw error;
    }
  },
};