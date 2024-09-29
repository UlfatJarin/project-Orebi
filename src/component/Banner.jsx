import React, { useState } from 'react'
import Slider from 'react-slick';
import Image from './layer/Image';
import banner01 from '/asset/banner/banner01.jpg';
import banner02 from '/asset/banner/banner02.jpg';
import banner03 from '/asset/banner/banner03.jpg';
import { BsTranslate } from 'react-icons/bs';

const Banner = () => {


  let[active , setActive]= useState(0)


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,   
    autoplay: true, 
    autoplaySpeed: 3000,

    appendDots: dots => (
      <div
        style={{
          position:"absolute",
          top:"50%",
          left:"12%",
          transform:"translateY(-50%)",
          zIndex:"0"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
      className={`font-DM text-[10px] flex items-center border-r-2 ${i==active?"text-textcolor border-textcolor ":"text-transparent border-white"}`}
        style={{
          width: "22px",
          height:"30px"
        }}
      >
        0{i + 1}
      </div>
    ),
    beforeChange:(item, index)=>{
      setActive(index)
    },

    responsive: [
      {
        breakpoint: 480,
        settings: {
         
    appendDots: dots => (
      <div
        style={{
          position:"absolute",
          bottom:"0%",
          left:"50%",
          transform:"translateX(-50%)",
          zIndex:"111"
        }}
      >
        <ul className='flex  justify-center gap-2' style={{ margin: "-20px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
      className={`font-DM text-[8px] text-center border-b-2  ${i==active?"text-textcolor border-textcolor ":"text-transparent border-white"}`}
        style={{
          width: "8px",
          height:"12px"
        }}
      >
        {i + 1}
      </div>
    ),


        }
      }
    ]

  };
 


  return (
    <Slider {...settings}>
      <div>
        <Image className='w-full' to='/' src={banner01} alt='this is banner01' />
      </div>
      <div>
        <Image className='w-full' to='/' src={banner02} alt='this is banner02' />
      </div>
      <div>
        <Image className='w-full' to='/' src={banner03} alt='this is banner03' />
      </div>

    </Slider>

  )
}

export default Banner