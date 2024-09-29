import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({to , liitem ,className ,megamenu ,children}) => {
  return (
  <li className='group'>
    <Link className={`font-DM font-normal text-textcolor2 text-sm  hover:text-black ${className}`} to={to}>
    {liitem}
    </Link>
    <div className={`absolute top-0 left-full h-full py-7 px-10 flex gap-10 transition-all duration-300 items-center text-[#767676] group-hover:opacity-100  opacity-0 invisible group-hover:visible bg-white ${megamenu}`}>
        {children} 
    </div>
    
  </li>
  )
}

export default Li