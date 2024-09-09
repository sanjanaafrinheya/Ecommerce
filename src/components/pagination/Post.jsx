import React, { useContext, useState } from 'react'

import ProductRusable from '../ProductRusable';
import { Link } from 'react-router-dom';
const Post = ({allPage,cateFilter,activeMulti}) => {

let [pshow, setPshow] = useState(false)

let handlePshow =()=>{
  setPshow(!pshow)
}

  return (

   <>
{cateFilter.length > 0 ?
<>
  <div className={`grid grid-cols-3  ${pshow}`}> 
 {cateFilter.map((items)=>(
     <div className="">
     <Link to ={`/Shop/${items.id}`}>
  <ProductRusable key={items.id} discount={items.discountPercentage} thumbnail={items.thumbnail} title={items.title} price={items.price}/>
  </Link>
   </div>
 ))}
 

</div>

<h2 className='font-sans text-[16px] font-normal'>Show All</h2>
<h2 className='font-sans text-[16px] font-normal'>Hide</h2>
                          </>
:
<div className={`${ activeMulti == "active" ? "" : "lg:grid lg:grid-cols-3"}`}>
 {allPage.map((items)=>(
     <div className="">
  <ProductRusable key={items.id} discount={items.discountPercentage} thumbnail={items.thumbnail} title={items.title} price={items.price}/>
  
  
   </div>
 ))}
 

</div>
}

   </>
  )
}

export default Post
