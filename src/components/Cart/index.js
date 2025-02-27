import React, { useContext, useEffect } from "react";
import Header from "../Header";
import { CartContainer, CartLogo } from "./styledComponent";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts);
  // useEffect(() => {
  //   localStorage.setItem('cartItems' , JSON.stringify(cartProducts));
  // },)
  return (
    <div className="bg">
      <Header />
      <CartContainer>
        {/* <CartLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          loading='lazy'
        /> */}
        <div className="cart-container">
          <div className="content-container">
            <div>
              <img src={cartProducts.image_url} />
            </div>
            <div>
              <h2>{cartProducts.title}</h2>
              <h3>{cartProducts.brand}</h3>
            </div>
          </div>
          <div className="right-side-content">
            <div>- 1 +</div>
            <p>{cartProducts.price}</p>
            <button>Delete Icon</button>
          </div>
        </div>
      </CartContainer>
      <div className="bg-images"></div>
    </div>
  );
};
export default Cart;
