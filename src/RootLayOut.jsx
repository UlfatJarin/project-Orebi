import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

const RootLayOut = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
       <Header/>
         <Outlet/>
       <Footer/>
    </div>
  )
}

export default RootLayOut