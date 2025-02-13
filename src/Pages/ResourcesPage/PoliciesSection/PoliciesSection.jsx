import React from 'react'
import PoliciesCard from '../../../Components/PoliciesCard/PoliciesCard'

const PoliciesSection = () => {
  return (
    <div className="flex flex-col items-start gap-3 h-[500px] w-full">
      <div className="h-[100px] z-10 w-[50%]  max-sm:w-[80%] max-md:w-[70%] max-lg:w-[60%]">
        <h1 className="text-6xl capitalize font-extrabold text-black max-sm:text-4xl min-sm:text-5xl leading-14 ">
          policies
        </h1>
      </div>
      <div className="w-full  flex flex-wrap items-center justify-center h-auto  px-4">
        <PoliciesCard/>
      </div>
   </div>
  )
}

export default PoliciesSection
