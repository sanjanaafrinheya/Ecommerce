import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
<Container>
<h2 className='text-[49px] text-[#262626] font-bold'>Login</h2>
<h3 className='text-[#262626] font-sans text-[16px] font-normal pt-4 '><Link to={"/"}>Home</Link> &#62; <Link to={"/Login"}>Login</Link> </h3>
<div className="w-[70%] text-[#767676] pt-32 pb-10 border-b-2 border-[
#F0F0F0]">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
</div>
<div className="text-[#262626] text-[38px] font-sans font-bold mt-20">Returning Customers</div>
<div className="flex gap-x-36 py-4 border-b-2">
    <div className="">
        <h3>E-mail Address</h3>
        <p>company@domain.com</p>
    </div>
    <div className="">
       <h3> Password</h3>
       <p>********</p>
    </div>
</div>
<div className="border-b-2 pb-10">
<button className="w-[200px] h-[40px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out my-8 ">
Log in</button>
</div>
<div className="">
    <h2 className="text-[#262626] text-[38px] font-sans font-bold mt-20" >New Customer</h2>
    <p className='text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    <div className="pb-10">
    <button className="w-[200px] h-[40px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out my-8  ">
    Continue</button>
    </div>
   
</div>
</Container>

    </>
  )
}

export default Login