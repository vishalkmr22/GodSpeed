import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

// Optional logging
API.interceptors.request.use(req => { console.log('→', req); return req; });
API.interceptors.response.use(
  res => { console.log('←', res); return res; },
  err => { console.error('API Error:', err.response||err); return Promise.reject(err); }
);

export const signupUser   = data => API.post('/auth/signup', data);
export const loginUser    = data => API.post('/auth/login', data);
export const fetchTeam    = () => API.get('/team');
export const fetchProduct = () => API.get('/product');
export const fetchPricing = () => API.get('/pricing');
