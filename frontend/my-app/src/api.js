import axios from "axios";
import { getToken } from "./routeProtection";
const API = "http://localhost:3001";
export const createNewStudentPost = async (data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
    },
  };
  const response = await axios.post(
    `${API}/api/student/createpost`,
    data,
    config
  );
  const result = response.data;
  return result;
};
export const studentLogin = async (data) => {
  const config = { headers: { "content-type": "application/json" } };
  const response = await axios.post(`${API}/api/student/login`, data, config);

  const result = response.data;
  console.log("result= ", result);
  if (!result.error) {
    window.localStorage.setItem("token", result.token);
  }

  return result;
};

export const addyLogin = async (data) => {
  const config = { headers: { "content-type": "application/json" } };
  const response = await axios.post(`${API}/api/admin/login`, data, config);

  const result = response.data;
  console.log("result= ", result);
  if (!result.error) {
    window.localStorage.setItem("token", result.token);
  }

  return result;
};
