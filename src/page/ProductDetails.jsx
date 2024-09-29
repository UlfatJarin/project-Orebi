import React, { useState } from 'react'
import Container from '../component/layer/Container'
import Brebcumb from '../component/Brebcumb'
import Image from '../component/layer/Image'
import Tittle from '../component/layer/Tittle'
import Input from '../component/layer/Input'
import Button from '../component/layer/Button'
import { FaPlus, FaStar } from 'react-icons/fa'
import { TbBackground } from 'react-icons/tb'
import { TiArrowSortedDown } from 'react-icons/ti'


const ProductDetails = () => {


  let color = ["979797", "FF8686", "7ED321", "B6B6B6", "15CBA5"]

  let [show, setshow] = useState(false)
  let [size, setsize] = useState('S')
  let [customer, setcustomer] = useState('true')
  let [QUANTITY, setQUANTITY] = useState('1')

  let managesize = (e) => {
    setsize(e.target.innerText);
  }

  return (
    <div>
      <Container className='py-32'>
        <Brebcumb />
        <div className='grid grid-cols-2 grid-rows-2 gap-10 '>
          <Image className='h-[780px] w-[780px] bg-slate-500' to='' src='' alt='img' />
          <Image className='h-[780px] w-[780px] bg-slate-500' to='' src='' alt='img' />
          <Image className='h-[780px] w-[780px] bg-slate-500' to='' src='' alt='img' />
          <Image className='h-[780px] w-[780px] bg-slate-500' to='' src='' alt='img' />
        </div>

        <div className='main mt-12 w-[781px]'>
          <Tittle title='Product' className='md:mb-4' />
          <ul className='flex flex-col gap-8'>
            <li className='flex gap-6 items-center'>
              <div className="review flex gap-0.5 text-[#FFD881] text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h5>1 Review</h5>

            </li>
            <li className='flex gap-6 pb-5 border-b border-[#F0F0F0]'>
              <h4><del className='text-[#767676] text-xl' > $88.00 </del></h4>
              <h4 className='text-xl'><b>$44.00</b></h4>
            </li>
            <li className='flex gap-6 items-center'>
              <h5 className='font-DM font-bold text-textcolor'>COLOR:</h5>
              <div className='flex  gap-4 '>
                {
                  color.map((color, item) => (
                    <div style={{ backgroundColor: `#${color}` }} key={item} className='h-5 w-5 rounded-full '></div>

                  ))
                }
              </div>
            </li>
            <li className='flex gap-6 items-center'>
              <h5 className='font-DM font-bold text-textcolor'>SIZE:</h5>
              <div onClick={() => setshow(!show)} className='w-[140px] px-4  border border-[#F0F0F0] flex justify-between items-center relative '>
                <p className='font-DM leading-8'>{size}</p>
                <TiArrowSortedDown />
                <ul onClick={managesize} className={`absolute top-full left-0 transition-all duration-300 ${show ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible"}`}>
                  <li className='w-[140px] px-4 border border-[#F0F0F0] font-DM leading-8 bg-slate-200' >S</li>
                  <li className='w-[140px] px-4 border border-[#F0F0F0] font-DM leading-8 bg-slate-200' >M</li>
                  <li className='w-[140px] px-4 border border-[#F0F0F0] font-DM leading-8 bg-slate-200' >L</li>
                  <li className='w-[140px] px-4 border border-[#F0F0F0] font-DM leading-8 bg-slate-200' >XL</li>
                  <li className='w-[140px] px-4 border border-[#F0F0F0] font-DM leading-8 bg-slate-200' >XXL</li>
                </ul>
              </div>
            </li>
            <li className='flex gap-6 items-center  pb-8 border-b border-[#F0F0F0]'>
              <h5 className='font-DM font-bold text-textcolor '>QUANTITY:</h5>
              <div className='w-[140px] grid grid-cols-3 gap-1  leading-8  border border-[#F0F0F0] text-center' >
                <p onClick={() => { setQUANTITY(QUANTITY <= 1 ? QUANTITY : QUANTITY--) }} className=' font-DM  cursor-pointer'>-</p>
                <p className='font-DM cursor-pointer '>{QUANTITY}</p>
                <p onClick={() => { setQUANTITY(QUANTITY++) }} className=' font-DM cursor-pointer '>+</p>
              </div>
            </li>
            <li className='flex gap-6 items-center  pb-8 border-b border-[#F0F0F0]'>
              <h5 className='font-DM font-bold text-textcolor'>STATUS:</h5>
              <p className='font-DM leading-8'>In stock</p>
            </li>
            <li className='flex gap-6 items-center  pb-8 border-b border-[#F0F0F0]'>
              <Button className='w-[200px]' btntext='Add to Wish List' />
              <Button className='w-[200px]' btntext='Add to Cart' />
            </li>
            <li className='flex justify-between items-center pb-8 border-b border-[#F0F0F0]' >
              <h5 className='font-DM font-bold text-textcolor'>FEATURES  & DETAILS</h5>
              <FaPlus />
            </li>
            <li className='flex justify-between items-center  pb-8 border-b border-[#F0F0F0]' >
              <h5 className='font-DM font-bold text-textcolor'>SHIPPING & RETURNS</h5>
              <FaPlus />
            </li>
            <li className='flex justify-between items-center  ' >
              <p className='text-textcolor2 font-DM leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
          </ul>

          
        </div>
        <div className='mt-[123px]'>
            <Button onClick={() => setcustomer(true)} className='mr-4 mb-5' btntext='Description' />
            <Button onClick={() => setcustomer(false)} btntext='Reviews (1)' />
            {
              customer ?
                <div className=''>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

                :
                <div className=' flex flex-col gap-4 '>
                  <p className='py-4 border-b border-[#F0F0F0]'>1 review for Product</p>
                  <div className='flex items-center gap-6'>
                    <p>John Ford</p>
                    <div className="review flex gap-0.5 text-[#FFD881] text-xs">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <p className='py-4 border-b border-[#F0F0F0]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                  <div className='flex flex-col gap-4'>
                    <p className='font-DM font-bold text-xl text-textcolor '>Add a Review</p>
                    <Input id='name' placeholder='Your name here' LabelText='Name'/>
                    <Input id='email' placeholder='Your email here' LabelText='Email'/>
                    <Input className=' py-5 ' id='review' placeholder='Your review here' LabelText='Review'/>
                  </div>
                                      
                </div>
                

            }



          </div>
      </Container>
    </div>
  )
}

export default ProductDetails