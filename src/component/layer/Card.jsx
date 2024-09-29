import React from 'react'
import Image from './Image'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TbRefresh } from 'react-icons/tb'





const OverLayLi=({LiText,icon})=>{
  return(
    <li>
      <Link className='flex justify-end gap-4 items-center text-[#767676] hover:text-[#262626] hover:font-bold font-DM'>
      {LiText}{icon}
      </Link>
    </li>
  )
}

const Card = ({src ,offer ,className ,ProductName ,ProductPrice ,Band}) => {
  return (
    <div className=' flex justify-center'>
      <div className='md:w-[370px] w-[270px] group' >
        <div className='md:w-[370px] md:h-[370px] w-[270px] h-[270px] relative '>
            <Image className='w-full h-full object-cover' src={src} alt={src}/>
            <div className="overlay absolute bottom-0 left-0 w-full z-40 bg-white
             py-6 px-7 opacity-0 group-hover:opacity-100  transition-all duration-300">
                <ul className='flex flex-col gap-5'>
                  <OverLayLi LiText='Add to Wish List' icon={<FaHeart />} />
                  <OverLayLi LiText='Compare' icon={<TbRefresh />} />
                  <OverLayLi LiText=' Add to Cart' icon={<FaShoppingCart />} />  
                </ul>
             </div>
             <button className={`absolute  top-5 left-5 bg-[#262626] w-24  text-white font-DM font-bold text-sm ${className}`}>  {offer} </button>
         </div>
      <div>
      <div className='flex justify-between mt-6 mb-4 cursor-pointer '>
        <h5 className='font-DM font-bold text-xl text-textcolor '>{ProductName}</h5>
        <span className='font-DM leading-7 text-[#767676]'>${ProductPrice}</span>
       </div>
       <p className='font-DM leading-7 text-[#767676]'>{Band}</p>
      </div>
    </div>
    </div>
  )
}

export default Card