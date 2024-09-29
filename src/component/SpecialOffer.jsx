import React from 'react'
import Container from './layer/Container'
import Tittle from './layer/Tittle'
import Card from './layer/Card'
import sop1 from '/public/asset/product/specialofferproduct1.jpg'
import sop2 from '/public/asset/product/specialofferproduct2.jpg'
import sop3 from '/public/asset/product/specialofferproduct3.jpg'
import sop4 from '/public/asset/product/specialofferproduct4.jpg'

const SpecialOffer = () => {
  return (
    <div>
        <Container className='md:my-32 my-5'>
            <Tittle title='Special Offers'/>
            <div className='flex justify-around lg:justify-between flex-wrap'>
                <Card className='py-2' imgsrc={sop1} offer='New'/>
                <Card className='py-2' imgsrc={sop2} offer='New'/>
                <Card className='py-2' imgsrc={sop3} offer='New'/>
                <Card className='py-2' imgsrc={sop4} offer='New'/>
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffer