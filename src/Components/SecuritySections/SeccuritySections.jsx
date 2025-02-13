import React from 'react'
import SecurityHero from './SecurityHero/SecurityHero'
import SecurityProtection from './SecurityProtection/SecurityProtection'
import SecurityTrust from './SecurityTrust/SecurityTrust'
import SecurityControl from './SecurityControl/SecurityControl'
import SecurityTax from './SecurityTax/SecurityTax'
import Footer from '../../Pages/Footer/Footer'
import SecurityResponse from './SecurityResponse/SecurityResponse'

const SeccuritySections = () => {
  return (
      <div className='w-[100%] py-2 bg-gray-100 min-h-screen flex flex-col gap-3'>
      <SecurityHero/>
      <SecurityProtection/>
      <SecurityTrust/>
      <SecurityControl/>
      <SecurityTax/>
      <SecurityResponse/>
      <Footer/>
    </div>
  )
}

export default SeccuritySections
