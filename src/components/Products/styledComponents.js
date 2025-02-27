import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductTitle = styled.h1`
  color: royalblue;
  // margin-right :100px;
  @media (max-width: 750px) {
    font-size: 19px;
  }
`;
export const SearchInputContainer = styled.div`
  width: 350px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 0.1em;
  border-color: royalblue;
  border-radius: 4px;
  padding: 5px;
`;
export const SearchInput = styled.input`
  width: 350px;
  color: royalblue;
  outline: none;
  border-width: 0;
  padding: 8px;
`;
export const LoaderComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  over-flow: scroll;
`;
export const ProductTitleContainer = styled.div`
  display: flex;
  align-items :center;
  justify-content :space-between;
`;
export const MenuContainer = styled.div`
`
export const SelectElement = styled.select`
  padding: 10px;
  border-style: solid;
  border-width: 0.1em;
  border-color: #d5d8dc;
  border-radius: 3px;
  color: royalblue;
  font-weight: bold;
  margin-right: 10px;
  @media (max-width: 750px) {
    width: 80px;
  }
`;
export const OptionElement = styled.option`
  padding: 10px;
  font-size: 15px;
  color: royalblue;
`;
