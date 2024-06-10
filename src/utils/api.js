import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

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
export const getJobs = () => api().get('/jobs');
export const getJobById = (id, token) => api({}, token).get(`/jobs/${id}`);
export const getCandidatesByJobId = (jobId, token) =>
  api({}, token).get(`/jobs/${jobId}/leaderboard`);
export const getCandidateById = (id, token) =>
  api({}, token).get(`/candidates/${id}`);

export const login = (email, password) =>
  api().post('/auth/login', {email, password});

export const createJob = (formData, token) =>
  axios.post(`${BASE_URL}/jobs`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

export default api;
