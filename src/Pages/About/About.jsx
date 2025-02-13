// import React from 'react'
// import Button2 from '../Button2/Button2'
// import Button from '../Button/Button'
// import border from "../../assets/Images/Subtract.png"
import Carousel from '../../Components/Carousel/Carousel'
// import AboutImage from "../../assets/Images/Card_Image.png";

// const cards = [
//   { id: 1, title: "01", color: "bg-blue-500" },
//   { id: 2, title: "02", color: "bg-purple-500" },
//   { id: 3, title: "03", color: "bg-green-500" },
//   { id: 4, title: "04", color: "bg-red-500" },
//   { id: 5, title: "05", color: "bg-yellow-500" },
//   { id: 6, title: "06", color: "bg-yellow-500" },
// ];
// const About = () => {
//   return (
//     <div className=' relative bg-gray-100 w-[100%] h-auto flex justify-center items-center overflow-hidden mx-auto max-md:mx-0 transparent'>
//       <div className="box max-sm:w-[95%] min-md:w-[90%] h-full flex justify-center ">
//         <img src={border} className='w-full h-[743px] max-md:h-[1000px] max-sm:h-[743px]  relative' alt="box" />
//         <div className='aboutContent absolute w-[80%] max-lg:w-[98%]  max-sm:h-[700px] max-md:flex-col  justify-between items-center flex gap-2'>
//           <div className="text w-1/2 min-w-[344px] flex flex-col gap-3 justify-center items-center max-h-[220px] max-md:w-[90%]">
//             <h2 className='w-full text-6xl leading-14 font-extrabold text-center uppercase max-sm:text-4xl '>Why ezyiah</h2>
//             <p className='text-xl  w-full max-md:text-[16px] text-center max-sm:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque voluptate distinctio soluta? Maiores saepe totam hic itaque dignissimos eos sunt labore libero quibusdam quia, nostrum aspernatur distinctio debitis laudantium.</p>
//             <div className="buttons w-full mt-2 justify-center flex gap-2">
//               <Button2 px="7" />
//               <Button title="Security" />
//             </div>
//           </div>
//           <div className="aboutCarousel  max-sm:min-w-[345px] max-sm:min-h-[358px] w-1/2 h-full flex justify-center min-[780px]:block max-[780px]:hidden  items-center max-md:mt-4 max-md:w-[100%]">
//             <Carousel />
//           </div>
//           <div id="controls-carousel" class="relative bg-amber-200 flex max-sm:min-w-[345px] max-sm:min-h-[400px]  justify-center items-center " data-carousel="static">
//             {/* <!-- Carousel wrapper --> */}
//             <div className="relative h-full max-[780px]:block min-[780px]:hidden w-full  rounded-4xl flex justify-center items-center">
//               {/* <!-- Card 1 --> */}
//               <div key={cards.id} className="hidden duration-700 ease-in-out h-full w-full" data-carousel-item>
//                 <div className="border border-[#A4A3A2] p-5 rounded-3xl  shadow-md bg-white space-y-4 w-full absolute  flex-col justify-between items-start max-w-full h-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div className="cardID min-w-[37px] min-h-[34px] flex text-indigo-400 text-5xl font-extrabold">{cards[0].title}</div>
//                   <img className="h-[48px] w-[48px] " src={AboutImage} alt="AboutImage" />
//                   <div className='flex min-h-[95px] h-auto min-w-[292px] flex-col gap-3'>
//                     <h3 className='text-[16px] h-[24px] w-[292px] leading-6 font-[poppins] font-semibold'>AI Tax Guidance</h3>
//                     <p className='font-[inter] w-[292px] h-[63px] font-normal leading-5 tracking-wide'>Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>

//                   </div>
//                   </div>
//               </div>
//               {/* <!-- Card 2 --> */}
//               <div key={cards.id} className="hidden duration-700 ease-in-out h-full w-full" data-carousel-item>
//                 <div className="border border-[#A4A3A2] p-5 rounded-3xl  shadow-md bg-white space-y-4 w-full absolute  flex-col justify-between items-start max-w-full h-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div className="cardID min-w-[37px] min-h-[34px] flex text-indigo-400 text-5xl font-extrabold">{cards[0].title}</div>
//                   <img className="h-[48px] w-[48px] " src={AboutImage} alt="AboutImage" />
//                   <div className='flex min-h-[95px] h-auto min-w-[292px] flex-col gap-3'>
//                     <h3 className='text-[16px] h-[24px] w-[292px] leading-6 font-[poppins] font-semibold'>Reminders & To-Do List</h3>
//                     <p className='font-[inter] w-[292px] h-[63px] font-normal leading-5 tracking-wide'>Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event.</p>

