import axios from "axios";

const BASE_URL = "/api/";

const api = (params = {}, token = null) =>
  axios.create({
    params,
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // Include token if provided
    },
  });

export const getJobs = () => api().get("/jobs");
export const getJobById = (id, token) => api({}, token).get(`/jobs/${id}`);
export const getCandidatesByJobId = (jobId, token) =>
  api({ jobId }, token).get(`/jobs/${jobId}/leaderboard`);
export const getCandidateById = (id, token) =>
  api({}, token).get(`/candidates/${id}`);

export const login = (email, password) =>
  api().post("/auth/login", { email, password });
export const updateSummarizedCV = (cvName, summarizedCv, token) =>
  api({}, token).patch(`/candidates/summarize/cv`, {
    cv_name: cvName,
    summarized_cv: summarizedCv,
  });

export const createJob = (formData, token) =>
  axios.post(`${BASE_URL}/jobs`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

export default api;
