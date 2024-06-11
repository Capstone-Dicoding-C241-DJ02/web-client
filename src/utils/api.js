import axios from 'axios';

const BASE_URL = 'http://34.128.73.230:8000';

const api = (params = {}, token = null) => {
  const instance = axios.create({
    params,
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
};

export default api;
