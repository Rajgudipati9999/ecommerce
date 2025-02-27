import React, { useContext, useState } from "react";
import {
  List,
  LikeIcon,
  Icon,
  Image,
  RateAndBtn,
  BrandPrice,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  ContentContainer,
  RatingContainer,
  RatingSpan,
  AddCartBtn,
  LikeBtn,
} from "./styledComponents";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import CartContext from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";

const ProductItem = ({ eachItem }) => {
  const { id, title, image_url, brand, price, rating } = eachItem;
  const [color, setColor] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const { productObject } = useContext(ProductContext);
  const { setCartProducts } = useContext(CartContext);

  // console.log(productObject)
  // const addToCart = (eachItem) => {
  //     setCartProducts((preState) => ([...preState , eachItem]))
  // }
  return (
    <List>
      <LikeIcon
        onClick={() => {
          isClicked ? setIsClicked(false) : setIsClicked(true);
        }}
      >
        {isClicked ? <FaHeart style={{ color: "#DE3163" }} /> : <FaRegHeart />}
      </LikeIcon>
      <Image src={image_url} />
      <ProductTitle>{title}</ProductTitle>
      <ContentContainer>
        <BrandPrice>
          <ProductBrand>By {brand}</ProductBrand>
          <ProductPrice>Rs.{price}/-</ProductPrice>
        </BrandPrice>
        <RateAndBtn>
          <RatingContainer>
            <RatingSpan>{rating}</RatingSpan>
            <FaStar style={{ fontSize: "15px" }} />
          </RatingContainer>
          <AddCartBtn
            onClick={(preState) => setCartProducts([...preState, eachItem])}
          >
            Add To Cart
          </AddCartBtn>
        </RateAndBtn>
      </ContentContainer>
    </List>
  );
};

export default ProductItem;
