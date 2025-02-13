import React, {useState , useEffect} from 'react'
import ResponseImage from "../../../assets/Images/file-shield 2.png"
// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cards = [
  {
    title: "Incident Response",
    description: "At Ezyiah, we prioritise the safety of your data. Our dedicated incident response team is equipped to handle security incidents promptly and effectively. In the unlikely event of a breach, we activate our comprehensive incident response plan to minimise impact and resolve issues swiftly, ensuring uninterrupted service for our users.",
    image: ResponseImage,
    
  },
  {
    title: "Incident Response",
    description: "At Ezyiah, we prioritise the safety of your data. Our dedicated incident response team is equipped to handle security incidents promptly and effectively. In the unlikely event of a breach, we activate our comprehensive incident response plan to minimise impact and resolve issues swiftly, ensuring uninterrupted service for our users.",
    image: ResponseImage,
    
  }
]
const SecurityResponse = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=' w-[90%] min-h-screen flex max-md:flex-col max-md:gap-3 max-md:w-full justify-center items-center'>
          <div className="text w-1/2 min-w-[50%] flex  justify-center gap-2  items-center max-lg:w-[80%] max-md:w-[90%]">
              <h2 className="w-full text-6xl text-start max-md:text-center px-2 font-extrabold  uppercase max-sm:text-4xl">
                  Incident Response and Data Recovery
              </h2>
              
          </div>
          <div className="cards max-sm:hidden w-1/2 h-auto flex max-md:flex-row max-md:w-[95%] flex-col gap-4 max-md:gap-2 justify-center items-center">
        <div className="border border-[#A4A3A2] p-6 rounded-3xl shadow-md space-y-4 w-[400px] max-md:w-[50%] h-[400px] max-md:h-[450px] flex flex-col justify-between items-start ">
                                      
          <img className="h-12 w-12 max-lg:w-auto max-lg:h-auto max-lg:py-3" src={ResponseImage} alt="Card icon" />
                                      <div className="flex flex-col gap-3 max-lg:h-auto">
                                          <h3 className="text-lg font-bold max-lg:text-3xl max-lg:font-bold max-lg:py-2">
                          Incident Response
                                          </h3>
                                          <p className="text-sm font-normal leading-5 max-md:text-[14px] max-lg:text-[16px] max-lg:py-2">
                                         At Ezyiah, we prioritise the safety of your data. Our dedicated incident response team is equipped to handle security incidents promptly and effectively. In the unlikely event of a breach, we activate our comprehensive incident response plan to minimise impact and resolve issues swiftly, ensuring uninterrupted service for our users.  </p>
                                      </div>
                                  </div>
        <div className="border border-[#A4A3A2] p-6 rounded-3xl shadow-md space-y-4 w-[400px] h-[400px] max-md:w-[50%]  max-md:h-[450px]  flex flex-col justify-between items-start">
                                      
                                      <img className="h-12 w-12 max-lg:w-auto max-lg:h-auto max-lg:py-3" src={ResponseImage} alt="Card icon" />
                                      <div className="flex flex-col gap-3 max-lg:h-auto">
                                          <h3 className="text-lg font-bold max-lg:text-3xl max-lg:font-bold max-lg:py-2">
                          Incident Response
                                          </h3>
                                          <p className="text-sm font-normal leading-5 max-md:text-[14px] max-lg:text-[16px] max-lg:py-2">
                                         At Ezyiah, we prioritise the safety of your data. Our dedicated incident response team is equipped to handle security incidents promptly and effectively. In the unlikely event of a breach, we activate our comprehensive incident response plan to minimise impact and resolve issues swiftly, ensuring uninterrupted service for our users.  </p>
                                      </div>
                                  </div>
          </div>
      

      {/* Carousel Section */}
      <div className="aboutCarousel min-sm:hidden w-[60%] max-lg:w-[100%] h-full  flex p-4 items-center max-md:w-full max-sm:w-[90%] max-md:mt-8">
        {
          // Horizontal Swiper for Desktop
          (<Swiper
            direction="horizontal"
            slidesPerView={1} // Show 2 slides at a time
            spaceBetween={10} // Add space between slides
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full h-[500px] max-[360px]:h-[550px]" // Fixed height for vertical carousel
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="border mx-auto  border-[#A4A3A2] p-6 rounded-3xl shadow-md  max-sm:h-fit max-sm:w-[95%] space-y-4 w-[390px] max-md:w-[320px] max-md:h-[400px] h-[450px] flex flex-col justify-between items-start">

                  <img className="h-28 w-28 min-lg:h-3xl min-lg:w-4xl max-lg:w-auto max-lg:h-auto max-lg:py-3" src={card.image} alt="Card icon" />
                  <div className="flex flex-col gap-2 max-lg:h-[180px] max-sm:justify-center max-sm:h-fit min-lg:h-[200px]">
                    <h3 className="text-lg font-semibold max-lg:text-2xl max-md:text-xl min-lg:text-3xl max-lg:font-bold max-lg:py-2">
                      {card.title}
                    </h3>
                    <p className="text-sm font-normal leading-5 max-md:text-[14px] max-lg:text-lg min-lg:text-[16px] max-lg:py-2  tracking-wide">
                      {card.description}  </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          )}
      </div>
    </div>
  )
}

export default SecurityResponse
