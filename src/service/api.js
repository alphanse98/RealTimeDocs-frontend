import axios from 'axios';

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000, // Optional timeout for requests
  
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("authToken");
    if (token) {
      // Set the Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default api;