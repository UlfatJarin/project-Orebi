import React from 'react'

const Tittle = ({title ,className}) => {
  return (
    <h2  className={`md:mb-12 mb-3 font-DM font-bold md:text-[39px] text-[25px] text-[#262626] ${className}`}> {title } </h2>
  )
}

export default Tittle