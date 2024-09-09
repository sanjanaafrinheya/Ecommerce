import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let ApiData = createContext()
const ContextApi = ({children}) => {
    let [info, setInfo] = useState([])
    let getdata =()=>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            setInfo(response.data.products)
        })
    }
    useEffect(()=>{
getdata()
    },[])
  return (
    <>

<ApiData.Provider value={info}>
{children}
</ApiData.Provider>
    </>
  
  )
}

export {ContextApi, ApiData}