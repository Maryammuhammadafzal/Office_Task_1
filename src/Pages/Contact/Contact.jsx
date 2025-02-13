import React, { useEffect, useRef } from "react";
import Button2 from '../../Components/Button2/Button2'
import Button from '../../Components/Button/Button'
import border from "../../assets/Images/Security_background.png"
import SecurityCarousel from '../../Components/Carousel/Carousel'
import SecurityImage from '../../assets/Images/security.png'
import { gsap } from "gsap";

const Security = () => {
    const floatingRef = useRef(null);

    useEffect(() => {
        const floatingItems = document.querySelectorAll(".floating");

        floatingItems.forEach((item, index) => {
            gsap.to(item, {
                x: Math.cos(index) * 150,
                y: Math.sin(index) * 150,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        });
    }, []);

    return (
        <div className='relative bg-gray-100 w-full min-h-screen flex justify-center items-center transparent'>
            <div className="w-[100%] mx-auto max-lg:w-[98%] h-full flex justify-center items-center">
                <div className='securityContent w-[100%] max-lg:w-[98%]  max-md:h-full   mx-auto h-[90vh] justify-center items-center flex gap-3'>
                    <img src={border} className='w-[95%] max-sm:w-[100%] rounded-2xl h-full  max-md:h-[800px] mx-auto  relative py-3' alt="box" />
                    <div className='w-full h-full flex justify-center  items-center absolute top-0 left-0'>
                    <section className="relative flex flex-col items-center justify-center h-full  overflow-hidden ">
                        {/* Background Orbit Circles */}
                        <div ref={floatingRef} className="absolute flex items-center justify-center">
                             <div className="absolute max-lg:hidden w-[1100px] h-[1100px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
                            <div className="absolute  w-[600px] h-[600px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
                        </div>

                        {/* Floating Orbiting Elements */}
                        <div className="absolute w-full h-full flex items-center justify-center">
                            <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[38%] left-[29%]"></div>
                            <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[32%] left-[12.5%]"></div>
                            <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[22%] left-[78%]"></div>
                            <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[65%] left-[88%]"></div>
                        </div>

                        {/* Floating Text Labels */}
                        <div className="absolute top-[30%] max-md:left-[3%] max-md:w-[45%] max-sm:w-[40%] max-md:mx-3 max-md:text-center max-md:px-6  max-md:rounded-3xl max-md:py-3 max-lg:rotate-0 max-lg:py-5 max-lg:top-[20%] max-lg:left-[20%] left-[15%] rotate-[-15deg] bg-white px-4 py-2 rounded-full shadow-md">
                            Try free for <span className="max-md:block text-blue-600 font-bold">14-days!</span>
                        </div>
                            <div className="absolute top-[30%] max-lg:rotate-0 max-md:w-[45%] max-sm:w-[40%] max-md:mx-3 max-md:text-center max-md:px-6 max-md:rounded-3xl max-md:py-3  max-md:right-[3%] max-lg:py-5 max-lg:top-[20%] max-lg:right-[20%] right-[15%] rotate-[15deg] bg-white px-4 py-2 rounded-full shadow-md">
                                Created By <span className="max-md:block">Accountants!</span>
                        </div>

                        {/* Heading & CTA */}
                            <div className="text-center flex flex-col gap-5 z-10 max-md:w-[80%] max-sm:w-[90%] w-[50%]">
                                <h1 className="text-6xl font-extrabold text-white max-md:text-5xl max-sm:text-4xl max-sm:leading-12  uppercase leading-14">
                                start simplifying your tax
                            </h1>
                                <p className="text-gray-100 w-[80%]  max-md:w-[90%]  max-md:font-medium mx-auto mt-2 max-sm:w-full text-[18px] font-semibold">
                                Made by Australian Accountants to Help Individuals, Businesses, and
                                Tax Professionals Cut Costs, Streamline Tax Guidance, and Simplify
                                Preparation.
                            </p>
                            <div className="mt-6 w-ful flex gap-2 justify-center">
                                <Button title="Contact us" bg="[#fff]" border="[#fff]" />
                                <Button2 />
                            </div>
                        </div>
                    </section>
                    </div>
                        
                         
                     

                </div>
            </div>

        </div>


    )
}

export default Security;
