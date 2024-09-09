import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import glass from "../assets/glass.png"
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, removeProduct } from '../components/slice/ProductSlice';


const Cart = () => {
  const  dispatch = useDispatch()
  const cartInfo = useSelector((state)=>state.product.cartItem)

  console.log(cartInfo);
  
  

  const {totalPrice, totalQuntity}= cartInfo.reduce(( accumulated, item)=>{
   accumulated.totalPrice += item.price * item.qun ;
   accumulated.totalQuntity += item.qun



return accumulated


  }, {totalPrice:0, totalQuntity:0})
  return (
<Container>
<h2 className='text-[#262626] font-sans text-[49px] font-bold pt-10'>Cart</h2>
<h3 className='text-[#262626] font-sans text-[16px] font-normal pt-4'><Link to={"/"}>Home</Link>  &gt; <Link to={"/Cart"}>Cart</Link> </h3>
<div className=" lg:w-full flex items-center justify-between bg-[#F5F5F3] h-[50px] ">
<div className=" w-[25%] lg:pl-8 pl-2">Product</div>
<div className=" w-[25%] ">Price</div>
<div className=" w-[25%]">Quantity</div>
<div className=" w-[25%]">Total</div>
</div>
{cartInfo.length > 0 ? (
        cartInfo.map((item, i) => (
          <div key={i} className="w-full flex items-center border-l-2 border-r-2 border-[#F0F0F0]">
            <div className="w-[25%] lg:flex items-center gap-x-4">
              <button onClick={() => dispatch(removeProduct(i))}>
                <RxCross2 />
              </button>
              <img className='pb-2 pt-2 w-[80px] pl-2 lg:pl-0' src={item.thumbnail} alt="product" />
              <h3 className='text-[#262626] font-sans font-bold text-[20px]'>{item.title}</h3>
            </div>
            <div className="w-[25%]">
              <h3 className='text-[#262626] font-sans font-bold lg:text-[20px] text-[16px]'>${item.price}</h3>
            </div>
            <div className="w-[25%]">
              <div className="flex justify-between lg:w-[30%] w-[70%] border-2">
                <button onClick={() => dispatch(productDecrement(i))} className='text-[#262626] font-bold'>
                  <FiMinus />
                </button>
                <p className='text-[#262626] font-bold'>{item.qun}</p>
                <button onClick={() => dispatch(productIncrement(i))} className='text-[#262626] font-bold'>
                  <GoPlus />
                </button>
              </div>
            </div>
            <div className="w-[25%] text-[#262626] font-sans font-bold lg:text-[20px] text-[16px]">
              <h3>${(item.price * item.qun).toFixed(2)}</h3>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full py-10">
          <h3 className='text-center text-[#262626] font-sans text-[20px] font-bold'>No products to show</h3>
        </div>
      )}


<div className="flex border-2 py-4 pl-6 items-center justify-between">
<div className="lg:flex items-center  gap-x-4">
<div className=" ">
<select className='w-[150px] h-[30px] text-center border-2 border-[#F0F0F0]'>
<label className='pr-2 text-[#F0F0F0]'>Size :</label>
    <option value="1">Small</option>
    <option value="2">Medium</option>
    <option value="3">Large</option>
</select>
</div>
<div className="font-bold text-[16px] font-sans pt-2 lg:pt-0"><h3>Apply Coupon</h3></div>
</div>
<div className="">
  <h3 className='font-sans font-bold text-[16px] pr-4'>Update Cart</h3>
</div>
</div>
<div className="">
 
  <h3 className='font-bold font-sans text-[20px] text-right'>Cart Totals</h3>
<div className="">
<div className="flex justify-end">
  <div className="border-2 border-[#F0F0F0] w-[300px] h-[50px]  "><h3>Quantity</h3></div>
  <div className="border-2 border-[#F0F0F0] w-[300px] h-[50px] ">{totalQuntity}</div>
</div>
<div className="flex justify-end">
  <div className="border-2 border-[#F0F0F0] w-[300px] h-[50px] "><h3>Total</h3></div>
  <div className="border-2 border-[#F0F0F0] w-[300px] h-[50px] ">${totalPrice.toFixed(2)}</div>
</div>
<div className="flex justify-end">
<button className="w-[200px] h-[50px] border-2 border-[#F0F0F0] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out mb-6 ">
                            Proceed to checkout
                        </button>
</div>
</div>


</div>
</Container>
  )
}

export default Cart