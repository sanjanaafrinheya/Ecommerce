import React, { useContext, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import ProductRusable from "./ProductRusable";
import { ApiData } from './ContextApi'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const SpecialOffers = () => {
  
  let data = useContext(ApiData)
  
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint:640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        }
      },
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,

        }
      },
      
    ],
  };
  return (
    
    <Container>
       
        <h2 className='font-sans text-[24px] font-bold py-4'>Special Offers</h2>
       <Slider  {...settings}> 
       {data.map((items) =>(
        
 <ProductRusable discount={items.discountPercentage} thumbnail={items.thumbnail} title={items.title} price={items.price}/>
 
         ))}
       </Slider>
 
       
    </Container>
  )
}

export default SpecialOffers