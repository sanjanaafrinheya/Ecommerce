import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
  <>
  <Container>
    <h2 className='text-[#262626] font-bold font-sans text-[49px]'>Contacts</h2>
    <h3 className='text-[#262626] font-sans text-[16px] font-normal pt-4'><Link to={"/"}>Home</Link> &#62;<Link to={"/Contacts"}>Contacts</Link> </h3>
    <div className="">
      <h3 className='text-[#262626] font-bold font-sans text-[39px] mt-40' >Fill up a Form</h3>
    </div>
    <div className="pb-6">
                    <label className="text-[#262626] font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="border-b-2 lg:w-[900px] text-[#262626] block"
                        type="text"
                        placeholder="Your name here"
                        id="name"
                    />
                </div>
                <div className="pb-6">
                    <label className="text-[#262626] font-bold" htmlFor="email">
                     Email
                    </label>
                    <input
                        className="border-b-2 lg:w-[900px] text-[#262626] block"
                        type="text"
                        placeholder="Your email here"
                        id="email"
                    />
                </div>
                <div className="pb-6">
                    <label className="text-[#262626] font-bold" htmlFor="massage">
                        Massage
                    </label>
                    <input
                        className="border-b-2 lg:w-[900px] text-[#262626] block"
                        type="text"
                        placeholder="Your massage here"
                        id="massage"
                    />
                </div>  
                <div className="pb-40">
                    <button className="w-[200px] h-[40px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out">
                        Post
                    </button>
                </div>  


                <div  className='pb-32' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22133.501471247935!2d90.44038366902709!3d23.79489181657152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1725010236200!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>     
  </Container>
  </>
  )
}

export default Contact