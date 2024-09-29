import React from 'react'
import Container from './Container'
import P from './P'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Credit = () => {
  return (
    
        <Container className='md:flex justify-between items-center md:my-14 my-3 '>
            <div className="icon flex gap-x-6 justify-center items-center md:justify-start">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            </div>
            <p className='text-sm mt-3 md:mt-0 text-textcolor2 text-center font-DM  '>
            2020 Orebi Minimal eCommerce Figma Template by <Link to='/'>Adveits</Link> 
            </p>
          
        </Container>
    
  )
}

export default Credit