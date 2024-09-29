import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import ad4 from '../../public/asset/ad_4.jpg'

const Add2 = () => {
  return (
    <div>
        <Container className='md:mt-32 mt-5'>
            <Image to='/' src={ad4} alt=' ad4'/>
        </Container>
    </div>
  )
}

export default Add2