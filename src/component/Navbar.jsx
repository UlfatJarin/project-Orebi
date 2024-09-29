import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import Logo from '/asset/Logo.png'
import Li from './layer/Li'
import { TbGridDots } from 'react-icons/tb'
import { FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import Button from './layer/Button'
import H6 from './layer/H6'
import { ImCross } from 'react-icons/im'
import P from './layer/P'

const Navbar = () => {

  let [show, setshow] = useState(false)
  useEffect(() => {
    function resize() {
      if (window.innerWidth < 735.98) {
        setshow(false)
      } else {
        setshow(true)
      }
    }
    resize()
    window.addEventListener("resize", resize)
  }, [])
  
  let [Cart, setCart] = useState(false)
  let [Account, setAccount] = useState(false)


  return (
    <nav className='bg-white '>
      <Container className=' relative flex justify-between md:justify-center items-center py-3 md:py-8  '>
        <Image className='md:absolute md:top-1/2 md:left-3 md:-translate-y-1/2' to='/' src={Logo} alt='this is logo' />

        <ul className={`flex gap-x-10 justify-center items-end flex-col md:flex-row  absolute top-full left-0 md:static bg-[#F5F5F3] md:bg-transparent w-full md:w-auto p-3 md:p-0 transition-all duration-700 z-10 ${show ? "translate-x-0  " : "translate-x-full "}`}>
          <Li megamenu='hidden' className='font-bold active text-black ' liitem='Home' to='/' />
          <Li megamenu='hidden' className='font-bold' liitem='Shop' to='/shop' />
          <Li megamenu='hidden' className='font-bold' liitem='About' to='/about' />
          <Li megamenu='hidden' className='font-bold' liitem='Contacts' to='/contacts' />
          <Li megamenu='hidden' className='font-bold' liitem='Journal' to='/journal' />
        </ul>

        <div className="icon md:hidden cursor-pointer text-black flex gap-3">
          <div onClick={() => setAccount(!Account)} className="rightleft">
            <FaUser />
          </div>
          <div className={`w-[200px] flex flex-col absolute top-[130%] right-0  ${Account ? "opacity-1 visible z-50" : "opacity-0 invisible"}`}>
            <Button className='border-none px-0' to='/' btntext='My Account'/>
            <Button className='border-none px-0' to='/' btntext='Log Out'/>
           </div>
          <div  onClick={() => setCart(!Cart)} className="rightright ">
            <FaCartShopping />
          </div> 
          <div className={`md:w-[360px] w-[260px] Cart_popup absolute top-[130%] right-0 bg-white    ${Cart ? "opacity-1 visible z-50" : "opacity-0 invisible"}`}>
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
              <div className="down md:p-5 p-3">
                <P className='mb-3' p='Subtotal:$44.00' />
                <div className='flex justify-between'>
                  <Button className='' to='/' btntext='View Cart' />
                  <Button className='' to='/' btntext='Checkout' />
                </div>
              </div>
            </div>
          <div onClick={() => setshow(!show)}>
            <TbGridDots />
          </div>
        </div>
      </Container>
    </nav>
  )
}
export default Navbar