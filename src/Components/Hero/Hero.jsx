import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroImage from "../../assets/Images/animation_Image.png";
import Button2 from "../Button2/Button2";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
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
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden px-4">
      <Navbar/>
      {/* Background Orbit Circles */}
      <div ref={floatingRef} className="absolute flex items-center justify-center">
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-gray-300 opacity-60 lg:w-[1800px] lg:h-[1800px]"></div>
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-gray-300 opacity-60 lg:w-[1500px] lg:h-[1500px]"></div>
        <div className="absolute w-[900px] h-[900px] rounded-full border border-gray-300 opacity-60 lg:w-[1200px] lg:h-[1200px]"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-300 opacity-60 lg:w-[900px] lg:h-[900px]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-300 opacity-60 lg:w-[600px] lg:h-[600px]"></div>
      </div>

      {/* Floating Orbiting Elements */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="orbit-item floating absolute w-8 h-8 bg-white rounded-full shadow-md top-[38%] left-[29%] sm:w-6 sm:h-6"></div>
        <div className="orbit-item floating absolute w-8 h-8 bg-white rounded-full shadow-md top-[32%] left-[12.5%] sm:w-6 sm:h-6"></div>
        <div className="orbit-item floating absolute w-8 h-8 bg-white rounded-full shadow-md top-[22%] left-[78%] sm:w-6 sm:h-6"></div>
        <div className="orbit-item floating absolute w-8 h-8 bg-white rounded-full shadow-md top-[65%] left-[88%] sm:w-6 sm:h-6"></div>
      </div>

      {/* Rotated Tags (Now Above Heading) */}
      <div className="absolute top-[15%] sm:top-[20%] max-sm:top-[30%] max-sm:left-[10%] max-[500px]:top-[10%] lg:left-[20%] md:top-[40%] md:-rotate-10 left-[20%] md:left-[5%] bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
        Try free for <span className="text-blue-600 font-bold">14-days!</span>
      </div>
      <div className="absolute top-[15%] sm:top-[20%] max-sm:top-[30%] max-sm:right-[10%] max-[500px]:right-[1%] lg:right-[20%] md:top-[40%] right-[20%] md:rotate-10 md:right-[5%] bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
        Created By Accountants!
      </div>

      {/* Center Image */}
      <div className="relative w-60 h-60 md:w-72 md:h-72 z-10 flex items-center justify-center sm:w-56 sm:h-56 max-sm:hidden">
        <img src={HeroImage} className="w-full h-full object-cover" alt="Hero Image" />
        <div className="absolute w-32 h-32 bg-white opacity-20 rounded-full sm:w-24 sm:h-24"></div>
      </div>

      {/* Heading & CTA */}
      <div className="text-center mt-10 z-10 w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
          AUSTRALIA’S FIRST AI TAX ASSISTANT
        </h1>
        <p className="text-gray-600 text-lg sm:text-sm mt-2 font-semibold">
          Made by Australian Accountants to Help Individuals, Businesses, and
          Tax Professionals Cut Costs, Streamline Tax Guidance, and Simplify
          Preparation.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button title="Sign in" />
          <Button2 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
