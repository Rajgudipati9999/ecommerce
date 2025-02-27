import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
  const [productObject, getProducts] = useState();
  return (
    <ProductContext.Provider value={{ productObject, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
