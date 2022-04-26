import React, { useCallback, useContext, useEffect, useState } from "react";
import { ProductContext, TProd } from "../context/ProductContext";
import { AddProduct } from "./AddProduct";
import { ItemList } from "./ItemList";

export const ListProduct = () => {
  const [state, setState] = useState<TProd[]>([]);
  const { products } = useContext(ProductContext);
  const updateProd = useCallback(() => {
    if (products) {
      setState(products);
    }
  }, [products]);
  useEffect(() => {
    updateProd();
  }, [updateProd, products]);
  const [addProduct, setAddProduct] = useState<boolean>(false);
  return (
    <div className="list-product-wrapper">
      <span onClick={() => setAddProduct(!addProduct)}>Add Product</span>
      {state?.map((e, i) => (
        <ItemList content={e} key={i}></ItemList>
      ))}
      {addProduct ? <AddProduct updateProd={updateProd} /> : ""}
    </div>
  );
};
