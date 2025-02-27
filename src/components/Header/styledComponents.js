import styled from "styled-components";

export const NavHeader = styled.div`
  height: 20vh;
  width: 100vw;
`;
export const NavContent = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoTitle = styled.h3`
  color: royalblue;
  margin-left: 5px;
  box-shadow: #ddd 2px 2px 2px 2px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  
`;
export const LogoutMobileBtn = styled.button`
  display: none;

  &:hover {
    background-color: #ddd;
    padding: 10px;
    border-radius: 100px;
  }
  @media (max-width: 700px) {
    display: block;
    background-color: #fff;
    border-width: 0;
    width: 50px;
  }
`;
export const NavMenu = styled.ul`
  list-style-type: none;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const LogoutDesktopButton = styled.button`
  background-color: royalblue;
  color: #fff;
  padding: 10px;
  width: 120px;
  border-width: 0;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  margin-left: 20px;

  @media (max-width: 700px) {
    display: none;
  }
  &:hover {
    background-image: linear-gradient(to bottom, #2874a6, #3498db);
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
`;
