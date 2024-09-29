import React from 'react'

const CheckBox = ({type ,className ,name}) => {
  return (
    <div>
         <input className={`relative appearance-none border border-[#767676] w-[12px] h-[12px]  checked:after:content[""] checked:after:absolute after:h-[7px] after:w-[7px] checked:after:bg-[#767676] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 ${className}`} name={name} type={type} />
    </div>
  )
}

export default CheckBox