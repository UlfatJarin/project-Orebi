import React from 'react'
import Container from './layer/Container'
import { PiNumberTwoBold } from 'react-icons/pi'
import { FaTruck } from 'react-icons/fa'
import { IoMdRefresh } from 'react-icons/io'

const ReturnPolicy = () => {
  return (
    <div>
        <Container className="flex justify-between md:py-7 py-4 mt-[-14px]">
            <div className='flex md:gap-4 gap-2  items-center'>
                <PiNumberTwoBold  className='text-[10px] md:text-lg'/>
                <p className='font-DM text-[8px] md:text-base'>Two years warranty</p>
            </div>
            <div className='flex md:gap-4 gap-2  items-center'>
                <FaTruck className='text-[10px] md:text-lg'/>
                <p className='font-DM text-[8px] md:text-base'>Free shipping</p>
            </div>
            <div className='flex md:gap-4 gap-2  items-center'>
                <IoMdRefresh  className='text-[10px] md:text-lg'/>
                <p className='font-DM text-[8px] md:text-base'>Return policy in 30 days</p>
            </div>
        </Container>
    </div>
  )
}

export default ReturnPolicy