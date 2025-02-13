import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroImage from "../../../assets/Images/animation_Image.png";
import Button2 from "../../../Components/Button2/Button2";
import Button from "../../../Components/Button/Button";
import Navbar from "../../../Components/Navbar/Navbar";

const Hero = () => {


    return (
        <section className="relative flex flex-col items-center justify-center h-[600px] bg-gray-100 overflow-hidden px-4">
            <Navbar />
            
           

          <div className="w-full h-[500px] flex justify-center items-center absolute top-[20%] ">
            
                {/* Rotated Tags (Now Above Heading) */}
                <div className="absolute top-[10%] sm:top-[10%] max-sm:top-[10%] sm:left-[10%] max-sm:rounded-2xl max-sm:px-10 max-sm:left-[10%] max-[500]:top-[3%] max-[500px]:px-5 lg:left-[22%] md:top-[20%] md:-rotate-20 left-[20%] md:left-[20%] bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
                    Try free for <span className="text-blue-600 font-bold max-sm:block ">14-days!</span>
                </div>
                <div className="absolute top-[10%] sm:top-[10%] max-sm:top-[10%] max-sm:rounded-2xl max-sm:px-10 max-sm:right-[10%] max-[500px]:top-[10%] lg:right-[22%] max-[500px]:px-5 md:top-[20%] right-[30%] md:rotate-20 md:right-[20%] bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
                    Created By<span className=" max-sm:block ">Accountants!</span>
                </div>



                {/* Heading & CTA */}
                <div className="text-center  gap-3 z-10 w-full max-w-3xl flex justify-between flex-col">
                    <h1 className="text-7xl  md:text-7xl lg:text-7xl font-extrabold text-black leading-tight">
                        Pricing
                    </h1>
                    <p className="text-gray-600 text-xl w-[90%] max-sm:text-[18px]  mt-2 text-center font-semibold">
                        Made by Australian Accountants to Help Individuals, Businesses, and
                        Tax Professionals Cut Costs, Streamline Tax Guidance, and Simplify
                        Preparation.
                    </p>
                    <div className="mt-6 flex gap-4 justify-center">
                        <Button title="Sign in" />
                        <Button2 />
                    </div>
                </div>
          </div>
        </section>
    );
};

export default Hero;
