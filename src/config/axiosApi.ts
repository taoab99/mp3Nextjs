import axios, { AxiosError } from "axios";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  handleToken,
  storage,
} from "./handleStorage";
import handleCookie from "../services/login/handleCookie";

const axiosApi = axios.create();

axiosApi.interceptors.request.use((config) => {
  const accessToken = storage.getStorage(ACCESS_TOKEN);
  const { url } = config;
  config.url = "http://localhost:3001/" + url;
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${JSON.parse(accessToken!)}`;
  }
  return config;
});

axiosApi.interceptors.response.use(
  async (res: any) => {
    return await res.data;
  },
  async (error: AxiosError) => {
    const status = error?.response?.status;
    const originalRequestConfig: any = error.config ?? {};
    if (status === 401) {
      const res: any = await handleRefreshToken();
      if (res) {
        handleToken(res);
        handleCookie();
        originalRequestConfig.url = originalRequestConfig.url.slice(22);
        originalRequestConfig.headers[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        return axiosApi(originalRequestConfig);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

const handleRefreshToken = async () => {
  const refreshToken = JSON.parse(storage.getStorage(REFRESH_TOKEN)!);
  return await axiosApi.post("refreshToken", {
    refreshToken,
  });
};
export const getUsers = async () => {
  return await axiosApi.get("users");
};
