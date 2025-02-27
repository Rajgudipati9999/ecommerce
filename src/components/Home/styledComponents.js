import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-left: 20px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;
export const HomeContent = styled.div`
  width: 100vw;
`;
const Heading = styled.h1`
  color: royalblue;
`;
export const Description = styled.p`
  color: #000;
  font-size: 16px;
`;
const ShopNowButton = styled.button`
  padding: 10px;
  width: 150px;
  color: #fff;
  background-color: royalblue;
  border-width: 0;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to bottom, #2874a6, #3498db);
  }
`;
export const ImageContainer = styled.div`
  width: 50vw;
  @media (max-width: 950px) {
    order: -1;
    display: flex;
    justify-content: center;
  }
`;
export const HomeImage = styled.img`
  height: 400px;
  width: 400px;
  @media (max-width: 950px) {
    align-item: center;
  }
`;
export { ShopNowButton, Heading };
