import React, { useEffect, useState } from "react";
import Button2 from '../../Components/Button2/Button2'
import Button from '../../Components/Button/Button'
import border from "../../assets/Images/Security_background.png"
import SecurityCarousel from '../../Components/SecurityCarousel/SecurityCarousel'
import SecurityImage1 from '../../assets/Images/window-key 1.png'
import SecurityImage2 from '../../assets/Images/globe-lock 1.png'
import SecurityImage3 from '../../assets/Images/input-password 1.png'
import SecurityImage4 from '../../assets/Images/database-lock 2.png'

const Security = () => {
     const [currentIndex, setCurrentIndex] = useState(0);
    
      const testimonials = [
          { image:SecurityImage1, title: "Customised Privacy Controls", description: "With customisable access settings, you control who can view or share your documents. Trust Ezyiah for secure, private, and compliant data management."},
          { image:SecurityImage2, title: "Internet isolation", description: "All firm and client data is walled off from the internet, ensuring that your information remains internal to your instance of TaxGPT." },
          { image:SecurityImage3, title: "Data and AI Security", description: "Ezyiah protects your information with end-to-end encryption, 2FA, and secure, updated AI protocols meeting Australian standards." },
          { image:SecurityImage4, title: "Data encryption", description: "All data is encrypted both in transit and at rest using AES-256 encryption protocols." },
      ];
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      };
    
      // Auto-slide every 4 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 4000);
        return () => clearInterval(interval);
      }, [currentIndex]);
      
    return (
        <div className='relative bg-gray-100 w-full min-h-screen flex justify-center items-center transparent'>
            <div className="w-[100%] mx-auto max-lg:w-[98%] h-full flex justify-center items-center">
                <div className='securityContent w-[100%] max-lg:w-[98%]  max-md:h-full   mx-auto h-[90vh] justify-center items-center flex gap-3'>
                <img src={border} className='w-[95%] max-sm:w-[100%] rounded-2xl h-full  max-md:h-[800px] mx-auto  relative py-3' alt="box" />
                    <div className='w-full bottom-0 absolute gap-3 p-3 flex-col flex top-30 max-[780px]:top-40 max-[780px]:p-0 left-0'>
                        <div className="text w-full lg:top-[40%] px-4 text-center max-[780px]:w-[98%] absolute justify-center gap-6 ">
                            <h2 className='w-[98%] max-[780px]:text-4xl  text-6xl leading-14  text-white font-extrabold uppercase'>Security & Compliance</h2>
                        </div>
                       
                       
      {/* Desktop View: Vertical Stacked Cards */}
                        <div className="hidden absolute max-[780px]:hidden min-[780px]:block top-40 md:flex flex-col items-center w-full h-[600px] ">
        

        <div className="relative  w-[400px] h-[500px] flex items-center justify-center">
          {testimonials.map((item, index) => {
            let position = "opacity-0 scale-90"; // Default hidden state
            if (index === currentIndex) {
              position = "opacity-100 scale-100 rotate-5"; // Centered card
            } else if (index === (currentIndex + 1) % testimonials.length) {
              position = "opacity-100 scale-95 rotate-3"; // Next card
            } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
              position = "opacity-100 scale-95 -rotate-3"; // Previous card
            }

            return (
              <div key={index} className={`absolute transition-all duration-700 ease-in-out ${position} w-[400px] h-[400px] bg-white shadow-lg p-5 rounded-3xl flex flex-col items-center justify-between`}>
                <div className="image w-full">
                    <img src={item.image} alt="" />
                </div>
                <div className="text">
                        <h3 className="text-2xl font-extrabold">{item.title}</h3>
                        <p className="text-gray-700 mt-2 text-center max-md:text-[12px]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Navigation */}
                            <div className="flex gap-4 mt-5 ">
                                <button onClick={prevSlide} className="bg-gray-100 text-gray-500 border-2 border-gray-500  px-4 py-3 rounded-full">
                                    ◀
                                </button>
                                <button onClick={nextSlide} className="bg-gray-100 text-gray-500 border-2 border-gray-500 px-4 py-3 rounded-full">
                                    ▶
                                </button>
                            </div>
      </div>

                        {/* <div className="newcarousel max-[780px]:block hidden absolute left-[5%]"> */}
                        <div id="controls-carousel" class="relative w-full max-md:w-[97%] flex  justify-center items-center h-[500px] my-3 " data-carousel="static">
                            {/* <!-- Carousel wrapper --> */}
                            <div className="relative h-[500px] top-20 my-3 max-[780px]:block min-[780px]:hidden w-full  rounded-lg flex justify-center items-center">
                                {/* <!-- Card 1 --> */}
                                <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                    <div className="p-5 rounded-3xl  shadow-md bg-white space-y-4 w-[400px] absolute block max-w-full h-[320px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                        <img className="h-auto max-w-full rounded-lg " src={SecurityImage1} alt="securityImage" />
                                            <h3 className='text-2xl font-extrabold'>AI Tax Guidance</h3>
                                        <p className="max-md:text-[14px]">Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>
                                    </div>
                                </div>
                                {/* <!-- Card 2 --> */}
                                <div className="hidden duration-700 ease-in-out w-full" data-carousel-item="active">
                                    <div className="rounded-3xl shadow-md absolute block max-w-full h-[320px] -translate-x-1/2 transform -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                        <img className="h-auto max-w-full p-3 rounded-lg " src={SecurityImage2} alt="securityImage" />
                                        <h3 className='text-2xl font-extrabold'>Reminders & To-Do List</h3>
                                        <p className="max-md:text-[14px]">Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event.</p>
                                    </div>
                                </div>
                                {/* <!-- Card 3 --> */}
                                <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                    <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[320px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                        <img className="h-auto  max-w-full p-3 rounded-lg " src={SecurityImage3} alt="securityImage" />
                                        <h3 className='text-2xl font-extrabold'>Secure Document Storage</h3>
                                        <p className="max-md:text-[14px]">Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security.</p>
                                    </div>
                                </div>
                                {/* <!-- Card 4 --> */}
                                <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                    <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[320px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                        <img className="h-auto max-w-full pb-15 rounded-lg " src={SecurityImage4} alt="securityImage" />
                                        <h3 className='text-2xl font-extrabold'>Tax Links</h3>
                                        <p className="max-md:text-[14px]">Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources..</p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* <!-- Slider controls --> */}
                            <button type="button" class="max-[780px]:block min-[780px]:hidden absolute top-0 max-sm:top-70 max-md:top-20  start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span class="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" class="max-[780px]:block min-[780px]:hidden absolute top-0 max-sm:top-70 max-md:top-20 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                        {/* </div> */}

                        </div>    
                    
                </div>
            </div>

        </div>


    )
}

export default Security;
