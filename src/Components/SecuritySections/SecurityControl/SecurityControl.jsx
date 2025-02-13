import React, {useState , useEffect} from 'react'
import ControlImage1 from "../../../assets/Images/controlImage1.png"
import ControlImage2 from "../../../assets/Images/controlImage2.png"
import ControlImage3 from "../../../assets/Images/controlImage3.png"
import ControlImage4 from "../../../assets/Images/controlImage4.png"

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const featuresCards = [
    { id: 1, title: "AI Tax Guidance", description: "Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs." },
    { id: 2, title: "Reminds & To Do List", description: "Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event." },
    { id: 4, title: "Secure Document Storage", description: "Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security." },
    { id: 3, title: "Tax Links", description: "Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources." },
    { id: 5, title: "Tailored Profile", description: "Easily create a personalised tax profile, allowing Ezyiah to provide tax guidance specific to your unique financial situation." },
    { id: 5, title: "Tax Calculators", description: "Quickly estimate your taxes, deductions, and refunds and more with Ezyiahs built-in financial and tax calculators, making tax planning more accessible and less stressful." },
]
const SecurityControl = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 1024);
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <div className=' bg-gray-100 w-[100%] min-h-screen gap-5 flex justify-center items-center  mx-auto flex-col max-lg:mx-0 transparent'>
            {/* Header */}
            <div className="header w-[100%]  h-[30vh] flex justify-center items-center flex-col  gap-2">
                <h2 className='w-fit text-6xl leading-14 font-extrabold uppercase max-lg:text-center max-sm:text-4xl'>Your Control, Your Privacy</h2>
                <p className='text-xl md:w-[70%] sm:w-[95%] max-[640px]:w-[100%] lg:w-[50%] w-[30%] text-center max-md:text-[16px]'>We are dedicated to maintaining the highest standards of data security. Our comprehensive approach includes industry-standard protections, rigorous compliance measures, and a commitment to data privacy.</p>
            </div>
           
            <div className="content flex flex-col items-center w-full p-2 justify-between gap-y-3 h-auto">

                {/* cards */}
                <div className="cards w-full h-auto flex max-md:hidden justify-center items-center">
                    <div className="grid grid-cols-2 h-auto md:grid-cols-2   min-lg:grid-cols-2 min-xl:grid-cols-2  max-[640px]:hidden min-[1050px]:grid-cols-2 max-[1050px]:grid-cols-2 max-[1050px]:bg-blue-200 gap-4 ">

                        <div className="h-auto w-auto flex flex-col  gap-3">
                            <div className="h-[350px] flex flex-col justify-between  p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[350px]">
                                <img className="h-20 w-20 rounded-lg " src={ControlImage1} alt="featureImage" />
                                <div>
                                    <h3 className='text-2xl font-extrabold'>AI Tax Guidance</h3>
                                    <p>Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>

                                </div>
                            </div>
                            <div className="h-[350px] flex flex-col  p-5 rounded-3xl shadow-md  justify-between  bg-white space-y-4 w-[350px]">
                                <img className="h-20 w-20 p-3 rounded-lg " src={ControlImage2} alt="featureImage" />
                                <div>
                                    <h3 className='text-2xl font-extrabold'>Reminders & To-Do List</h3>
                                    <p>Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event.</p>

                                </div>
                            </div>
                        </div>
                        <div className="h-auto w-auto flex flex-col gap-3">
                            <div className="h-[350px] flex flex-col  p-5 rounded-3xl shadow-md  justify-between  bg-white space-y-4 w-[350px]">
                                <img className="h-20 w-20 p-3 rounded-lg " src={ControlImage3} alt="featureImage" />
                                <div>
                                    <h3 className='text-2xl font-extrabold'>Secure Document Storage</h3>
                                    <p>Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security.</p>

                                </div>
                            </div>
                            <div className="h-[350px] flex flex-col  p-5 rounded-3xl shadow-md justify-between bg-white space-y-4 w-[350px]">
                                <img className="h-20 w-20 p-3 rounded-lg " src={ControlImage4} alt="featureImage" />
                                <div>
                                    <h3 className='text-2xl font-extrabold'>Tax Links</h3>
                                    <p>Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources..</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    {/* Carousel Section */}
                    <div className="aboutCarousel w-[60%] max-lg:w-[100%] min-md:hidden h-full justify-center  flex p-4 items-center max-md:w-full max-sm:w-[100%] max-md:mt-8">
                        {
                            // Horizontal Swiper for Desktop
                            (<Swiper
                                direction="horizontal"
                                slidesPerView={1} // Show 2 slides at a time
                                spaceBetween={20} // Add space between slides
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="w-full h-[470px] " // Fixed height for vertical carousel
                            >
                                {featuresCards.map((card) => (
                                    <SwiperSlide key={card.id} >
                                        <div className="h-[350px] max-sm:h-fit max-sm:w-[95%] flex flex-col justify-between max-sm:gap-5 mx-auto p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[350px]">
                                           <div className='w-full h-[150px]'>
                                                <img className="h-20 w-20 rounded-lg " src={ControlImage1} alt="featureImage" />
                                           </div>
                                            <div className='max-sm:h-auto'>
                                                <h3 className='text-2xl font-extrabold'>AI Tax Guidance</h3>
                                                <p>Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            )}
                    </div>
            </div>

        </div>
    )
}

export default SecurityControl
