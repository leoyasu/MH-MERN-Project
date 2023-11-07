import axios from 'axios';

export const signInService = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/Auth/signIn', formData);
    return response;
  } catch (error) {
    console.error('Error en la solicitud');
  }
};

export const signUpService = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/Auth/signUp', userData);
    return response;
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};