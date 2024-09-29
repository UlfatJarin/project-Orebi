import React, { useEffect, useState } from 'react'
import Tittle from './layer/Tittle'
import Container from './layer/Container'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './layer/Card'
import axios from 'axios'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute z-50  top-1/2  -translate-y-full right-[1%] md:p-7 p-3 rounded-full text-white  bg-[#979797] '
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >< FaArrowRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='absolute z-50  top-1/2   -translate-y-full left-[1%]  md:p-7 p-3 rounded-full text-white  bg-[#979797]'
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ><FaArrowLeft /></div>
  );
}

const NewArivals = () => {

  let[allproduct , setAllproduct] = useState([])

  useEffect(() => {
    const getData = async () => {
      let responsce  = await axios.get('https://dummyjson.com/products')
      setAllproduct(responsce.data.products);
    }
    getData()

  },[])


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      <Container className='md:mt-32 mt-5'>
        <Tittle  title='New Arrivals' />


      </Container>
      <Container className='max-w-[1640px]' >
        <Slider {...settings}>
          {
            allproduct.map((item,index)=>(
              <Card key={index} src={item.thumbnail} ProductName={item.title} ProductPrice={item.price} Band={item.brand} className='py-2' offer='10%' />

            ))
          }
          
        </Slider>
      </Container>
    </div>
  )
}

export default NewArivals