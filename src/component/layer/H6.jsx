import React from 'react'

const H6 = ({className, h6}) => {
  return (
    <h6 className={`font-DM font-bold text-textcolor md:text-base text-xs leading-[23px] ${className}`}>{h6}</h6>
  )
}

export default H6