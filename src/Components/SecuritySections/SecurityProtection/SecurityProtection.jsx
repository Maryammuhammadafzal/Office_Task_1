import React, {useState , useEffect} from 'react'
import AboutImage from '../../../assets/Images/feature1 (5).png';

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cards = [
    { id: 1, title: 'Advanced Encryption (AES-256)', description: 'All data, including documents, is protected using AES-256 encryption at rest and in transit, ensuring it’s unreadable to unauthorized users for added security.', color: 'bg-blue-500' },
    { id: 2, title: 'Privacy and Compliance', description: 'Easily create a personalized tax profile for tailored tax guidance specific to your financial situation, simplifying tax management and improving accuracy with Ezyiah.', color: 'bg-purple-500' },
    { id: 3, title: 'Privacy Principles (APPs)', description: 'Ezyiah adheres to the Privacy Act 1988 and ATO regulations, ensuring secure processing, storage, and management of all tax-related information for legal compliance.', color: 'bg-green-500' },
    { id: 4, title: 'Privacy Principles (APPs)', description: 'Ensuring responsible data handling. We take your privacy seriously, following strict guidelines to protect personal information and maintain transparency in how your data is used.', color: 'bg-red-500' },
    { id: 5, title: 'Compliance with ATO Regulations', description: 'We strictly follow Australian Taxation Office (ATO) regulations to ensure tax data is securely managed, meeting all legal requirements for processing and storage.', color: 'bg-yellow-500' },
    { id: 6, title: 'Secure File Storage and Sharing', description: 'Documents are protected with end-to-end encryption, customizable folder permissions, and access controls, ensuring only authorized individuals can view, download, or share sensitive information.', color: 'bg-green-500' },
    { id: 7, title: 'Multi-Factor Authentication (2FA)', description: 'Ezyiah undergoes regular third-party audits and vulnerability assessments, ensuring security infrastructure is continuously reviewed, strengthened, and protected against potential threats.', color: 'bg-red-500' },
    { id: 8, title: 'Ongoing Security Audits', description: 'Ezyiah is committed to regularly reviewing and strengthening our security infrastructure. Our platform undergoes third-party security audits and continuous vulnerability assessments to ensure any potential threats are identified and mitigated promptly.', color: 'bg-yellow-500' },
    {
        id: 9, title: 'Real-Time Monitoring & Threat Detection', description: 'Ezyiahs advanced threat detection system monitors activity in real time, identifying risks and taking immediate action to prevent breaches or data loss.', color: 'bg-yellow-500' },
    { id: 10, title: 'Data Retention and Secure Deletion', description: 'Ezyiah complies with Australian privacy laws, storing data only as needed. Once unnecessary, it’s securely deleted to prevent exposure.', color: 'bg-yellow-500' },
];

const SecurityProtection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
      <div className="SecurityProtection w-[97%]  min-h-screen max-sm:w-[95%]  h-full max-lg:items-center bg-gray-100 flex justify-center">
         
          {/* Content Container */}
          <div className="aboutContent py-5 w-[97%] max-lg:w-[95%] max-lg:h-auto max-md:w-full  max-sm:h-[740px] max-md:h-full flex flex-col min-lg:flex-row max-md:flex-col justify-center items-center gap-4">
              {/* Text Section */}
              <div className="text w-1/2 min-w-[40%] flex flex-col gap-2  max-lg:items-center items-start max-lg:w-[80%] max-md:w-[90%]">
                  <h2 className="w-full text-6xl  font-extrabold max-lg:text-center uppercase max-sm:text-4xl">
                      Data Protection Framework
                  </h2>
                  <p className="text-xl w-full max-md:text-base max-lg:text-center max-sm:text-sm">
                      Our security infrastructure is built on the foundation of industry-leading technologies and best practices, ensuring the highest levels of confidentiality, integrity, and availability of your data.</p>
                 
              </div>

              {/* Carousel Section */}
              <div className="aboutCarousel w-[60%] max-lg:w-[100%] h-full  flex p-4 items-center max-md:w-full max-sm:w-[100%] max-md:mt-8">
                  {
                      // Horizontal Swiper for Desktop
                     ( <Swiper
                              direction="horizontal"
                          slidesPerView={1} // Show 2 slides at a time
                          spaceBetween={10} // Add space between slides
                          pagination={{ clickable: true }}
                          modules={[Pagination]}
                          className="w-full h-[500px] " // Fixed height for vertical carousel
                      >
                          {cards.map((card) => (
                              <SwiperSlide key={card.id}>
                                  <div className="border mx-auto  border-[#A4A3A2] p-6 rounded-3xl shadow-md max-sm:w-fit max-sm:h-[450px] space-y-4 w-[390px] max-md:w-[320px] max-md:h-[450px] h-[450px] flex flex-col justify-between items-start">
                                      
                                      <img className="h-28 w-28 min-lg:h-3xl min-lg:w-4xl max-lg:w-auto max-lg:h-auto max-lg:py-3" src={AboutImage} alt="Card icon" />
                                      <div className="flex flex-col gap-3 max-lg:h-[250px] max-sm:h-[350px] max-md:h-[300px] min-lg:h-[250px]">
                                          <h3 className="text-lg font-semibold max-lg:text-2xl max-md:text-xl min-lg:text-3xl max-lg:font-bold max-lg:py-2">
                                              {card.title}
                                          </h3>
                                          <p className="text-sm font-normal leading-5 max-md:text-[14px] max-lg:text-lg min-lg:text-[16px] max-lg:py-2 tracking-wide">
                                             {card.description}  </p>
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

export default SecurityProtection
