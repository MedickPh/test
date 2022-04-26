import React, { FormEvent, useContext, useState } from "react";
import { ProductContext, TProd } from "../context/ProductContext";
type Tprops = {
  updateProd: any;
};
export const AddProduct: React.FC<Tprops> = ({ updateProd }) => {
  const [dataProduct, setDataProduct] = useState<TProd>({
    id: 0,
    imageUrl: "",
    name: "",
    count: 0,
    size: {
      width: 0,
      height: 0,
    },
    weight: "",
    comments: [],
  });
  const { addProduct } = useContext(ProductContext);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addProduct) {
      addProduct(dataProduct);
      updateProd();
    }
  };
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    if (name === "sizeWidtch") {
      setDataProduct((prev) => ({
        ...prev,
        size: { ...dataProduct.size, width: +val },
      }));
      return;
    }
    if (name === "sizeHieght") {
      setDataProduct((prev) => ({
        ...prev,
        size: { ...dataProduct.size, height: +val },
      }));
      return;
    }
    if (name === "comments") {
      if (e.currentTarget.value.length > 0) {
        const value = e.currentTarget.value.split(",");
        setDataProduct((prev) => ({
          ...prev,
          comments: value,
        }));
        return;
      }
    }
    setDataProduct((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  return (
    <div className="add-products">
      <form onSubmit={submitHandler}>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={changeHandler}
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            onChange={changeHandler}
            name="count"
            placeholder="Count"
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="sizeWidtch"
            placeholder="Size Widtch"
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            name="sizeHieght"
            placeholder="Size Hieght"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="widtch"
            onChange={changeHandler}
            placeholder="Widtch"
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="comments"
            placeholder="comments"
            onChange={changeHandler}
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
