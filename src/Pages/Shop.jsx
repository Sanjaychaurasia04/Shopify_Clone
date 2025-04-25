import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Popular from '../components/Popular/Popular.jsx'
import Offer from '../components/Offers/Offer.jsx'
import Newcollection from '../components/newcollections/Newcollection.jsx'
import Newsletter from '../components/Newslater/Newsletter.jsx'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop