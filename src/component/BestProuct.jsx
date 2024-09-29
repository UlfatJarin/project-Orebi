import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Card from './layer/Card'
import axios from 'axios'

const BestProuct = () => {

  let [bestselling, setBestselling] = useState([])

  useEffect(()=>{
    const getData =async()=>{
      try{
        let responsce = await axios.get('https://dummyjson.com/products')
        setBestselling(responsce.data.products);
        
      }catch(error){
        console.error("something is worng", error);
        
      }
    }
    getData()
  })

  return (
    <div className='md:mt-[216px] mt-5'>
        <Container className='flex justify-around lg:justify-between flex-wrap '>
          
          {
            bestselling?
            bestselling.filter((_, limitedProduct)=> limitedProduct >= 4 && limitedProduct <8).map((item,index)=>(
              
              <Card key={index} src={item.thumbnail} ProductName={item.title} ProductPrice={item.price} Band={item.brand} className='py-2' offer='New' />
            
            )):<p>Stock Out</p>
          }
          
           
        </Container>
    </div>
  )
}

export default BestProuct