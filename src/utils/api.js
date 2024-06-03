import axios from "axios";

const BASE_URL = "http://localhost:3001/";

const api = (params = {}) =>
  axios.create({
    params,
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getJobs = () => api().get("/jobs");
export const getJobById = (id) => api().get(`/jobs/${id}`);
export const getCandidatesByJobId = (jobId) =>
  api().get(`/candidates`, { params: { jobId } });

export default api;
