import React from 'react'
import Banner from '../component/Banner'
import ReturnPolicy from '../component/ReturnPolicy'
import Add1 from '../component/Add1'
import NewArivals from '../component/NewArivals'
import BestProuct from '../component/BestProuct'
import Add2 from '../component/Add2'
import SpecialOffer from '../component/SpecialOffer'

const Home = () => {
  return (
    <div>
        <Banner/>
        <ReturnPolicy/>
        <Add1/>
        <NewArivals/>
        <BestProuct/>
        <Add2/>
        <SpecialOffer/>
        
    </div>
  )
}

export default Home