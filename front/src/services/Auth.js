import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/auth';

export const registerUser = async (user) => {
  const response = await axios.post(`${API_URL}/register`, user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('refresh_token', response.data.refresh_token);
  return response.data;
};
