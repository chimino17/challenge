import axios from "axios";
import { API_BANKS } from "../utils/constants";

const WebApiService = (baseURL) => {
  if (!baseURL) {
    baseURL = API_BANKS;
  }
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance;
};

export default WebApiService;
