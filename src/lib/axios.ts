import axios, { AxiosInstance } from "axios";
import { ENV } from "./env";

/*
 * Main Axios Instance with base url
 */

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ENV.API_ENDPOINT,
  headers: {
    post: {
      Accept: "application/json",
    },
    get: {
      Accept: "application/json",
    },
  },
  withCredentials: true,
});

export default axiosInstance;
