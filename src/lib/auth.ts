import axios from 'axios';
import { UserProfile } from '../types/user';

const API_URL = 'http://localhost:5000/api';

export interface AuthResponse {
  token: string;
  user: UserProfile;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const signup = async (userData: {
  email: string;
  password: string;
  fullName: string;
  occupation: string;
  industry: string;
}): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  return response.data;
};

export const fetchUserProfile = async (token: string): Promise<UserProfile> => {
  const response = await axios.get(`${API_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};