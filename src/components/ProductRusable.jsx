
import React, { useEffect, useState } from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/ProductSlice';
import { Link } from 'react-router-dom';


const ProductRusable = (props) => {
   

  const  dispatch = useDispatch()


const handleShopCartProduct =(item)=>{
   dispatch(addToCart ({item, qun:1}) ) 
}
  return (
    <section className=''>
    
    <div className="flex">
    <div className=" p-4">
 <div className="relative group">
  <div className="absolute top-0 left-0">
    <h4 className='font-sans text-[16px] font-bold p-2 bg-[black] text-[white]' >-{props.discount}%</h4>
  </div>
  <Link to ={`/Shop/${props.id}`}>

   <img src={props.thumbnail} alt="" />
   </Link>
   <div className="absolute bg-[#f5f5f5] bottom-[0] left-0 w-full h-[0px] overflow-hidden px-4 group-hover:h-[120px] duration-500 ease-in-out">
   <div className="">
     <ul className='flex justify-end items-center gap-x-2 '>
       <li className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold  pt-2'>Add to Wish List</li>
       <li><IoHeartSharp /></li>
     </ul>
   </div>
   <div className="">
     <ul className='flex justify-end items-center gap-x-2 lg:py-2'>
       <li className='font-sans text-[16px] font-normal text-[#767676] hover:text-[#262626] hover:font-bold '>Compare</li>
       <li><TfiReload /></li>
     </ul>
   </div>
   <div className="">
     <ul className='flex justify-end items-center gap-x-2'>
       <li onClick={()=>handleShopCartProduct(item)} className='font-sans text-[16px] font-normal hover:font-bold text-[#767676] hover:text-[#262626] cursor-pointer'>Add to Cart</li>
       <li><FaShoppingCart /></li>
     </ul>
   </div>
   </div>
   </div>
   <div className="flex justify-between px-2">
     <h4 className='font-sans text-[16px] font-bold py-3'>{props.title}</h4>
     <p className='font-sans text-[16px] font-normal text-[#767676] py-3 '>${props.price}</p>
     
   </div>
 
</div>
    </div>
   
    </section>
  )
}

export default ProductRusable
