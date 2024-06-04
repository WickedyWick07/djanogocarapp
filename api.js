import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/cars/';

export const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCar = async (car) => {
  try {
    const response = await axios.post(API_URL, car);
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateCar = async (id, car) => {
  const response = await axios.put(`${API_URL}${id}/`, car);
  return response.data;
};

export const deleteCar = async (id) => {
  const response = await axios.delete(`${API_URL}${id}/`);
  return response.data;
};


