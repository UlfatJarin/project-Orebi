import React from 'react'

const P = ({className,p}) => {
  return (
    <p className={`font-DM text-textcolor md:text-base text-xs ${className}`}>
        {p}
    </p>
  )
}

export default P