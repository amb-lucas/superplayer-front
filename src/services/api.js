import axios from "axios";
import { GetToken } from "../context/auth";

const Api = axios.create({
  baseURL: "https://backend-super-player.herokuapp.com",
});

Api.interceptors.request.use(async (config) => {
  const token = GetToken();
  if (token) config.headers.token = token;
  return config;
});

export default Api;
