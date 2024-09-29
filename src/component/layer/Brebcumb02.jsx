
import React from 'react'
import Container from './Container'

const Brebcumb02 = () => {
    return (
        <div className='md:mb-[130px] mb-12'>
            <Container>
                <h2 className='font-DM font-bold text-[49px] text-textcolor capitalize' > {` ${window.location.pathname.split("/")[1]}  ${window.location.pathname.split("/")[2]}`}</h2>
                <p className='font-DM text-xs text-[#767676] capitalize'> {`home - ${window.location.pathname.split("/")[1]}  ${window.location.pathname.split("/")[2]}`}</p>
            </Container>
        </div>
    )
}

export default Brebcumb02