import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Tittle from './layer/Tittle'
import Card from './layer/Card'
import axios from 'axios'

const SpecialOffer = () => {

  let [SpecialOffer ,setSpecialOffer] =useState([])

  useEffect(()=>{
    let getData= async ()=>{
      try{
        let responsce =await axios.get('https://dummyjson.com/products')
        setSpecialOffer(responsce.data.products);

      }catch(error){
        console.error("Something is worng" , error)
      }
    }
    getData()
  })

  return (
    <div>
        <Container className='md:my-32 my-5'>
            <Tittle title='Special Offers'/>
            <div className='flex justify-around lg:justify-between flex-wrap'>
              {
                SpecialOffer?
                SpecialOffer.filter((_,Soffer)=> Soffer>=8 && Soffer<12 ).map((item,index)=>(
                 
                  <Card key={index} src={item.thumbnail} ProductName={item.title} ProductPrice={item.price} Band={item.brand} className='py-2' offer='New' />

                )):<p></p>
              }
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffer