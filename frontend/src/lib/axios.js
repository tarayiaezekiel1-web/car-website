import axios from 'axios';

let baseURL;

if (import.meta.env.DEV) {
  baseURL = 'http://localhost:5000/api';
} else {
  // ✅ Use relative path in production so both frontend & backend work on same Render domain
  baseURL = '/api';
}

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

export default api;
