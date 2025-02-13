import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import PrivacyPolicySection from './PrivacyPolicySection/PrivacyPolicySection'
const PrivacyPolicy = () => {
  return (
      <div className='w-full h-screen bg-gray-100 box-border overflow-x-hidden'>
          <div className="nav w-full h-[160px] relative ">
              <Navbar />
          </div>
          <PrivacyPolicySection />
          <Footer />
      </div>
  )
}

export default PrivacyPolicy
