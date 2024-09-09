import React from 'react'
import banner from "../assets/bannerimg.png"
import Slider from "react-slick";

import { BsTranslate } from 'react-icons/bs';
import Container from '../components/Container';
import Flex from './Flex';
import { MdLocalShipping } from "react-icons/md";
import { TbReload } from "react-icons/tb";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,

              }
            },
            
          ],
        appendDots: dots => (
            <div
              style={{
                
                borderRadius: "10px",
                padding: "10px",
                position:"absolute",
                left:"100px",
                top: "50%",
                transform:"Translatey(-50%)"

              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "transparent",
                borderRight: "0px #262626 transparent",
                padding:"10px 0px"
              }}
            >
              0{i + 1}
            </div>
          )
          
      };
  return (
<>
    <Slider {...settings}>

<div className="">
        <div className="">
            <img src={banner} alt="" />
        </div>
    </div>
    <div className="">
        <div className="">
            <img src={banner} alt="" />
        </div>
    </div>
    <div className="">
        <div className="">
            <img src={banner} alt="" />
        </div>
    </div>
    <div className="">
        <div className="">
            <img src={banner} alt="" />
        </div>
    </div>
</Slider>
<Container>
    <div className="lg:flex lg:justify-between gap-x-10 justify-start py-8  text-center">
        
            <div className="items-center "> 
                <p className='font-sans text-[16px] font-normal'><span className='font-bold text-[18px] pr-3 justify-center'>2</span>Two Years Warrenty</p>
            </div>
            <div className="justify-end">
              <div className="flex items-center justify-center gap-x-3">
              <MdLocalShipping />
              <h4 className='font-sans text-[16px] font-normal '> Free Shipping</h4>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center  gap-x-3">
              <TbReload />
                <h4 className='font-sans text-[16px] font-normal'>Return policy in 30 days</h4>
              </div>
            </div>
        
    </div>
</Container>
</>
  )
}

export default Banner