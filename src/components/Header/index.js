import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import {
  NavHeader,
  NavContent,
  LogoTitle,
  NavMenu,
  CartContainer,
  LogoutMobileBtn,
  LogoutDesktopButton,
  Cart,
} from "./styledComponents";
import './index.css'

const Header = (props) => {
  const navigate = useNavigate();
  const onLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };
  const onLogo = () => {
    navigate("/");
  };
  return (
    <NavHeader>
      <NavContent>
        <LogoTitle onClick={onLogo} title="Go To Home">
          Trendzy
        </LogoTitle>
        {/* <IoMenu style={{fontSize : '40px' , color : 'royalblue'}} className='menu-icon'/> */}
        <NavMenu>
          <Link
            to="/"
            style={{
              color: "royalblue",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            <li title="Go To Home">Home</li>
          </Link>
          <Link
            to="/products"
            style={{
              color: "royalblue",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            <li title="Go To Products">Products</li>
          </Link>
        </NavMenu>
        <CartContainer>
          <Link to="/cart">
            <Cart title="Go To Cart" className="cart">
              <LuShoppingCart
                style={{ fontSize: "30px", color: "royalblue" }}
              />
              <span style={{ color: "royalblue", fontWeight: "500" }}>0</span>
            </Cart>
          </Link>
          <LogoutDesktopButton type="button" onClick={onLogout}>
            Logout
          </LogoutDesktopButton>
          <LogoutMobileBtn type="button" onClick={onLogout}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout icon"
              style={{ height: "30px", width: "30px" }}
            />
          </LogoutMobileBtn>
        </CartContainer>
      </NavContent>
    </NavHeader>
  );
};
export default Header;
