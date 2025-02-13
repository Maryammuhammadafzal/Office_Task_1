import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Pages/Footer/Footer'
import PoliciesSection from './PoliciesSection/PoliciesSection'


const ResourcesPage = () => {
  return (
    <div  className=" flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100  px-4">
      <div className='w-full h-[150px] relative'>
        <Navbar />
      </div>
      <div className="flex flex-col gap-4 min-h-screen bg-gray-100  w-full px-4">
        <PoliciesSection />
     </div>
        <Footer />
    </div>
  )
}

export default ResourcesPage
