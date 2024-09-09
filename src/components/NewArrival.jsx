import ProductRusable from "./ProductRusable";
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import axios from 'axios';
import Slider from 'react-slick';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrival = () => {

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
         className='absolute left-[30px] top-[50%] translate-y-[-50%] text-[30px] text-[grey]   w-[40px] h-[40px] z-40'
        onClick={onClick}
      ><FaArrowAltCircleLeft /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
      className='absolute right-[30px] top-[50%] translate-y-[-50%] text-[30px] text-[grey] w-[40px] h-[40px] z-40'
        onClick={onClick}
     ><FaArrowAltCircleRight /></div> 
    );
  }
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed:2000,
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
  }
  let [info, setInfo]= useState([])
  let getData = ()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
        
       setInfo(response.data.products);
    })
  }
  useEffect(()=>{
    getData()
  },[])
   
  let handleAddToCart =((item)=>{
    dispatch(addToCart({...item, qun:1}))
  
})
  


  return (
   
    <Container>
              
      <h2 className='font-sans text-[24px] font-bold py-4'>New Arrivals</h2>
      <Slider {...settings } > 
      
      {info.map((items) =>(
        
<ProductRusable key={items.id} discount={items.discountPercentage} thumbnail={items.thumbnail} title={items.title} price={items.price}/>



         ))}
  
      
      </Slider>
      <Flex className="justify-between">
      
          </Flex>
    </Container>
   
  )
}

export default NewArrival