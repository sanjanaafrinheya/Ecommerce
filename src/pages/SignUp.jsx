import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
  <Container>
  <h2 className='text-[#262626] font-bold font-sans text-[49px]'>Sign up</h2>
  <h3 className='text-[#262626] font-sans text-[16px] font-normal pt-4'><Link to={"/"}>Home</Link> &#62;<Link to={"/SignUp"}>Sign up</Link> </h3>
  </Container>

    </>
  )
}

export default SignUp