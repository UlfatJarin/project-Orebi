import React from 'react'
import Tittle from './layer/Tittle'
import Container from './layer/Container'
import product1 from '/public/asset/product/product01.jpg'
import product2 from '/public/asset/product/product02.jpg'
import product3 from '/public/asset/product/product03.jpg'
import product4 from '/public/asset/product/product04.jpg'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './layer/Card'


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
          <Card className='py-2' imgsrc={product1} offer='10%' />
          <Card className='py-2' imgsrc={product2} offer='New' />
          <Card className='py-0' imgsrc={product3} />
          <Card className='py-2' imgsrc={product4} offer='New' />
          <Card className='py-2' imgsrc={product1} offer='10%' />
          <Card className='py-2' imgsrc={product2} offer='New' />
          <Card className='py-0' imgsrc={product3} />
          <Card className='py-2' imgsrc={product4} offer='New' />
        </Slider>
      </Container>
    </div>
  )
}

export default NewArivals