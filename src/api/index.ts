import axios from "axios";

export const reqest = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export const useGet = async (url: string) => {
  const result = await reqest.get(url);
  return result;
};
