import axios from 'axios';
import Endpoint from './endpoint'; 

// Create an instance of axios with default configuration
const apiClient = axios.create({
  // Base URL for all API requests
  baseURL: 'http://localhost:8000',

  // Default headers for API requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post(Endpoint.OPERATOR_REGISTER, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await apiClient.post(Endpoint.OPERATOR_LOGIN, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default apiClient;
