// src/api/auth.js
import api from './axios';
import { tokenStorage } from './tokenStorage';

export const registerUser = async (userData) => {
  try {
    const response = await api.post('register/', userData);
    const { access, refresh } = response.data.tokens;
    tokenStorage.setTokens(access, refresh);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw { detail: 'Something went wrong. Please try again.' };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('login/', credentials);
    tokenStorage.setTokens(response.data.access, response.data.refresh);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw { detail: 'Invalid credentials.' };
  }
};