import {
  ACCESS_TOKEN_KEY,
  API_BASE_URL,
  //REFRESH_TOKEN_KEY,
} from "@constants/settings";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

//@ requests:
const requestInterceptor = (config: AxiosRequestConfig<any>) => {
  if (!config) return;

  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  //const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const requestErrorInterceptor = (error: any) => {
  return Promise.reject(error);
};
//@ --------

//@ response

const responseInterceptor = (response: AxiosResponse<any, any>) => {
  return response;
};

const responseErrorInterceptor = (error: AxiosError<any>) => {
  return Promise.reject(error);
};

//@ --------

//@ methods:

const setupBaseUrl = () => {
  axios.defaults.baseURL = API_BASE_URL;
};

const setupRequestInterceptor = () => {
  axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
};

const setupResponseInterceptor = () => {
  axios.interceptors.response.use(responseInterceptor, (err) =>
    responseErrorInterceptor(err)
  );
};

//@ --------

//@ bootstrap

export const setupAxios = () => {
  setupBaseUrl();
  setupRequestInterceptor();
  setupResponseInterceptor();
};

//@ --------
