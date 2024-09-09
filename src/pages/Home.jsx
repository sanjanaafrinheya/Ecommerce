import React from 'react'
import Banner from "../components/Banner"
import Sales from "../components/Sales"
import NewArrival from "../components/NewArrival"
import BestSellers from '../components/BestSellers'
import Advertisement from '../components/Advertisement'
import SpecialOffers from '../components/SpecialOffers'
const Home = () => {
  return (
<>
< Banner/>
<Sales />
<NewArrival />
<BestSellers/>
<Advertisement/>
<SpecialOffers/>
</>
  )
}

export default Home