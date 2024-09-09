import React from 'react'
import Container from './Container'
import Flex from './Flex'
import adverone from "../assets/adverone.png"
import adver2 from "../assets/adver2.png"
import adver3 from "../assets/adver3.png"
const Sales = () => {
  return (
   <div className="pb-10">
    <Container>
        <Flex>
            <div className="lg:flex  lg:justify-between ">
                <div className="lg:w-[48%] w-full  pb-3 lg:pb-0">
                    <img src={adverone} alt="" />
                </div>
                <div className="lg:w-[48%] w-full">
                <div className="pb-4 ">
                    <img src={adver2} alt="" />
                   
                </div>
                <div className="">
                <img src={adver3} alt="" />
                </div>
            </div>
                </div>
                
        </Flex>
    </Container>
   </div>
  )
}

export default Sales