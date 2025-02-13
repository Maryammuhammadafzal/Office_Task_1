import React from 'react'
import border from "../../../assets/Images/SecurityHeroImage.png"
import HeroImage from "../../../assets/Images/Group 33.png"
import MobileHeroImage from "../../../assets/Images/image.png"

import Navbar from '../../Navbar/Navbar'
const SecurityHero = () => {
  return (
    <div className='relative w-full min-h-screen flex top-5 justify-center items-start '>
          <div className="box w-[95%] max-sm:w-[95%] h-full flex justify-center">
              {/* Background Border Image */}
              <img
                  src={border}
                  className="w-full h-[900px] max-lg:h-[900px] max-md:h-[850px] max-sm:h-[800px] relative"
                  alt="Decorative border"
              />

              {/* Content Container */}
              <div className="SecurityContent absolute  top-0 min-lg:top-2 space-y-5 max-lg-top-10 max-md:top-15 py-5 w-[90%] max-lg:w-[97%] max-md:w-[98%] max-sm:h-[740px] max-md:h-[730px] flex flex-col  max-md:flex-col justify-center items-center gap-4">
                {/* Navbar */}
                <div className='w-full h-[100px]'>
                      <Navbar />
                </div>
                  {/* Text Section */}
                  <div className="text w-full min-w-[300px] mt-4 flex flex-col gap-2 justify-center items-center max-lg:w-[80%] h-fit max-md:w-[90%]">
                      <h2 className="w-full text-6xl leading-tight font-extrabold text-center uppercase max-sm:text-5xl">
                          Security at Ezyiah
                      </h2>
                      <p className="text-xl w-full max-md:text-base text-center max-sm:text-lg">
                         At Ezyiah, we understand that the security of your personal and financial information is paramount. Our platform employs state-of-the-art security protocols and adheres to stringent Australian regulatory standards to ensure your data is protected at every step of your tax journey.  </p>
                  </div>
<div className="image w-[90%] max-sm:w-[98%] max-sm:hidden h-[300px] flex justify-center items-center min-md:mt-4">
  <img src={HeroImage} className='h-[200px] max-sm:h-[100px] max-md:h-[150px] w-auto' alt="" />
</div>
<div className="image w-[100%] max-sm:w-[100%] h-[300px] min-sm:hidden flex justify-center items-center min-md:mt-4">
            <img src={MobileHeroImage} className='h-[200px] max-sm:h-auto max-md:h-[150px] w-[90%]' alt="" />
</div>
                     
                 
              </div>
          </div>
    </div>
  )
}

export default SecurityHero