//                   </div>
//                   </div>
//               </div>
//               {/* <!-- Card 3 --> */}
//               <div key={cards.id} className="hidden duration-700 ease-in-out h-full w-full" data-carousel-item>
//                 <div className="border border-[#A4A3A2] p-5 rounded-3xl  shadow-md bg-white space-y-4 w-full absolute  flex-col justify-between items-start max-w-full h-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div className="cardID min-w-[37px] min-h-[34px] flex text-indigo-400 text-5xl font-extrabold">{cards[0].title}</div>
//                   <img className="h-[48px] w-[48px] " src={AboutImage} alt="AboutImage" />
//                   <div className='flex min-h-[95px] h-auto min-w-[292px] flex-col gap-3'>
//                     <h3 className='text-[16px] h-[24px] w-[292px] leading-6 font-[poppins] font-semibold'>Secure Document Storage</h3>
//                     <p className='font-[inter] w-[292px] h-[63px] font-normal leading-5 tracking-wide'>Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security.</p>

//                   </div>
//                   </div>
//               </div>
//               {/* <!-- Card 4 --> */}
//               <div key={cards.id} className="hidden duration-700 ease-in-out h-full w-full" data-carousel-item>
//                 <div className="border border-[#A4A3A2] p-5 rounded-3xl  shadow-md bg-white space-y-4 w-full absolute  flex-col justify-between items-start max-w-full h-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div className="cardID min-w-[37px] min-h-[34px] flex text-indigo-400 text-5xl font-extrabold">{cards[0].title}</div>
//                   <img className="h-[48px] w-[48px] " src={AboutImage} alt="AboutImage" />
//                   <div className='flex min-h-[95px] h-auto min-w-[292px] flex-col gap-3'>
//                     <h3 className='text-[16px] h-[24px] w-[292px] leading-6 font-[poppins] font-semibold'>Tax Links</h3>
//                     <p className='font-[inter] w-[292px] h-[63px] font-normal leading-5 tracking-wide'>Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources.</p>

//                   </div>
//                   </div>
//               </div>
//               {/* <!-- Card 5 --> */}
//               <div key={cards.id} className="hidden duration-700 ease-in-out h-full w-full" data-carousel-item>
//                 <div className="border border-[#A4A3A2] p-5 rounded-3xl  shadow-md bg-white space-y-4 w-full absolute  flex-col justify-between items-start max-w-full h-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div className="cardID min-w-[37px] min-h-[34px] flex text-indigo-400 text-5xl font-extrabold">{cards[0].title}</div>
//                   <img className="h-[48px] w-[48px] " src={AboutImage} alt="AboutImage" />
//                   <div className='flex min-h-[95px] h-auto min-w-[292px] flex-col gap-3'>
//                     <h3 className='text-[16px] h-[24px] w-[292px] leading-6 font-[poppins] font-semibold'>Tailored Profile</h3>
//                     <p className='font-[inter] w-[292px] h-[63px] font-normal leading-5 tracking-wide'>Easily create a personalised tax profile, allowing  Ezyiah to provide tax guidance specific to your unique financial situation.</p>

//                   </div>
//                   </div>
//               </div>
//               <div key={cards.id} className="hidden duration-700 ease-in-out h-full w-full" data-carousel-item>
//                 <div className="border border-[#A4A3A2] p-5 rounded-3xl  shadow-md bg-white space-y-4 w-full absolute  flex-col justify-between items-start max-w-full h-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div className="cardID min-w-[37px] min-h-[34px] flex text-indigo-400 text-5xl font-extrabold">{cards[0].title}</div>
//                   <img className="h-[48px] w-[48px] " src={AboutImage} alt="AboutImage" />
//                   <div className='flex min-h-[95px] h-auto min-w-[292px] flex-col gap-3'>
//                     <h3 className='text-[16px] h-[24px] w-[292px] leading-6 font-[poppins] font-semibold'>Tax Calculators</h3>
//                     <p className='font-[inter] w-[292px] h-[63px] font-normal leading-5 tracking-wide'>Quickly estimate your taxes, deductions, and refunds and more with Ezyiah’s built-in financial and tax calculators, making tax planning more accessible and less stressful.</p>

