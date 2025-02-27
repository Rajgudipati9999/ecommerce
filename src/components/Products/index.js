import React from "react";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContext";
import Cookies from "js-cookie";
import Header from "../Header";
import ProductItem from "../ProductItem";
import './index.css' 

import {
  ProductListContainer,
  ProductTitle,
  SearchInputContainer,
  SearchInput,
  LoaderComponent,
  MenuContainer,
  SelectElement,
  OptionElement,
  ProductTitleContainer,
} from "./styledComponents";
import { ThreeDots } from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const { getProducts } = useContext(ProductContext);
  const { productObject } = useContext(ProductContext);

  const fetchData = async () => {
    const token = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch("https://apis.ccbp.in/products", options);
    const jsonData = await response.json();
    getProducts(jsonData.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderProducts = () => {
    return (
      <>
      <ProductTitleContainer>
        <div className="input-container">
          <ProductTitle>All Products</ProductTitle>
          <SearchInputContainer>
            <SearchInput type="search" placeholder="Search Items" />
            <FaSearch style={{ color: "royalblue" }} />
          </SearchInputContainer>
          <MenuContainer>
            <span
              style={{
                color: "royalblue",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Sort By
            </span>
            <SelectElement>
              <OptionElement>Price (High To Low)</OptionElement>
              <OptionElement>Price (Low To High)</OptionElement>
            </SelectElement>
          </MenuContainer>
        </div>
        </ProductTitleContainer>
        <ProductListContainer>
          {productObject.map((eachItem) => (
            <ProductItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ProductListContainer>
      </>
    );
  };

  const renderLoader = () => {
    return (
      <LoaderComponent>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="royalblue"
          ariaLabel="loading"
        />
      </LoaderComponent>
    );
  };

  return (
    <div>
      <Header />
      {!productObject ? renderLoader() : renderProducts()}
    </div>
  );
};
export default Products;
