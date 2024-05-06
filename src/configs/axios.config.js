import axios from "axios";
import LocalStorage from "../common/utils/localStorage";
import { API_BASE_URL } from "../services/constants";

const Axios = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: `${
        sessionStorage.getItem("token") || LocalStorage.getItem("token")
      }`,
      language_id: "6243ed27139b3b6b45b5b6dc",
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
