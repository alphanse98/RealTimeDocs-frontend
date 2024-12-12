import axios from 'axios';

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000, // Optional timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;