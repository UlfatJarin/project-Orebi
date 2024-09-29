import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({to ,src ,alt,className }) => {
  return (
    <Link to={to}>
        <picture>
            <img className={` object-cover ${className}`} src={src} alt={alt} />
        </picture>
    </Link>
  )
}

export default Image