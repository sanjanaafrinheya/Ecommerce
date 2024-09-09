import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FaListUl } from "react-icons/fa6";
import { MdOutlineWindow } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Post from '../components/pagination/Post';
import { ApiData } from '../components/ContextApi';
import Pagination from '../components/pagination/Pagination';
const Shop = () => {
    let data = useContext(ApiData)
    let [Cshow, setCshow] = useState(false)
    let [bShow, setBshow] = useState([])
    let [category, setCategory] = useState([])
    let [brand, setBrand] = useState([])
    let [cateFilter, SetcateFilter] = useState([])
    let [activeMulti, setActiveMulti]= useState("")
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage]= useState(6)
    let lastPage = currentPage* perPage
    let firstPage = lastPage-perPage
    let allPage = data.slice(firstPage, lastPage)
    
    let pageNumber = []
    for( let i = 0; i < data.length / perPage; i++){
pageNumber.push(i)
    }
    let paginate = (pageNumber) =>{
        setCurrentPage(pageNumber +1);
        
    }
    let next =()=>{
      if(currentPage < pageNumber.length){
        setCurrentPage  ((state)=> state + 1)
      }
    }
    let prev =()=>{
      if(currentPage < firstPage){
        setCurrentPage  ((state)=> state - 1)
      }
        
    }
    let handleShowShop = (e) =>{
        setPerPage(e.target.value)

    }
    let handleShow = () => {
        setCshow(!Cshow)
    }
    let handleShowBrand = () => {
        setBshow(!bShow)
    }
   
useEffect(()=>{
    setCategory([...new Set(data.map((item)=> item.category))])
    setBrand([...new Set(data.map((item)=> item.brand))])
},[data])


let handleCategory =(citem)=>{
   let categoryFilter = data.filter((item)=>item.category == citem)

   SetcateFilter(categoryFilter);
}

let handleAllPage =()=>{
    SetcateFilter("")
}
let handleActive =()=>{
    setActiveMulti("active");
    
}


    
    return (
        <>
            <Container>
                <h2 className='font-sans text-[49px] font-bold py-4'>Products</h2>
                <p className='font-sans text-[16px] font-normal'><Link to="/">Home </Link>  &gt; <Link to="/Shop">Products</Link></p>
                <div className="py-10 items-center">
                    <div className='lg:flex'>
                        <div className="lg:w-[20%] w-full">
                            <div className="">
                                <div onClick={handleShow} className="flex justify-between items-center">
                                    <h4 className='font-sans text-[24px] font-bold'>Shop by Category</h4>
                                    {Cshow == true ? <span className='text-[30px]'><MdKeyboardArrowUp /></span> : <span className='text-[30px]'><MdKeyboardArrowDown /></span>}

                                </div>


                                <div className="">
                                    {Cshow &&
                                        <ul className='' >
                                            <li onClick={handleAllPage} className='py-4 font-sans font-normal text-[#767676] text-[16px] flex justify-between items-center cursor-pointer'>All Products</li>
                                            {category.map((item)=>(
                                            <li onClick={()=>handleCategory(item)} className='border-b-2 border-[#F0F0F0] py-4 font-sans font-normal text-[#767676] text-[16px] flex justify-between items-center'>
                                            <div className="font-sans font-normal text-[16px] capitalize cursor-pointer">{item}</div>
                                            <div className="font-sans font-normal text-[16px] cursor-pointer">
                                                <FaPlus />
                                            </div>
                                        </li>
                                            ))}

                    
                                        </ul>
                                    }
                                </div>

                                <div className="mt-10">
                                <div onClick={ handleShowBrand} className="flex justify-between items-center">
                                    <h4 className='font-sans text-[24px] font-bold'>Shop by Brand</h4>
                                    {bShow == true ? <span className='text-[30px]'><MdKeyboardArrowUp /></span> : <span className='text-[30px]'><MdKeyboardArrowDown /></span>}

                                </div>
                                <div className="">
                                    {bShow &&
                                        <ul className='' >
                                            
                                            {brand.map((item)=>(
                                            <li onClick={()=>handleCategory(item)} className='border-b-2 border-[#F0F0F0] py-4 font-sans font-normal text-[#767676] text-[16px] flex justify-between items-center'>
                                            <div className=" font-sans font-normal text-[16px] capitalize cursor-pointer">{item}</div>
                                            <div className=" font-sans font-normal text-[16px]">
                                                <FaPlus />
                                            </div>
                                        </li>
                                            ))}

                    
                                        </ul>
                                    }
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="lg:w-[80%] w-full lg:flex  lg:justify-between">
                            <div className="">
                                <div className="flex gap-x-4">
                                    <div onClick={()=>setActiveMulti("")}className={`${activeMulti == "active" ? "" : "bg-[black] text-[white]"} "w-[30px] h-[30px] hover:bg-[black] p-2 hover:text-[white] duration-300 ease-in-out"`}>
                                        <MdOutlineWindow />
                                    </div>
                                    <div onClick={handleActive} className={`${activeMulti == "active" ? "bg-[black] text-[white]" : ""} "w-[30px] h-[30px] hover:bg-[black] p-2 hover:text-[white] duration-300 ease-in-out"`}>
                                        <FaListUl />
                                    </div>

                                </div>
                            </div>

                            <div className="  ">
                                <div className="flex justify-end gap-x-14">
                                    <div className="pb-20">
                                        <label className='pr-2' >Sort By :</label>
                                        <select className='w-[200px] h-[30px] text-center border-2 border-[#262626]'>
                                            <option value="1">Featured</option>
                                            <option value="2">Featured</option>
                                            <option value="3">Featured</option>
                                            <option value="4">Featured</option> 
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className='pr-2' >Show :</label>
                                        <select onChange={handleShowShop}  className='w-[200px] border-2 border-[#262626] h-[30px] text-center'>
                                            <option value="6">6</option>
                                            <option value="12">12</option>
                                            <option value="18">18</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <Post allPage = {allPage} cateFilter={cateFilter} activeMulti={activeMulti}  />
                                <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage}/>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Shop