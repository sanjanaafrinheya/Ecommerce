import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (


<footer className="bg-[#F5F5F3] p-4">
<Container>
   <Flex className= "justify-between">

    <div className="lg:flex w-full ">
        <div className=" flex justify-between lg:gap-20 gap-5 pb-6 lg:w-[50%]">
            <div className="">
                <h4 className='uppercase font-bold text-[#262626] text-[16px] pb-6 text-left'>Menu</h4>
                <ul className='lg:px-0'>
                <Link to="/"><li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>Home</li></Link>
                <Link to="/Shop"><li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>Shop</li></Link>  
                <Link to="/About"><li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>About</li></Link>
                 <Link to="/Contact"><li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>Contact</li></Link>
                 <Link to="/Journal"><li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>Journal</li></Link> 
                </ul>
            </div>
            <div className="">
                <h4 className='uppercase font-bold text-[#262626] text-[16px] pb-6 text-left'>Shop</h4>
                <ul className=''>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>category 1</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>category 2</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>category 3</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>category 4</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>category 5</li>
                </ul>
            </div>
            <div className="">
                <h4 className='uppercase font-bold text-[#262626] text-[16px] pb-6 text-left'>Help</h4>
                <ul>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>privacy policy</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>terms & conditions</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>special e-shop</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>shipping</li>
                    <li className='text-[14px] font-normal text-[#6D6D6D] capitalize py-2'>secure payments</li>
                </ul>
            </div>
        </div>
        <div className="lg:flex justify-end lg:ml-40 lg:w-[40%] w-full text-center">
        <div className="">
            <h4 className='uppercase font-bold text-[#262626] text-[16px]  px-16'>(052) 611-5711
            </h4>
            <h4 className='uppercase font-bold text-[#262626] text-[16px] pb-2 px-16'>company@domain.com</h4>
            <p className='text-[14px] font-normal text-[#6D6D6D] capitalize px-16 py-2'>575 Crescent Ave. Quakertown, PA 18951</p>
        </div>
        <div className=" "> 
            <img className='  mx-auto ' src={logo} alt="" />
        </div>
        </div>
       
    </div>
    <div className="lg:flex lg:justify-between lg:w-full mx-auto ">
        <div className="lg:w-7/12 w-full justify-center py-2 lg:py-0">
<ul className='flex  gap-x-4 lg:justify-start justify-center'>
    <li><FaFacebookF /></li>
    <li><FaLinkedinIn /></li>
    <li><FiInstagram /></li>
</ul>
        </div>
        <div className="lg:w-5/12 lg:pl-4">
            <p className='text-[#6D6D6D] text-[12px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
    </div>
 
   
   </Flex>
 
 </Container>
 </footer>
  

    
 
  )
}

export default Footer