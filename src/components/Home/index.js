import React from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import {
  ShopNowButton,
  Heading,
  Description,
  HomeContainer,
  ImageContainer,
  HomeImage,
  HomeContent,
} from "./styledComponents";

const Home = () => {
  const navigate = useNavigate();
  const onEvent = () => {
    navigate("/products");
  };
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <Heading color="red">Clothes That Get YOU Noticed</Heading>
          <Description>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </Description>
          <ShopNowButton type="button" onClick={onEvent}>
            Shop Now
          </ShopNowButton>
        </HomeContent>
        <ImageContainer>
          <HomeImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="dresses to be noticed"
            loading="lazy"
          />
        </ImageContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
