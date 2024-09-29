import React from 'react'
import Container from './layer/Container'

const Brebcumb = () => {
  return (
    <div className='md:mb-[130px] mb-12'>
        <Container>
            <h2 className='font-DM font-bold text-[49px] text-textcolor capitalize' > {` ${window.location.pathname.split("/")[1]}`}</h2>
            <p className='font-DM text-xs text-[#767676] capitalize'> {`home - ${window.location.pathname.split("/")[1]}`}</p>
        </Container>
    </div>
  )
}

export default Brebcumb