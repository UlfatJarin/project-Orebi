import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import P from './layer/P'
import { HiOutlineBars2 } from 'react-icons/hi2'
import { IoSearch } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FaCartShopping } from 'react-icons/fa6'
import Li from './layer/Li'
import H6 from './layer/H6'
import { ImCross } from 'react-icons/im'
import Button from './layer/Button'
import Card from './layer/Card'

const SearchBar = () => {

  let [catagory, setcatagory] = useState(false)
  let [Cart, setCart] = useState(false)
  let [Account, setAccount] = useState(false)
  let [Search, setSearch] = useState('')
  let [filterData, setfilterData] = useState([])
  let [product, setproduct] = useState([])

  let manageSearch = (e) => {
    setSearch(e.target.value)

  }

  useEffect(() => {
    const getData = async () => {
      const responsce = await fetch('https://dummyjson.com/products')
      const data = await responsce.json()

      setfilterData(data.products)
      setproduct(data.products)
    }
    getData()
  }, [])

  useEffect(() => {
    if (Search === "") {
      setfilterData("")
    } else {
      let searchData = product.filter((item) => item.title.toLowerCase().includes(Search.toLowerCase()))
      setfilterData(searchData);
    }

  }, [Search, product])


  return (
    <div className='bg-[#F5F5F3] md:py-6 py-1 relative'>
      <Container className=' flex justify-between items-center gap-x-2 relative'>
        <div onClick={() => setcatagory(!catagory)} className="left flex gap-x-2  items-center cursor-pointer ">
          <div >
            <HiOutlineBars2 />
          </div>
          <P className='hidden md:flex' p='Shop by Category' />
        </div>
        <div >
          <ul className={`md:w-[262px] w-[150px] border-[0.5px] border-textcolor bg-textcolor absolute top-[110%] left-0 transition-all duration-300 z-50  ${catagory ? "opacity-1 visible" : "opacity-0 hidden "}`}>
            <Li megamenu='hidden' className='  block md:py-4 py-2 md:px-5 px-2  hover:text-white md:hover:pl-7 hover:pl-3 border-b-[0.5px] border-[#2D2D2D] relative' liitem='Accesories' >
            </Li>
            <Li megamenu='hidden' className='block md:py-4 py-2 md:px-5 px-2  hover:text-white md:hover:pl-7 hover:pl-3 border-b-[0.5px] border-[#2D2D2D] ' liitem='Furniture' />
            <Li className="block md:py-4 py-2 md:px-5 px-2  hover:text-white md:hover:pl-7 hover:pl-3 border-b-[0.5px] border-[#2D2D2D] group " liitem='Electronics' >
              <ul className='max-w-32'>
                <H6 className='pb-5' h6='Phones' />
                <Li megamenu='hidden' className='' liitem='Phone 1' />
                <Li megamenu='hidden' className='py-3' liitem='Phone 2' />
                <Li megamenu='hidden' className='' liitem='Phone 3' />
                <Li megamenu='hidden' className='py-3' liitem='Phone 4' />
                <Li megamenu='hidden' className='' liitem='Phone 5' />
                <Li megamenu='hidden' className='py-3' liitem='Phone 6' />
                <Li megamenu='hidden' className='' liitem='Phone 7' />

              </ul>
              <ul className='max-w-32'>
                <H6 className='pb-5' h6='Computers' />
                <Li megamenu='hidden' className='' liitem='Computer 1' />
                <Li megamenu='hidden' className='py-3' liitem='Computer 2' />
                <Li megamenu='hidden' className='' liitem='Computer 3' />
                <Li megamenu='hidden' className='py-3' liitem='Computer 4' />
                <Li megamenu='hidden' className='' liitem='Computer 5' />
                <Li megamenu='hidden' className='py-3' liitem='Computer 6' />
                <Li megamenu='hidden' className='' liitem='Computer 7' />
              </ul>
              <ul className='w-32'>
                <H6 className='pb-5' h6='Smart watches' />
                <Li megamenu='hidden' className='' liitem='Smart watches 1' />
                <Li megamenu='hidden' className='py-3' liitem='Smart watches 2' />
                <Li megamenu='hidden' className='' liitem='Smart watches 3' />
                <Li megamenu='hidden' className='py-3' liitem='Smart watches 4' />
                <Li megamenu='hidden' className='' liitem='Smart watches 5' />
                <Li megamenu='hidden' className='py-3' liitem='Smart watches 6' />
                <Li megamenu='hidden' className='' liitem='Smart watches 7' />
              </ul>
              <ul className='max-w-32'>
                <H6 className='pb-5' h6='Cameras' />
                <Li megamenu='hidden' className='' liitem='Camera 1' />
                <Li megamenu='hidden' className='py-3' liitem='Camera 2' />
                <Li megamenu='hidden' className='' liitem='Camera 3' />
                <Li megamenu='hidden' className='py-3' liitem='Camera 4' />
                <Li megamenu='hidden' className='' liitem='Camera 5' />
                <Li megamenu='hidden' className='py-3' liitem='Camera 6' />
                <Li megamenu='hidden' className='' liitem='Camera 7' />
              </ul>
            </Li>
            <Li megamenu='hidden' className='  block md:py-4 py-2 md:px-5 px-2  hover:text-white md:hover:pl-7 hover:pl-3 border-b-[0.5px] border-[#2D2D2D] ' liitem='Clothes' />
            <Li megamenu='hidden' className='  block md:py-4 py-2 md:px-5 px-2  hover:text-white md:hover:pl-7 hover:pl-3 border-b-[0.5px] border-[#2D2D2D] ' liitem='Bags' />
            <Li megamenu='hidden' className='  block md:py-4 py-2 md:px-5 px-2  hover:text-white md:hover:pl-7 hover:pl-3 ' liitem='Home appliances' />

          </ul>
        </div>
        <div className="mid flex relative  w-[601px] ml-[-25%]">
          <input onChange={manageSearch} value={Search} className='md:py-4 py-1 md:px-5 px-2 w-full z-0 ' type="text" placeholder='Search by products name' />
          <IoSearch className='absolute top-1/2 md:right-5 right-2  -translate-y-1/2 ' />
        </div>
        <div className="right  gap-x-10 items-center hidden md:flex">
          <div className="rightleft flex gap-x-2 relative">
            <div onClick={() => setAccount(!Account)} className={`flex gap-x-2 cursor-pointer`}>
              <FaUser />
              <TiArrowSortedDown />
            </div>
            <div className={`w-[200px] flex flex-col absolute top-[130%] right-0  z-50 ${Account ? "opacity-1 visible" : "opacity-0 invisible"}`}>
              <Button className='border-none px-0' to='' btntext='My Account' />
              <Button className='border-none px-0' to='' btntext='Log Out' />
            </div>

          </div>

          <div className="rightright relative">
            <div onClick={() => setCart(!Cart)} className='cursor-pointer '>
              <FaCartShopping />
            </div>
            <div className={`w-[360px] Cart_popup absolute top-[130%] right-0 bg-white  z-50 ${Cart ? "opacity-1 visible" : "opacity-0 invisible"}`}>
              <div className="up p-5 flex justify-between items-center relative bg-[#F5F5F3] ">
                <div className='flex gap-x-5 items-center  '>
                  <div className='h-20 w-20 object-contain bg-[#D8D8D8]' >
                    {/* <Image src={} to='/' alt=''/> */}
                  </div>
                  <div>
                    <H6 className='mb-3' h6='Black Smart Watch' />
                    <H6 h6='$44.00' />
                  </div>
                </div>
                <ImCross />
              </div>
              <div className="down p-5">
                <P className='mb-3' p='Subtotal:$44.00' />
                <div className='flex justify-between'>
                  <Button className='' to='/' btntext='View Cart' />
                  <Button className='' to='/' btntext='Checkout' />
                </div>
              </div>
            </div>
          </div>
        </div>
      

      {
        filterData.length > 0 ? (
          

          <ul className='absolute bg-[#F5F5F3] top-[120%]  px-4  py-4 grid grid-cols-4 z-50 gap-8'>
            {
              filterData.map((item,index)=>(
                <li className='bg-white'>
                  <Card key={index}  src={item.thumbnail} ProductName={item.title} ProductPrice={item.price} Band={item.brand} />
                </li>
              ))

            }
          </ul>
          
        ):(
          <ul className='absolute bg-[#F5F5F3] top-[120%] w-full px-10  py-4 grid grid-cols-4 z-50 gap-10'><p>No Product Found</p></ul>
          
        )
      }
    </Container>
    </div>
  )
}

export default SearchBar