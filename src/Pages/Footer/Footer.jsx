import React from 'react'
import Logo from "../../assets/Images/logo_white.png"
import ArrowImage from "../../assets/Images/arrowimage.png"
import DesignerLogo from "../../assets/Images/designerLogo.png"
import { Link } from 'react-router'
import Intstagram from "../../assets/Images/Instagram.png"
import LinkedIn from "../../assets/Images/Linkedin.png"
import Phone from "../../assets/Images/phone.png"
import Email from "../../assets/Images/email.png"
const Footer = () => {
    return (
        <div className='w-full h-[500px] flex max-lg:flex-col max-lg:h-[700px] max-md:h-auto items-center justify-center gap-3 bg-gray-100'>
            <div className="signupCard w-[25%] max-lg:w-[80%] p-3 h-[400px] max-md:h-[200px] rounded-3xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 flex flex-col items-between  justify-between">
                <div className="logo w-full h-fit flex m-2 items-center ">
                    <img src={Logo} className='w-72 lg:w-72 max-[465px]:w-[200px]' alt="logo" />
                </div>
                <div className="signupBtn flex justify-between">
                    <h2 className='w-fit max-sm:text-2xl max-sm:leading-10 text-3xl leading-14 font-semibold uppercase'>Signup For free</h2>
                    <img className="arrowImage w-14 h-14 max-sm:w-12 max-sm:h-12" src={ArrowImage} alt="arrow Image" />
                </div>
            </div>
            <div className="footerCard w-[65%] max-lg:w-[80%] py-2 max-md:h-[1000px] bg-white gap-3 h-[400px] rounded-3xl flex flex-col items-center justify-center">
                <div className="row1 w-[95%] h-[300px] max-md:h-auto flex max-md:flex-col ">
                    <div className="col-1 w-1/4 h-[280px] max-md:w-[90%] max-md:items-center max-md:border-b max-md:border-none border-r border-gray-400 gap-y-5 max-md:py-0  flex flex-col pl-5 py-4">
                        <div className="head w-auto h-auto max-md:text-center">
                            <h3 className='font-bold text-2xl '>Sitemap</h3>
                        </div>
                        <div className="body  w-auto h-auto max-md:text-center">
                            <ul className="list w-auto flex flex-col gap-2 h-auto text-black max-md:text-center">
                                <Link to="/" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Home </Link>
                                <Link to="/about" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">About</Link>
                                <Link to="/pricing" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Pricing</Link>
                                <Link to="/blog" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Blog</Link>
                                <Link to="/security" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Security</Link>
                                <Link to="/help" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Help</Link>
                            </ul>


                        </div>
                    </div>
                    <hr className='max-md:block hidden opacity-30' />
                    <div className="col-2 w-1/4 h-[280px] max-md:w-[90%] max-md:items-center max-md:border-none border-r border-gray-400 gap-y-5 flex flex-col pl-7 py-4">
                        <div className="head w-auto h-auto max-md:text-center">
                            <h3 className='font-bold text-2xl '>Policies</h3>
                        </div>
                        <div className="body  w-auto h-auto max-md:text-center">
                            <ul className="list w-auto flex flex-col gap-2 h-auto text-black max-md:text-center">
                                <Link to="/privacypolicy" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Privacy</Link>
                                <Link to="/cookies" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Cookies</Link>
                                <Link to="/userdata" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">User Data</Link>
                                <Link to="/refund" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Refund</Link>
                                <Link to="/security" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Security</Link>
                                <Link to="/terms&condition" className="item w-auto h-auto hover:text-indigo-600 cursor-pointer">Terms & Condition</Link>
                            </ul>


                        </div>
                    </div>
                    <hr className='max-md:block hidden opacity-30' />
                    <div className="col-3 w-2/4 h-[280px] max-md:w-[90%] max-md:items-center max-md:border-none  gap-y-5 flex flex-col pl-10 py-4">
                        <div className='flex flex-col gap-3'>
                            <div className="head w-auto h-auto max-md:text-center">
                                <h3 className='font-bold text-2xl '>Socials</h3>
                            </div>
                            <div className="body  w-auto h-auto">
                                <ul className="list w-auto flex  gap-2 h-auto text-black max-md:text-center">
                                    <Link to="/home" className="item px-2 py-2 w-auto justify-center items-center gap-3 flex border rounded-full h-auto hover:text-indigo-600 cursor-pointer">
                                    <img src={Intstagram} alt="img" className='w-5 h-5' /> <p>@ezyiah</p></Link>
                                    <Link to="/home" className="item px-2 py-2 w-auto justify-center  flex items-center gap-3 border rounded-full h-auto hover:text-indigo-600 cursor-pointer"> <img src={LinkedIn} alt="img" className='w-5 h-5' /> <p>@ezyiah</p></Link>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>

                            <div className="head w-auto h-auto max-md:text-center">
                                <h3 className='font-bold text-2xl '>Contact Us</h3>
                            </div>
                            <div className="body  w-auto h-auto">
                                <ul className="list w-auto flex  gap-2 h-auto text-black max-md:text-center">
                                    <Link to="/home" className="item px-2 py-2 w-auto justify-center items-center gap-3 flex h-auto border rounded-full hover:text-indigo-600 cursor-pointer"> <img src={Phone} alt="img" className='w-5 h-5' /> <p>(02) 8313 5591</p></Link>
                                    <Link to="/home" className="item px-2 py-2 w-auto justify-center items-center gap-3 flex h-auto border rounded-full hover:text-indigo-600 cursor-pointer"> <img src={Email} alt="img" className='w-5 h-5' /> <p>Info@ezyiah.com</p></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row2 w-[95%] h-[50px] flex max-md:flex-col max-md:gap-3 justify-between items-center border-t border-gray-400">
                    <div className="copyright w-fit h-fit  px-3"><p className='text-black font-semibold'>©2024 All Rights Reserved</p></div>
                    <div className="designerName gap-2 items-center flex w-auto h-auto">
                        <p className='text-black font-semibold'>Designed & Developed by</p>
                        <img src={DesignerLogo} className='w-[90px] h-[30px]' alt="designer Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