//                   </div>
//                   </div>
//               </div>
//             </div>
//             {/* <!-- Slider controls --> */}
//             <button type="button" class="max-[780px]:block min-[780px]:hidden absolute top-0 max-sm:top-15 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//               <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                 <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//                 </svg>
//                 <span class="sr-only">Previous</span>
//               </span>
//             </button>
//             <button type="button" class="max-[780px]:block min-[780px]:hidden absolute top-0 max-sm:top-15 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//               <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                 <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//                 </svg>
//                 <span class="sr-only">Next</span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About

// import React from 'react';
// import Button2 from '../Button2/Button2';
// import Button from '../Button/Button';
// import border from '../../assets/Images/Subtract.png';
// import AboutImage from '../../assets/Images/Card_Image.png';

// // Import Swiper styles and modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const cards = [
//   { id: 1, title: '01', description: 'AI Tax Guidance', color: 'bg-blue-500' },
//   { id: 2, title: '02', description: 'Reminders & To-Do List', color: 'bg-purple-500' },
//   { id: 3, title: '03', description: 'Secure Document Storage', color: 'bg-green-500' },
//   { id: 4, title: '04', description: 'Tax Links', color: 'bg-red-500' },
//   { id: 5, title: '05', description: 'Tailored Profile', color: 'bg-yellow-500' },
//   { id: 6, title: '06', description: 'Tax Calculators', color: 'bg-yellow-500' },
// ];

// const About = () => {
//   return (
//     <div className="relative bg-gray-100 w-full h-auto flex justify-center items-center overflow-hidden mx-auto">
//       <div className="box w-[90%] max-sm:w-[95%] h-full flex justify-center">
//         {/* Background Border Image */}
//         <img
//           src={border}
//           className="w-full h-[745px] max-lg:h-[800px] max-md:h-[790px] max-sm:h-[810px] relative"
//           alt="Decorative border"
//         />

//         {/* Content Container */}
//         <div className="aboutContent absolute top-6.5  py-5 w-[80%] max-lg:w-[93%] max-md:w-[87%] max-sm:h-[740px] max-md:h-[730px] flex flex-col min-lg:flex-row max-md:flex-col justify-center items-center gap-4">
//           {/* Text Section */}
//           <div className="text w-1/2 min-w-[300px] flex flex-col gap-2 justify-center items-center max-lg:w-[80%] max-md:w-[90%]">
//             <h2 className="w-full text-6xl leading-tight font-extrabold text-center uppercase max-sm:text-4xl">
//               Why ezyiah
//             </h2>
//             <p className="text-xl w-full max-md:text-base text-center max-sm:text-sm">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque voluptate distinctio soluta? Maiores saepe totam hic itaque dignissimos eos sunt labore libero quibusdam quia, nostrum aspernatur distinctio debitis laudantium.
//             </p>
//             <div className="buttons w-full mt-4 flex justify-center gap-4">
//               <Button2 px="7" />
//               <Button title="Security" />
//             </div>
//           </div>

