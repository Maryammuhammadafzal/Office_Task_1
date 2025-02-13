import React from 'react'
import Button from '../Button/Button'
import Button2 from '../Button2/Button2'
import Logo from "../../assets/Images/Logo.png"
import MenuIcon from "../../assets/Images/menu-right-2 1.png"
import { Link } from 'react-router'



const Navbar = () => {
 
  return (
    <div className='w-full h-[64px] flex p-2 justify-between absolute top-[24px] left-[0px]'>
      <div className="left w-fit px-2 h-full flex items-center">
        <div className="logo w-fit h-fit flex items-center ">
          <img src={Logo} className='w-[111px]  h-[32px] max-xl:w-[130px] max-xl:h-[40px] min-2xl:w-[170px] min-2xl:h-[60px] max-2xl:w-[160px] max-2xl:h-[50px] ' alt="logo" />
        </div>
      </div>
      <div className="right w-fit max-2xl:w-[70%] min-2xl:w-[70%] max-xl:w-[75%] p-2 max-lg:w-[75%] max-md:w-[65%] h-full flex items-center justify-end gap-2 max-sm:hidden">
        <div className="tabs w-[50%] justify-between px-3 max-2xl:w-[80%] min-2xl:w-[80%]  max-xl:w-[60%] max-md:w-[100%] max-lg:w-[98%] h-[55px] flex items-center gap-2 border border-black rounded-4xl  bg-gray-100">
          <Link  to="/" className="tabItem text-center rounded-4xl p-2 max-[550px]:text-[6px] max-[550px]:w-[6px] max-sm:w-8 max-md:text-[10px] max-lg:w-14 max-lg:text-[12px]  max-sm:text-[8px] w-[17%] h-10 max-md:h-10  text-md font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Home</Link>
          <Link to="/about" className="tabItem text-center rounded-4xl p-2 max-[550px]:text-[6px] max-[550px]:w-[6px] max-sm:w-8 max-md:text-[10px] max-lg:w-14 max-lg:text-[12px]  max-sm:text-[8px] w-[17%] h-10 max-md:h-10 text-md font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">About</Link>
          <Link to="/pricing" className="tabItem text-center rounded-4xl p-2 max-[550px]:text-[6px] max-[550px]:w-[6px] max-sm:w-8 max-md:text-[10px] max-lg:w-14 max-lg:text-[12px]  max-sm:text-[8px] w-[17%] h-10 max-md:h-10 text-md font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Pricing</Link>
          <Link  to="/policy" className="tabItem text-center rounded-4xl p-2 max-[550px]:text-[6px] max-[550px]:w-[6px] max-sm:w-8 max-md:text-[10px] max-lg:w-14 max-lg:text-[12px]  max-sm:text-[8px] w-[17%] h-10 max-md:h-10 text-md font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Resources</Link>
          <Link  to="/security" className="tabItem text-center rounded-4xl p-2 max-[550px]:text-[6px] max-[550px]:w-[6px] max-sm:w-8 max-md:text-[10px] max-lg:w-14 max-lg:text-[12px]  max-sm:text-[8px] w-[17%] h-10 max-md:h-10 text-md font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Security</Link>
          <Link  to="/help" className="tabItem text-center rounded-4xl p-2 max-[550px]:text-[6px] max-[550px]:w-[6px] max-sm:w-8 max-md:text-[10px] max-lg:w-14 max-lg:text-[12px]  max-sm:text-[8px] w-[17%] h-10 max-md:h-10 text-md font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Help</Link>
        </div>
        <div className='flex max-lg:hidden gap-2'>
          <Button title="Signin" hidden="hidden" />
          <Button2 hidden="hidden" />
        </div>
      </div>
      <div className='w-fit px-2 h-full min-sm:hidden flex justify-end items-center '>
        <div className='w-[32px] h-[32px] border flex justify-center items-center border-black rounded-full'>

          <img src={MenuIcon} className='w-auto h-auto' alt="menuIcon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar