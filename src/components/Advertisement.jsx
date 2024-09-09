import React from 'react'
import clock from "../assets/clock.png"
import Container from './Container'
const Advertisement = () => {
  return (
    <Container>
   <div className="py-20">
        <img src={clock} alt="" />
    </div>
    </Container>
 
  )
}

export default Advertisement