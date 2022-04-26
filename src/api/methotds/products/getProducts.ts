import { useGet } from "../..";

export const useGetProducts = async () => {
  const result = await useGet("/products");
  return result;
};