//           {/* Carousel Section */}
//           <div className="aboutCarousel w-1/2 max-lg:w-[95%] h-full flex gap-2 justify-center items-center max-md:w-full max-md:mt-8">
//             <Swiper
//               direction={window.innerWidth <= 1024 ? 'horizontal' : 'vertical'} // Horizontal on mobile, vertical on desktop
//               pagination={{ clickable: true }}
//               modules={[Pagination]}
//               className="w-full h-full"
//             >
//               {cards.map((card) => (
//                 <SwiperSlide key={card.id}>
//                   <div className="border border-[#A4A3A2]  p-6 rounded-3xl shadow-md bg-white space-y-4 w-full h-full flex flex-col justify-between items-start">
//                     <div className="cardID text-indigo-400 text-5xl font-extrabold">
//                       {card.title}
//                     </div>
//                     <img className="h-12 w-12 max-lg:w-14 max-lg:h-14 max-lg:py-3" src={AboutImage} alt="Card icon" />
//                     <div className="flex flex-col gap-3 max-lg:h-[180px]">
//                       <h3 className="text-lg font-semibold max-lg:text-3xl max-lg:font-bold max-lg:py-2">{card.description}</h3>
//                       <p className="text-sm font-normal leading-5 max-lg:text-lg max-lg:py-2">
//                         Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.
//                       </p>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useEffect, useState } from 'react';
import Button2 from '../../Components/Button2/Button2';
import Button from '../../Components/Button/Button';
import border from '../../assets/Images/Subtract.png';
import AboutImage from '../../assets/Images/Card_Image.png';

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cards = [
  { id: 1, title: '01', description: 'AI Tax Guidance', color: 'bg-blue-500' },
  { id: 2, title: '02', description: 'Reminders & To-Do List', color: 'bg-purple-500' },
  { id: 3, title: '03', description: 'Secure Document Storage', color: 'bg-green-500' },
  { id: 4, title: '04', description: 'Tax Links', color: 'bg-red-500' },
  { id: 5, title: '05', description: 'Tailored Profile', color: 'bg-yellow-500' },
  { id: 6, title: '06', description: 'Tax Calculators', color: 'bg-yellow-500' },
];

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative bg-gray-100 w-full min-h-screen flex justify-center items-center overflow-hidden mx-auto">
      <div className="box w-[90%] max-sm:w-[95%] h-full flex justify-center">
        {/* Background Border Image */}
        <img
          src={border}
          className="w-full h-[745px] max-lg:h-[800px] max-md:h-[790px] max-sm:h-[810px] relative"
          alt="Decorative border"
        />

        {/* Content Container */}
        <div className="aboutContent absolute top-10 min-lg:top-42 py-5 w-[80%] max-lg:w-[93%] max-md:w-[87%] max-sm:h-[740px] max-md:h-[730px] flex flex-col min-lg:flex-row max-md:flex-col justify-center items-center gap-4">
          {/* Text Section */}
          <div className="text w-1/2 min-w-[300px] flex flex-col gap-2 justify-center items-center max-lg:w-[80%] max-md:w-[90%]">
            <h2 className="w-full text-6xl leading-tight font-extrabold text-center uppercase max-sm:text-4xl">
              Why ezyiah
            </h2>
            <p className="text-xl w-full max-md:text-base text-center max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque voluptate distinctio soluta? Maiores saepe totam hic itaque dignissimos eos sunt labore libero quibusdam quia, nostrum aspernatur distinctio debitis laudantium.
            </p>
            <div className="buttons w-full mt-4 flex justify-center gap-4">
              <Button2 px="7" />
              <Button title="Security" />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="aboutCarousel w-1/2 max-lg:w-[50%] h-full flex gap-3 justify-center items-center max-md:w-[70%] max-sm:w-[90%] max-md:mt-8">
            {isMobile ? (
              // Horizontal Swiper for Mobile
              <Swiper
                direction="horizontal"
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="w-full h-full"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="border border-[#A4A3A2] p-6 rounded-3xl shadow-md bg-white space-y-4 w-full h-full flex flex-col justify-between items-start">
                      <div className="cardID text-indigo-400 text-5xl font-extrabold">
                        {card.title}
                      </div>
                      <img className="h-12 w-12 max-lg:w-14 max-lg:h-14 max-lg:py-3" src={AboutImage} alt="Card icon" />
                      <div className="flex flex-col gap-3 max-lg:h-[200px]">
                        <h3 className="text-lg font-semibold max-lg:text-3xl max-lg:font-bold max-lg:py-2">
                          {card.description}
                        </h3>
                        <p className="text-sm font-normal leading-5 max-md:text-[14px] max-lg:text-lg max-lg:py-2">
                          Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Vertical Swiper for Desktop
              <Swiper
                direction="vertical"
                slidesPerView={1} // Show 2 slides at a time
                spaceBetween={20} // Add space between slides
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="w-full h-[500px] " // Fixed height for vertical carousel
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="border mx-auto min-lg:w-[400px] border-[#A4A3A2] p-6 rounded-3xl shadow-md bg-white space-y-4 w-full h-[500px] flex flex-col justify-between items-start">
                      <div className="cardID text-indigo-400 text-5xl font-extrabold">
                        {card.title}
                      </div>
                      <img className="h-12 w-14 min-lg:h-16 min-lg:w-20 max-lg:w-16 max-lg:h-14 max-lg:py-3" src={AboutImage} alt="Card icon" />
                      <div className="flex flex-col gap-3 max-lg:h-[180px] min-lg:h-[200px]">
                        <h3 className="text-lg font-semibold max-lg:text-3xl min-lg:text-4xl max-lg:font-bold max-lg:py-2">
                          {card.description}
                        </h3>
                        <p className="text-sm font-normal leading-5 max-lg:text-lg min-lg:text-[20px] max-lg:py-2 tracking-wide">
                          Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;