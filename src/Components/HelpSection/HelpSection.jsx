import React from 'react'
import Image from "../../assets/Images/policyimage1.png"
import ArrowImage from "../../assets/Images/arrowImage.png"
import { Link } from 'react-router'
const HelpSection = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-5 bg-gray-100  items-center py-3'>

        <div className="helpCard w-full h-auto flex bg-white flex-col items-center my-2 rounded-2xl justify-center">
              <div className="addHelp  w-full p-3 bg-white min-h-[150px] max-md:h-[70px] max-sm:h-[150px] rounded-3xl  text-black  flex items-between  justify-between">
                      <div className="logo w-full h-fit gap-3 flex max-sm:flex-col max-sm:items-start  m-2 items-center ">
                          <img src={Image} className='w-20 lg:w-20 max-sm:w-14' alt="logo" />
                      <div className="heading">
                          <h2 className='w-fit max-sm:text-xl  text-3xl max-sm:text-[16px]  my-1 font-semibold '>Getting Started</h2>
                          <p className='max-sm:text-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                      </div>
                      <div className="signupBtn flex justify-between">
                          
                      <button className=' w-14 h-14 m-3 max-sm:w-12 border rounded-full max-sm:h-12 text-center'> +</button>
                      </div>
              </div>
              <div className="queries w-full h-auto gap-2 flex flex-col  my-2 p-2 justify-center">
                  <Link to="/account" className="queryCard border w-full p-3 bg-white h-[90px] rounded-3xl  text-black  flex items-between  justify-between">
                      <div className=" w-full h-full flex  items-center ">
                          <h2 className='w-fit max-sm:text-[16px]   text-xl font-semibold uppercase'>How to Set up a Ezyiah professional account?</h2>
                      </div>
                      <div className="signupBtn flex h-full items-center">
                          <img className="arrowImage w-14 h-14 max-sm:w-12 border rounded-full max-sm:h-12" src={ArrowImage} alt="arrow Image" />
                      </div>
                  </Link>
                  <div className="queryCard border w-full p-3 bg-white h-[90px] rounded-3xl  text-black  flex items-between  justify-between">
                      <div className=" w-full h-full flex  items-center ">
                          <h2 className='w-fit max-sm:text-[16px]   text-xl font-semibold uppercase'>How to write effective Ezyiah queries?</h2>
                      </div>
                      <div className="signupBtn flex h-full items-center">
                          <img className="arrowImage w-14 h-14 max-sm:w-12 border rounded-full max-sm:h-12" src={ArrowImage} alt="arrow Image" />
                      </div>
                  </div>
                  <div className="queryCard border w-full p-3 bg-white h-[90px] rounded-3xl  text-black  flex items-between  justify-between">
                      <div className=" w-full h-full flex  items-center ">
                          <h2 className='w-fit max-sm:text-[16px]   text-xl font-semibold uppercase'>How to use Ezyiah</h2>
                      </div>
                      <div className="signupBtn flex h-full items-center">
                          <img className="arrowImage w-14 h-14 max-sm:w-12 border rounded-full max-sm:h-12" src={ArrowImage} alt="arrow Image" />
                      </div>
                  </div>
                  <div className="queryCard border w-full p-3 bg-white h-[90px] rounded-3xl  text-black  flex items-between  justify-between">
                      <div className=" w-full h-full flex  items-center ">
                          <h2 className='w-fit max-sm:text-[16px]   text-xl font-semibold uppercase'>How to upload Documents?</h2>
                      </div>
                      <div className="signupBtn flex h-full items-center">
                          <img className="arrowImage w-14 h-14 max-sm:w-12 border rounded-full max-sm:h-12" src={ArrowImage} alt="arrow Image" />
                      </div>
                  </div>
              </div>
        </div>
          <div className="addHelp  w-full p-3 bg-white min-h-[150px] max-md:h-[70px] rounded-3xl max-sm:h-[180px]  text-black  flex items-between  justify-between">
              <div className="logo w-full h-fit gap-3 flex max-sm:flex-col max-sm:items-start m-2 items-center ">
                  <img src={Image} className='w-20 lg:w-20 max-sm:w-14' alt="logo" />
                  <div className="heading">
                      <h2 className='w-fit max-sm:text-xl my-2  text-3xl max-sm:text-[16px] font-semibold '>Subscription Management</h2>
                      <p className='max-sm:text-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
              </div>
              <div className="signupBtn flex justify-between">

                  <button className=' w-14 h-14 m-3 max-sm:w-12 border rounded-full max-sm:h-12 text-center'> +</button>
              </div>
          </div>
      
    </div>
  )
}

export default HelpSection
