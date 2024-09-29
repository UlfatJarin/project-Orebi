import React from 'react'
import Container from './layer/Container'
import Card from './layer/Card'
import product5 from '../../public/asset/product/product05.jpg'
import product6 from '../../public/asset/product/product06.jpg'
import product7 from '../../public/asset/product/product07.jpg'
import product8 from '../../public/asset/product/product08.jpg'

const BestProuct = () => {
  return (
    <div className='md:mt-[216px] mt-5'>
        <Container className='flex justify-around lg:justify-between flex-wrap '>
            <Card className='py-2' imgsrc={product5} offer='New'/>
            <Card className='py-2' imgsrc={product6} offer='New'/>
            <Card className='py-2' imgsrc={product7} offer='New'/>
            <Card className='py-2' imgsrc={product8} offer='New'/>
        </Container>
    </div>
  )
}

export default BestProuct