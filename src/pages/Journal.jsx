import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Journal = () => {
  return (
<>
<Container>
<h2 className='text-[49px] text-[#262626] font-bold'>My Account</h2>
<h3 className='text-[#262626] font-sans text-[16px] font-normal pt-4'><Link to={"/"}>Home</Link> &#62; <Link to={"/Journal"}>Journal</Link> </h3>
<div className=" flex w-full my-36 ">
<div className="w-[20%]">
  <ul>
    <li className='text-[#767676] hover:text-[#262626] text-[16px] font-semibold duration-500 ease-in-out border-b-2 border-[#F0F0F0] py-4'> Dashboard</li>
    <li className='text-[#767676] hover:text-[#262626] text-[16px] font-semibold duration-500 ease-in-out border-b-2 border-[#F0F0F0] py-4'>Others</li>
    <li className='text-[#767676] hover:text-[#262626] text-[16px] font-semibold duration-500 ease-in-out border-b-2 border-[#F0F0F0] py-4'> Download</li>
    <li className='text-[#767676] hover:text-[#262626] text-[16px] font-semibold duration-500 ease-in-out border-b-2 border-[#F0F0F0] py-4'>Addresses</li>
    <li className='text-[#767676] hover:text-[#262626] text-[16px] font-semibold duration-500 ease-in-out border-b-2  border-[#F0F0F0] py-4'>Account Details</li>
    <li className='text-[#767676] hover:text-[#262626] text-[16px] font-semibold duration-500 ease-in-out border-b-2 border-[#F0F0F0] py-4'>Logout</li>
  </ul>
</div>
<div className="w-[70%] ml-8 py-4 ">

<h3 className='text-[#767676] font-semibold'>Hello <span className='font-bold text-[#262626]'>admin</span> (Not <span className='font-bold text-[#262626]'>admin</span>? <span className='font-bold text-[#262626]'>Logout</span> )</h3>
 <h3 className='py-10  text-[#767676]'>
From your account dashboard you can view your <b className='text-[#262626] '>recent orders</b>, manage your      <b className='text-[#262626]' >shipping and billing addresses</b>, and <b className='text-[#262626] '>edit your password and account details</b>.</h3>
</div>
</div>
</Container>
</>
  )
}

export default Journal