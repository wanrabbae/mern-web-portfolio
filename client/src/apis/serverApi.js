import axios from "axios";
import Cookies from "js-cookie";

// const environment = "production"; // change this if you want to test on production

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

// kirim setiap request ke server dengan header Authorization yang berisi token
api.interceptors.request.use((req) => {
  const token = Cookies.get("token");
  if (token) {
    req.headers.Authorization = `${token}`;
  }
  return req;
});

export default api;
