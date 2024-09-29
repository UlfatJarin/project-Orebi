import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import ad1 from '/asset/Ad_1.jpg';
import ad2 from '/asset/Ad_2.jpg';
import ad3 from '/asset/Ad_3.jpg';


const Add1 = () => {
  return (
    <div>
        <Container>
            <div className=' grid grid-cols-2 grid-rows-2 md:gap-10 gap-2 md:mt-[174px] mt-4'>
                <div className='col-span-1 row-span-2 '>
                   <Image className='w-full  container' to='/' src={ad1} alt='this is ad01' />
                </div>
                <div className='col-span-1 row-span-1 '>
                   <Image className='w-full  container' to='/' src={ad2} alt='this is ad02' />
                </div>
                <div className='col-span-1 row-span-1 '>
                   <Image className='w-full  container' to='/' src={ad3} alt='this is ad03' />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Add1