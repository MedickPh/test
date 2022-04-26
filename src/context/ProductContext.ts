import { createContext } from "react";
export interface IProd {
  products: TProd[];
  addProduct: (content: TProd) => void;
}
export type TProd = {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: string[];
};
export const ProductContext = createContext<Partial<IProd>>({});
