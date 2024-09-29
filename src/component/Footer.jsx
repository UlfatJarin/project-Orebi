import React from 'react'
import Li from './layer/Li'
import Container from './layer/Container'
import H6 from './layer/H6'
import Image from './layer/Image'
import logo from '../../public/asset/Logo.png'
import Credit from './layer/Credit'

const Footer = () => {
    return (
        <footer className='bg-[#F5F5F3]'>
            <Container className='grid md:grid-cols-7 grid-cols-3 grid-rows-1 md:mt-14 mt-5 gap-y-4'>
                <div className='col-span-1 row-span-1'>
                    <ul>
                        <H6 className='md:mb-4 mb-1' h6='MENU' />
                        <Li className='text-[#6D6D6D] mb-[6px]' liitem='Home' to='/' />
                        <Li className='text-[#6D6D6D] mb-[6px]' liitem='Shop' to='/' />
                        <Li className='text-[#6D6D6D] mb-[6px]' liitem='About' to='/' />
                        <Li className='text-[#6D6D6D] mb-[6px]' liitem='Contact' to='/' />
                        <Li className='text-[#6D6D6D]' liitem='Journal' to='/' />
                    </ul>
                </div>
                <div className='col-span-1 row-span-1'>
                    <ul>
                        <H6 className='md:mb-4 mb-1' h6='SHOP' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Category 1' to='' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Category 2' to='' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Category 3' to='' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Category 4' to='' />
                        <Li className='text-[#6D6D6D]' liitem='Category 5' to='' />
                    </ul>
                </div>
                <div className='col-span-1 row-span-1'>
                    <ul>
                        <H6 className='md:mb-4 mb-1' h6='HELP' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Privacy Policy' to='' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Terms & Conditions' to='' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Special E-shop' to='' />
                        <Li className='text-[#6D6D6D] md:mb-[6px] mb-1' liitem='Shipping' to='' />
                        <Li className='text-[#6D6D6D]' liitem='Secure Payments' to='' />
                    </ul>
                </div>
                <div className='md:col-span-2 col-span-3 row-span-1 text-center md:text-left '>
                    <ul>
                        <H6 className='' h6='(052) 611-5711' />
                        <H6 className='md:mb-4 ' h6='company@domain.com' />
                        <Li className='text-[#6D6D6D] hover:text-[#6D6D6D]' liitem='575 Crescent Ave. Quakertown, PA 18951' to='' />
                    </ul>
                </div>
                <div className='md:col-span-2 col-span-3 row-span-1 flex justify-center md:justify-start '>
                    <Image className='' src={logo} alt='this is logo' to='/' />
                </div>

            </Container>
            <Credit/>
        </footer>


     

    )
}

export default Footer