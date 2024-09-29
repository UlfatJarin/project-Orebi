import React, { useState } from 'react'
import Brebcumb from '../component/Brebcumb'
import Container from '../component/layer/Container'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import ProductPaginate from '../component/layer/ProductPaginate'





const Shopby = ({ shopbytext, classNameli, classNameli1, classNameli2, classNameli3, classNameli4, classNameli5, shopbyli1, shopbyli2, shopbyli3, shopbyli4, shopbyli5 }) => {


    let [SbColor, setSbColor] = useState(false)

    return (
        <ul>
            <h3 onClick={() => setSbColor(!SbColor)} className='font-DM font-bold md:text-xl text-base text-textcolor mb-4 relative'>{shopbytext}
                <div>
                    < TiArrowSortedDown className={`absolute top-1/2 right-1 -translate-y-1/2 transition-all duration-150 ${SbColor ? "opacity-0 rotate-90" : "opacity-100"}`} />
                    <TiArrowSortedUp className={`absolute top-1/2 right-1 -translate-y-1/2 transition-all duration-150 ${SbColor ? "opacity-100" : "opacity-0  -rotate-90"}`} />
                </div>
            </h3>

            {SbColor && (
                <ul>
                    <li className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8] flex gap-2 items-center'>
                        <div className={` ${classNameli} ${classNameli1}`}></div>{shopbyli1}
                    </li>
                    <li className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8] flex gap-2 items-center'>
                        <div className={` ${classNameli}  ${classNameli2}`}></div>{shopbyli2}
                    </li>
                    <li className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8] flex gap-2 items-center'>
                        <div className={` ${classNameli}  ${classNameli3}`}></div>{shopbyli3}
                    </li>
                    <li className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8] flex gap-2 items-center'>
                        <div className={` ${classNameli}  ${classNameli4}`}></div>{shopbyli4}
                    </li>
                    <li className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8] flex gap-2 items-center'>
                        <div className={` ${classNameli}  ${classNameli5}`}></div>{shopbyli5}
                    </li>
                </ul>

            )

            }

        </ul>
    )
}

const Products = () => {

    let [show1, setshow1] = useState(false)
    let [show2, setshow2] = useState(false)
    let [showproduct, setshowproduct] =useState(12)

    let optionvalue =( element)=>{
        let shownumber =Number(element.target.value)
        setshowproduct (shownumber)
    }

    return (
        <div className='md:py-[124px] py-6'>
            <Brebcumb />
            <div>
                <Container>
                    <div>
                        <div className=' grid grid-cols-4 md:gap-10 gap-x-3 '>
                            <div className=' col-span-1 flex flex-col md:gap-y-14 gap-y-5'>
                                <ul>
                                    <h3 className='catagory font-DM font-bold md:text-xl text-base text-textcolor mb-4'>Shop by Category</h3>
                                    <li onClick={() => setshow1(!show1)} className='font-Dm text-textcolor2 text-xs md:text-base relative md:py-5 py-2 border-b border-[#D8D8D8]'> Category 1
                                        <div >
                                            <FaPlus className={`icon absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show1 ? "opacity-0 rotate-90" : "opacity-100"}`} />
                                            <FaMinus className={`icon absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show1 ? "opacity-100 " : "opacity-0  -rotate-90 "}`} />
                                        </div>
                                    </li>
                                    {show1 && (<ul>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                    </ul>

                                    )
                                    }
                                    <li onClick={() => setshow2(!show2)} className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8]'> Category 2          </li>

                                    <li onClick={() => setshow2(!show2)} className='font-Dm text-textcolor2 text-xs md:text-base relative md:py-5 py-2 border-b border-[#D8D8D8]'> Category 3
                                        <div >
                                            <FaPlus className={`icon absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show2 ? "opacity-0 rotate-90" : "opacity-100"}`} />
                                            <FaMinus className={`icon absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show2 ? "opacity-100 " : "opacity-0  -rotate-90 "}`} />
                                        </div>
                                    </li>
                                    {show2 && (<ul>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                        <li className='font-Dm text-textcolor2 text-xs md:text-base  md:py-5 py-2 border-b border-[#D8D8D8]'>Category </li>
                                    </ul>

                                    )
                                    }
                                    <li onClick={() => setshow(!show)} className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8]'> Category 4          </li>
                                    <li onClick={() => setshow(!show)} className='font-Dm text-textcolor2 text-xs md:text-base relative  md:py-5 py-2 border-b border-[#D8D8D8]'> Category 5          </li>
                                </ul>
                                <ul>
                                    <Shopby classNameli='w-3 h-3 rounded-full' classNameli1='bg-black' classNameli2='bg-[#FF8686]' classNameli3='bg-[#7ED321]' classNameli4='bg-[#B6B6B6]' classNameli5='bg-[#15CBA5]' shopbytext='Shop by Color' shopbyli1='Color 1' shopbyli2='Color 2' shopbyli3='Color 3' shopbyli4='Color 4' shopbyli5='Color 5' />
                                </ul>

                                <ul>
                                    <Shopby shopbytext='Shop by Brand' shopbyli1='Brand 1' shopbyli2='Brand 2' shopbyli3='Brand 3' shopbyli4='Brand 4' shopbyli5='Brand 5' />

                                </ul>
                                <ul>
                                    <Shopby shopbytext='Shop by Price' shopbyli1=' $0.00 - $9.99 ' shopbyli2='$10.00 - $19.99' shopbyli3='$20.00 - $29.99' shopbyli4='$30.00 - $39.99 ' shopbyli5='$40.00 - $69.99' />

                                </ul>

                            </div>



                            <div className='col-span-3'>
                                <div className=' flex justify-end items-center gap-4 md:mb-14 mb-7 mt-2 '>
                                        <h5 className='font-DM  text-textcolor2'>Show:</h5>
                                    <select onChange={optionvalue} className='md:w-[139px] w-24 md:px-5 px-3 py-1 border border-textcolor2 leading-8 '>
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                        <option value="48">48</option>
                                    </select>
                                </div>
                                    <ProductPaginate itemsPerPage={showproduct}/>
                                
                             
                             
                            </div>

                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Products