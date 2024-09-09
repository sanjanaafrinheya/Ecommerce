import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import cart from "../assets/cart.png"
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Navbar = () => {
  let cartInfo = useSelector((state)=>state.product.cartItem)



  let [cartShow, setCartShow] = useState(false)
  let [cartCountShow, setCartCountShow]=useState(false)
  let [cartUserShow, setUserShow]=useState(false)
  
  let cartRef = useRef()
  let cartCountRef = useRef()
  let cartUserRef = useRef()

 useEffect(()=>{
window.addEventListener("click",(e)=>{
if(cartRef.current.contains(e.target)==true){
  setCartShow(!cartShow)
}else{
  setCartShow(false)
}
if(cartCountRef.current.contains(e.target)==true){
  setCartCountShow(!cartCountShow)
}else{
  setCartCountShow(false)
}
if(cartUserRef.current.contains(e.target)){
  setUserShow(!cartUserShow)
}else{
  setUserShow(false)
}
})
 },[cartShow,cartCountShow,cartUserShow])

 
  return (
    <nav className='py-5 mt-[60px] bg-[#F5F5F3]'>
  <Container >
        <Flex className='items-center'>
          <div className="w-1/4 relative ">
          <div ref={cartRef} className="flex items-center justify-center lg:justify-start">
          <FaBarsStaggered className='text-[#262626]' />
          <h4 className='ml-3 font-normal font-sans text-[16px] text-[#262626] hidden lg:block '>Shop by Category</h4>
          </div>
          {cartShow &&
            <div className="absolute z-30 left-0 top-[37px] w-[240px]">
              <ul className='bg-[#262626] py-5'> 
                <li className='font-normal font-sans  text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-8 duration-500 ease-in-out hover:text-white py-3'>Accesories</li>
                <li className='font-normal font-sans  text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-8 duration-500 ease-in-out hover:text-white py-3'>Furniture</li>
                <li className='font-normal font-sans  text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-8 duration-500 ease-in-out hover:text-white py-3'>Electronics</li>
                <li className='font-normal font-sans  text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-8 duration-500 ease-in-out hover:text-white py-3'>Clothes</li>
                <li className='font-normal font-sans  text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-8 duration-500 ease-in-out hover:text-white py-3'>Bags</li>
                <li className='font-normal font-sans  text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-8 duration-500 ease-in-out hover:text-white py-3'>Home appliances</li>
              </ul>
            </div>
            }
          </div>
          <div className="w-1/2 relative">
          <div className="flex">
          <input className='border-2 border-[#80808018] bg-[white] w-full h-[50px] pl-3'  type="text" placeholder="Search Products"/>
          <div className="absolute right-0 top-[50%] translate-y-[-50%] pr-3">
          <FaMagnifyingGlass />
          </div>
          
          </div>
          
          </div>
          <div className="w-1/4 flex justify-end relative">
          <div className="">
            <div className="flex gap-x-5">
                <div ref={cartUserRef} className="">
                <FaUserCheck/>
                </div>
                {cartUserShow &&
                 <div className=" bg-white w-[200px] absolute z-30 top-[20px] right-[40px]">
                <ul>
                  <li className='h-[50px] font-sans font-normal text-[16px] hover:bg-[#2b2b2b] hover:text-[white] duration-500 ease-in-out text-center leading-[50px]'>My Account</li>
                  <li className='h-[50px] font-sans font-normal text-[16px] hover:bg-[#2b2b2b] hover:text-[white] duration-500 ease-in-out text-center leading-[50px]'>Log Out</li>
                </ul>
                 </div>
}
                <div ref={cartCountRef} className="mr-5 lg:mr-3 relative">
                  {cartInfo.length > 0 ?<div className="absolute left-[10px] top-[-15px] w-[15px] h-[15px] rounded-full font-bold bg-[black] text-[10px] text-[white] pl-1">
                {cartInfo.length}
               </div>
                  : ""}
               
                <FaShoppingCart />
                </div>
                {cartCountShow &&
                <div className="w-[360px] absolute z-30 top-[35px] right-0">
              
                  <div className="flex  justify-around items-center bg-[#f5f5f3] p-4">
                  <div className="w-[80px] ">
                    <img className="w-full" src={cart} alt="" />
                  </div>
                  <div className="">
                    <h4 className=' ml-3 font-normal font-sans text-[16px] text-[#262626]'>glass</h4>
                    <p className='ml-3 font-normal font-sans text-[16px] text-[#262626]' >$44.00</p>
                  </div>
                  <div className="">
                  <ImCross />
                  </div>
                </div>
               
                <div className="bg-white">
                  <p className='inline-block ml-3 font-normal font-sans text-[16px] text-[#2626264e] py-4  '>Subtotal:</p><span className='inline-block ml-3 font-normal font-sans text-[16px] text-[#262626] py-4 ' >$44.00 </span>
                </div>
                <div className="flex gap-5">
                  <div className="">
                    <button className='w-[148px] h-[50px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out'><Link to={"/Cart"}>View Cart</Link></button>
                    </div>
                  <div className="">
                  <button  className='w-[148px] h-[50px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out'><Link to={"/Checkout"}>Checkout</Link> </button>  























                  
                  </div>
                </div>
                </div>
                }
               
            </div>
          </div>
          </div>
        </Flex>
    </Container>
    </nav>
  
  )
}

export default Navbar