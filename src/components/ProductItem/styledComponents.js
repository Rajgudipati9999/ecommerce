import styled from "styled-components";

export const List = styled.li`
  background-color: #eafaf1;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  color: royalblue;
  box-shadow: #ddd 2px 2px 2px 2px;
  @media (max-width: 750px) {
    width: 280px;
  }
`;
export const Image = styled.img`
  height: 200px;
  width: 300px;
  border-radius: 5px;
  @media (max-width: 750px) {
    width: 280px;
  }
`;
export const ProductTitle = styled.h2`
  font-family: Roboto;
  font-size: 20px;
`;
export const ProductBrand = styled.h3`
  font-family: Roboto;
  font-size: 15px;
`;
export const ProductPrice = styled.h4`
  font-family: Roboto;
  color: royalblue;
`;
export const ContentContainer = styled.div`
    width :300px;
    display :flex;
    align-items :center;
    justify-content :space-between;
    font-family :'Roboto;
`;
export const BrandPrice = styled.div`
  width: 150px;
`;
export const RateAndBtn = styled.div`
  width: 150px;
`;
export const RatingContainer = styled.div`
  dispaly: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
export const RatingSpan = styled.span`
  font-family: Roboto;
  margin-right: 5px;
  font-size: 15px;
`;
export const AddCartBtn = styled.button`
  background-color: royalblue;
  width: 150px;
  color: #fff;
  border-width: 0;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-image: linear-gradient(to bottom, #2874a6, #3498db);
  }
`;
export const LikeIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const Icon = styled.svg`
  height: 30px;
  width: 30px;
`;
export const LikeBtn = styled.button`
  background-color: transparent;
  border-width: none;
`;
