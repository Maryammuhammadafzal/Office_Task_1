import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../About/About'
import Features from '../Features/Features'
import Testimonial from '../Testimonial/Testimonial'
import Security from '../Security/Security'
import Achievements from '../Achievements/Achievements'
import Contact from '../Contact/Contact'
import FAQs from '../FAQs/FAQs'
import Footer from '../Footer/Footer'
import SeccuritySections from '../../Components/SecuritySections/SeccuritySections'

const SecurityPage = () => {
  return (
      <div className='w-full h-screen bg-gray-100 box-border overflow-x-hidden'>
        <SeccuritySections/>

      </div>
  )
}

export default SecurityPage
