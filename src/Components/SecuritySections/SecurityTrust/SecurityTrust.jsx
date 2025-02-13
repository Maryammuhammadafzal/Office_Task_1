import React, { useEffect, useRef } from "react";
import TrustImage from "../../../assets/Images/trustImage.png"
import border from "../../../assets/Images/Subtract.png"

import { gsap } from "gsap";
const SecurityTrust = () => {
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
            <div className="w-[100%] mx-auto max-lg:w-[98%] h-auto flex justify-center items-center">
                <div className='securityContent w-[100%] max-lg:w-[98%]  max-md:h-full   mx-auto h-full justify-center items-center flex gap-3'>
                    <img src={border} className='w-[95%] max-sm:w-[100%] rounded-2xl h-[800px]  max-md:h-[800px] mx-auto  relative ' alt="box" />
                    <div className='w-full h-[700px] top-31 flex justify-center  items-center absolute  left-0'>
                        <section className="relative flex flex-col items-center justify-center h-full  overflow-hidden ">
                            {/* Background Orbit Circles */}
                            <div ref={floatingRef} className="absolute flex items-center justify-center">
                                <div className="absolute max-lg:hidden w-[800px] h-[800px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
                                <div className="absolute  w-[600px] h-[600px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
                                <div className="absolute max-lg:hidden w-[1000px] h-[1000px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
                                <div className="absolute  w-[1300px] h-[1300px] rounded-full border-[1px] border-gray-300 opacity-60"></div>

                            </div>

                            {/* Floating Orbiting Elements */}
                            <div className="absolute w-full h-full flex items-center justify-center">
                                <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[38%] left-[29%]"></div>
                                <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[32%] left-[12.5%]"></div>
                                <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[22%] left-[78%]"></div>
                                <div className="orbit-item floating absolute max-lg:hidden w-10 h-10 bg-white rounded-full shadow-md top-[65%] left-[88%]"></div>
                            </div>

                            <div className="image flex justify-center z-10 mb-3 ">
                                <img className="max-sm:w-[85%] max-md:w-[92%]" src={TrustImage} alt="" />
                            </div>

                            {/* Heading & CTA */}
                            <div className="text-center flex mt-3 flex-col gap-5 z-10 max-md:w-[80%]  max-lg:w-[70%] max-sm:w-[95%] w-[60%]">
                                <h1 className="text-6xl font-extrabold  max-md:text-5xl max-sm:text-4xl max-sm:leading-12  uppercase leading-14">
                                    Trust in Ezyiah’s Commitment to Security
                                </h1>
                                <p className="text-gray-800 w-[80%]  max-md:w-[90%]  max-md:font-medium mx-auto mt-2 max-sm:w-full text-[18px] font-semibold">
                                    Ezyiah goes above and beyond to protect your personal, financial, and tax data. By implementing cutting-edge security measures and complying with Australian legal and regulatory standards, we offer you a secure and reliable platform for all your tax needs.
                                </p>
                                
                            </div>
                        </section>
                    </div>




                </div>
            </div>

        </div>


    )
}

export default SecurityTrust
