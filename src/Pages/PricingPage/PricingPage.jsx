import React from 'react'

import Footer from '../Footer/Footer'
import PricingHero from './PricingHero/PricingHero'
import PricingSection from './PricingSection/PricingSection'
const PricingPage = () => {
  return (
      <div className='w-full bg-gray h-screen box-border overflow-x-hidden'>
        <PricingHero/>
        <PricingSection/>
      <Footer />
    </div>
  )
}

export default PricingPage
