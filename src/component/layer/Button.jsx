import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className,btntext, to, onClick}) => {
  return (
    <button onClick={onClick} className={` md:py-4 py-3 md:px-10 px-8 border-[1px] border-[#2B2B2B] bg-white hover:bg-[#2B2B2B] text-[#2B2B2B] hover:text-white font-DM font-bold md:text-sm text-[8px]  ${className}`}>
        <Link  to={to}>
        {btntext}
        </Link>
        
    </button>
  )
}

export default Button