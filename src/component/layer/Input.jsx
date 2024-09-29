import React, { Children } from 'react'

const Input = ({className,id, LabelText, type, placeholder, onChange, valuei, children}) => {
  return (
    <div className={`w-[507px] pb-2 border-b border-[#F0F0F0] flex flex-col relative ${className}`}>
        <label className='font-DM font-bold leading-6 py-1 text-textcolor' htmlFor={id}>{LabelText}</label>
        <input onChange={onChange} value={valuei} className='font-DM text-sm text-textcolor2 py-2 outline-none capitalize' id={id} type={type} placeholder={placeholder}   />
        {children}
    </div>
  )
}

export default Input