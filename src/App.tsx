import React, { useEffect, useState } from "react";
import { useGetProducts } from "./api/methotds/products/getProducts";
import { ListProduct } from "./components/ListProducts";
import { IProd, ProductContext, TProd } from "./context/ProductContext";
import { useHeadTitle } from "./hooks/useHeadTitle";
import "./main.sass";
export const App: React.FC = () => {
  useHeadTitle("Main product list");
  useEffect(function useEffectProd() {
    useCallProducts();
  }, []);
  async function useCallProducts() {
    const result = await useGetProducts();
    setProducts(result.data);
  }

  const [proucts, setProducts] = useState<TProd[]>([]);
  const valueContext: IProd = {
    products: proucts,
    addProduct: (content: TProd) => {
      const arr = proucts;
      const latestElement = proucts[proucts.length - 1];
      content.id = latestElement.id + 1;
      arr.push(content);

      setProducts(arr);
    },
  };
  console.log(proucts, "proucts");
  return (
    <div className="main-app-wrapper">
      <ProductContext.Provider value={valueContext}>
        <ListProduct />
      </ProductContext.Provider>
    </div>
  );
};
