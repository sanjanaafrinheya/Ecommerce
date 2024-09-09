import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import product from "../assets/product.png"

const About = () => {
  return (
    <>
<Container>
<h2 className='text-[49px] text-[#262626] font-bold'>About</h2>
<h3 className='text-[#262626] font-sans text-[16px] font-normal pt-4 pb-36'><Link to={"/"}>Home</Link> &#62; <Link to={"/About"}>About</Link> </h3>

<div className=" flex gap-x-8">
  <div className="">
  <img src={product} alt="" />

  </div>
  <div className="">
  <img src={product} alt="" />
  </div>
</div>
<div className="">
  <h3 className='text-[#262626] font-sans text-[24px] py-20'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
</div>
<div className="w-full flex justify-between mb-32">
  <div className="w-[30%]">
    <h3 className='text-[#262626] text-[25px] font-bold'>Our Vision</h3>
    <p  className='text-[#767676] text-[16px] font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
  <div className="w-[30%]">
    <h3 className='text-[#262626] text-[25px] font-bold'>Our Story</h3>
    <p  className='text-[#767676] text-[16px] font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
  </div>
  <div className="w-[30%]">
  <h3 className='text-[#262626] text-[25px] font-bold'>Our Brands</h3>
  <p className='text-[#767676] text-[16px] font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
  </div>
</div>
</Container>

    </>
  )
}

export default About