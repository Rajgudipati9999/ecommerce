import Header from '../Header'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {ShopNowButton,Heading,Description} from './styledComponents'
import './index.css'

const Home = () => {
  const navigate = useNavigate()
  const onEvent = () => {
    // console.log('Event Is Triggered')
    navigate('/products')
    // setIsClicked(true)
  }
  return (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <Heading color='red'>Clothes That Get YOU Noticed</Heading>
         <Description>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era and
            we are in a revolution. Your fashion makes you been seen and heard
            that way you are. So, celebrate the seasons new and exciting fashion
            in your own way.
         </Description>
        <ShopNowButton type="button" onClick={onEvent}>
            Shop Now
        </ShopNowButton>
      </div>
      <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          loading='lazy'
        />
    </div>
  </>
)
  
}

export default Home