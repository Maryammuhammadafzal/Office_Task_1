import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import FAQs from '../FAQs/FAQs'
import Footer from '../Footer/Footer'
import HelpSection from '../../Components/HelpSection/HelpSection'

const HelpPage = () => {
  return (
      <div className=" flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100  px-4">
          <div className='w-full h-[150px] relative'>
              <Navbar/>
          </div>
          <div className="flex flex-col gap-4 min-h-screen bg-gray-100  w-full px-4">
            <HelpSection/>
              <FAQs />
          </div>
          <Footer />
      </div>
  )
}

export default HelpPage
