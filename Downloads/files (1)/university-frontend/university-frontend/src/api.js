import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Attach JWT token to every request automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

// Attendance APIs (Faculty)
export const markAttendance = (data) => API.post("/attendance/mark", data);
export const getAttendanceByDate = (date) => API.get(`/attendance/date/${date}`);
export const getAllAttendanceDates = () => API.get("/attendance/dates");

// Assignment APIs (Student)
export const getAssignments = () => API.get("/assignments");
export const submitAssignment = (assignmentId, formData) =>
  API.post(`/assignments/${assignmentId}/submit`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const getMySubmissions = () => API.get("/assignments/submissions/mine");

// Dashboard API (Faculty)
export const getDashboardStats = () => API.get("/dashboard/stats");

export default API;
