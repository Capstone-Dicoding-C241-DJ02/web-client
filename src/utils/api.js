import axios from 'axios';

const BASE_URL = 'BASE_URL'; //e.g http://localhost:8000

const api = (params={}) =>
  axios.create({
    params,
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default api;
