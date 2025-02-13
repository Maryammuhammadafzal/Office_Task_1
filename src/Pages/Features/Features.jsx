import React from 'react'
import Feature1 from "../../assets/Images/feature1 (1).png"
import Feature2 from "../../assets/Images/feature1 (2).png"
import Feature4 from "../../assets/Images/feature1 (3).png"
import Feature6 from "../../assets/Images/feature1 (4).png"
import Feature3 from "../../assets/Images/feature1 (5).png"
import Feature5 from "../../assets/Images/feature1 (6).png"

const featuresCards = [
  { id: 1, title: "AI Tax Guidance", description: "Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs." },
  { id: 2, title: "Reminds & To Do List", description: "Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event." },
  { id: 4, title: "Secure Document Storage", description: "Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security." },
  { id: 3, title: "Tax Links", description: "Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources." },
  { id: 5, title: "Tailored Profile", description: "Easily create a personalised tax profile, allowing Ezyiah to provide tax guidance specific to your unique financial situation." },
  { id: 5, title: "Tax Calculators", description: "Quickly estimate your taxes, deductions, and refunds and more with Ezyiahs built-in financial and tax calculators, making tax planning more accessible and less stressful." },
];
const Features = () => {
  // document.addEventListener("DOMContentLoaded", function () {
  //   const carousel = new Carousel(document.querySelector("#cards"), {
  //     interval: 3000, // Auto-slide every 3 seconds
  //   });
  // });

  return (
    <div className=' bg-gray-100 w-[100%] h-auto flex justify-center items-center overflow-hidden mx-auto flex-col max-lg:mx-0 transparent'>
      {/* Header */}
      <div className="header w-[100%]  h-[30vh] flex justify-center items-center flex-col  gap-2">
        <h2 className='w-fit text-6xl leading-14 font-extrabold uppercase'>Features</h2>
        <p className='text-xl md:w-[70%] sm:w-[95%] max-[640px]:w-[100%] lg:w-[50%] w-[30%] text-center max-md:text-[16px]'>Ezyiah is designed to support everyone, offering tailored guidance for all your tax and financial needs.</p>
      </div>
      {/* Switch Tabs */}
      <div className="content flex flex-col items-center w-full p-2 justify-between gap-y-3 h-auto">
        <div className="tabs w-[60%] max-lg:w-[80%] max-md:w-[95%] max-sm:w-[100%] h-18 flex items-center justify-center gap-2 px-3 max-md:p-0 rounded-[40px] bg-white">
          <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Individual</button>
          <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Business</button>
          <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Tax Professionals</button>
        </div>
        {/* cards */}
        <div className="cards w-full h-auto flex justify-center items-center">
          <div className="grid grid-cols-3 h-auto md:grid-cols-1  max-lg:hidden min-lg:grid-cols-2 min-xl:grid-cols-3  max-[640px]:hidden min-[1050px]:grid-cols-3 max-[1050px]:grid-cols-2 max-[1050px]:bg-blue-200 gap-4 ">

            <div className="h-auto w-auto flex flex-col  gap-3">
              <div className="h-fit p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[400px]">
                <img className="h-auto max-w-full rounded-lg " src={Feature1} alt="featureImage" />
                <h3 className='text-2xl font-extrabold'>AI Tax Guidance</h3>
                <p>Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>
              </div>
              <div className="h-fit p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[400px]">
                <img className="h-auto max-w-full p-3 rounded-lg " src={Feature2} alt="featureImage" />
                <h3 className='text-2xl font-extrabold'>Reminders & To-Do List</h3>
                <p>Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event.</p>
              </div>
            </div>
            <div className="h-auto w-auto flex flex-col gap-3">
              <div className="h-fit p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[400px]">
                <img className="h-auto pb-20 max-w-full p-3 rounded-lg " src={Feature5} alt="featureImage" />
                <h3 className='text-2xl font-extrabold'>Secure Document Storage</h3>
                <p>Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security.</p>
              </div>
              <div className="h-fit p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[400px]">
                <img className="h-auto max-w-full py-6 rounded-lg " src={Feature4} alt="featureImage" />
                <h3 className='text-2xl font-extrabold'>Tax Links</h3>
                <p>Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources..</p>
              </div>
            </div>
            <div className="h-auto w-auto flex flex-col min-xl:flex min-lg:hidden gap-3">
              <div className="h-fit p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[400px]">
                <img className="h-auto max-w-full py-7 rounded-lg " src={Feature3} alt="featureImage" />
                <h3 className='text-2xl font-extrabold'>Tailored Profile</h3>
                <p>Easily create a personalised tax profile, allowing  Ezyiah to provide tax guidance specific to your unique financial situation.</p>
              </div>
              <div className="h-fit p-5 rounded-3xl shadow-md  bg-white space-y-4 w-[400px]">
                <img className="h-auto max-w-full py-[26px] rounded-lg " src={Feature6} alt="featureImage" />
                <h3 className='text-2xl font-extrabold'>Tax Calculators</h3>
                <p>Quickly estimate your taxes, deductions, and refunds and more with Ezyiah’s built-in financial and tax calculators, making tax planning more accessible and less stressful.</p>
              </div>
            </div>
          </div>

          {/* Carousel */}


          <div id="controls-carousel" class="relative h-[500px] max-lg:block hidden w-[100%]" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-[500px] my-3 w-full overflow-hidden rounded-lg flex justify-center items-center">
              {/* <!-- Card 1 --> */}
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                <div className="p-5 rounded-3xl  shadow-md bg-white space-y-4 w-[400px] absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <img className="h-auto max-w-full rounded-lg " src={Feature1} alt="featureImage" />
                  <div className="cardContent">
                    <h3 className='text-2xl font-extrabold'>AI Tax Guidance</h3>
                    <p>Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>

                  </div>
                    </div>
                 </div>
              {/* <!-- Card 2 --> */}
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item="active">
                <div className="rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 transform -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                  <img className="h-auto max-w-full p-3 rounded-lg " src={Feature2} alt="featureImage" />
                  <h3 className='text-2xl font-extrabold'>Reminders & To-Do List</h3>
                  <p>Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event.</p>
                </div>
                  </div>
              {/* <!-- Card 3 --> */}
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                  <img className="h-auto  max-w-full p-3 rounded-lg " src={Feature5} alt="featureImage" />
                  <h3 className='text-2xl font-extrabold'>Secure Document Storage</h3>
                  <p>Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security.</p>
                </div>
                  </div>
              {/* <!-- Card 4 --> */}
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                  <img className="h-auto max-w-full pb-15 rounded-lg " src={Feature4} alt="featureImage" />
                  <h3 className='text-2xl font-extrabold'>Tax Links</h3>
                  <p>Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources..</p>
                </div>
                 </div>
              {/* <!-- Card 5 --> */}
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                  <img className="h-auto max-w-full pb-7 rounded-lg " src={Feature3} alt="featureImage" />
                  <h3 className='text-2xl font-extrabold'>Tailored Profile</h3>
                  <p>Easily create a personalised tax profile, allowing  Ezyiah to provide tax guidance specific to your unique financial situation.</p>
                </div>
                 </div>
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                  <img className="h-auto max-w-full pb-10 rounded-lg " src={Feature6} alt="featureImage" />
                  <h3 className='text-2xl font-extrabold'>Tax Calculators</h3>
                  <p>Quickly estimate your taxes, deductions, and refunds and more with Ezyiah’s built-in financial and tax calculators, making tax planning more accessible and less stressful.</p>
                </div>
                 </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Features
