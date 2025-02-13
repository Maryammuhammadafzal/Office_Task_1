import React from 'react'
import AcheivementImage1 from "../../assets/Images/users-plus 2.png"
import AcheivementImage2 from "../../assets/Images/message-bubble-user 1.png"
import AcheivementImage3 from "../../assets/Images/sack-dollar 1.png"
import AcheivementImage4 from "../../assets/Images/file-shield 2.png"
const Achievements = () => {
  return (
    <div className='w-full min-h-screen  bg-gray-100  flex justify-center max-sm:justify-center flex-col items-center'>
          <div className="text-center h-[100px] z-10 w-[50%]  max-sm:w-[80%] max-md:w-[70%] max-lg:w-[60%]">
              <h1 className="text-6xl font-extrabold text-black max-sm:text-4xl min-sm:text-5xl leading-14 ">
                  Our Achievements
              </h1>
          </div>
          <div className="cards w-full  py-3 gap-2 max-xl:gap-0 flex flex-wrap max-lg:hidden  justify-center items-center">
             <div className="cardBox flex h-[500px] justify-center items-end">
                  <div className="card bg-white rounded-full flex-col gap-3 w-[350px] h-[350px] max-xl:w-[250px] max-xl:h-[250px] max-2xl:w-[300px] max-2xl:h-[300px] flex justify-center items-center">
                      <img src={AcheivementImage1} alt="placeholder" />
                      <h3 className='text-3xl text-center text-indigo-500 font-bold'>5,000</h3>
                      <p className='text-sm text-center'>Active Users</p>
                  </div>
             </div>
              <div className="cardBox flex h-[500px] justify-center items-start">
                  <div className="card bg-white rounded-full flex-col gap-3 w-[350px] h-[350px] max-xl:w-[250px] max-xl:h-[250px] max-2xl:w-[300px] max-2xl:h-[300px] flex justify-center items-center">
                      <img src={AcheivementImage2} alt="placeholder"  />
                      <h3 className='text-3xl text-center text-indigo-500 font-bold'>17,000+</h3>
                      <p className='text-sm text-center'>Questions Answered</p>
                  </div>
             </div>
              <div className="cardBox flex h-[500px] justify-center items-end">
                  <div className="card bg-white rounded-full flex-col gap-3 w-[350px] h-[350px] max-xl:w-[250px] max-xl:h-[250px] max-2xl:w-[300px] max-2xl:h-[300px] flex justify-center items-center">
                      <img src={AcheivementImage3} alt="placeholder"  />
                      <h3 className='text-3xl text-center text-indigo-500 font-bold'>40%</h3>
                      <p className='text-sm text-center'>Professional Costs Cut Down</p>
                  </div>
             </div>
              <div className="cardBox flex h-[500px] justify-center items-start">
                  <div className="card bg-white rounded-full flex-col gap-3 w-[350px] h-[350px] max-xl:w-[250px] max-xl:h-[250px] max-2xl:w-[300px] max-2xl:h-[300px] flex justify-center items-center">
                      <img src={AcheivementImage4} alt="placeholder"  />
                      <h3 className='text-3xl text-center text-indigo-500 font-bold'>20,000+</h3>
                      <p className='text-sm text-center'>Files Securely Stored</p>
                  </div>
             </div>
          </div>

          <div id="controls-carousel" class="relative w-full flex  max-lg:block min-lg:hidden justify-center items-center h-[500px]" data-carousel="static">
                                      {/* <!-- Carousel wrapper --> */}
                                      <div className="relative h-[500px]  w-full  rounded-lg flex justify-center items-center">
                                          {/* <!-- Card 1 --> */}
                                          <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                              <div className="p-5 rounded-3xl  shadow-md bg-white space-y-4 w-[400px] absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                  <img className="h-auto max-w-full rounded-lg " src={AcheivementImage1} alt="AcheivementImage1" />
                                                      <h3 className='text-2xl font-extrabold'>AI Tax Guidance</h3>
                                                      <p>Ezyiah, your intelligent tax assistant, delivers personalised and reliable guidance, backed by real and current tax resources, tailored to your unique needs.</p>
                                              </div>
                                          </div>
                                          {/* <!-- Card 2 --> */}
                                          <div className="hidden duration-700 ease-in-out w-full" data-carousel-item="active">
                                              <div className="rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 transform -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                                  <img className="h-auto max-w-full p-3 rounded-lg " src={AcheivementImage1} alt="AcheivementImage1" />
                                                  <h3 className='text-2xl font-extrabold'>Reminders & To-Do List</h3>
                                                  <p>Stay on top of deadlines and important tasks with automated reminders and to-do lists, ensuring you never miss a crucial tax-related event.</p>
                                              </div>
                                          </div>
                                          {/* <!-- Card 3 --> */}
                                          <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                              <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                                  <img className="h-auto  max-w-full p-3 rounded-lg " src={AcheivementImage1} alt="AcheivementImage1" />
                                                  <h3 className='text-2xl font-extrabold'>Secure Document Storage</h3>
                                                  <p >Effortlessly manage, organise, and store your tax and financial documents securely. Ezyiah provides encrypted folders and file sharing, ensuring privacy and security.</p>
                                              </div>
                                          </div>
                                          {/* <!-- Card 4 --> */}
                                          <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                              <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                                  <img className="h-auto max-w-full pb-15 rounded-lg " src={AcheivementImage1} alt="AcheivementImage1" />
                                                  <h3 className='text-2xl font-extrabold'>Tax Links</h3>
                                                  <p>Easily access frequently used tax, financial, and regulatory links, and add your own custom links for quick access to relevant resources..</p>
                                              </div>
                                          </div>
                                          {/* <!-- Card 5 --> */}
                                          <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                              <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                                  <img className="h-auto max-w-full pb-7 rounded-lg " src={AcheivementImage1} alt="AcheivementImage1" />
                                                  <h3 className='text-2xl font-extrabold'>Tailored Profile</h3>
                                                  <p>Easily create a personalised tax profile, allowing  Ezyiah to provide tax guidance specific to your unique financial situation.</p>
                                              </div>
                                          </div>
                                          <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                                              <div className="p-5 rounded-3xl shadow-md absolute block max-w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white space-y-4 w-[400px]">
                                                  <img className="h-auto max-w-full pb-10 rounded-lg " src={AcheivementImage1} alt="AcheivementImage1" />
                                                  <h3 className='text-2xl font-extrabold'>Tax Calculators</h3>
                                                  <p>Quickly estimate your taxes, deductions, and refunds and more with Ezyiah’s built-in financial and tax calculators, making tax planning more accessible and less stressful.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* <!-- Slider controls --> */}
                                      <button type="button" class="max-lg:block min-lg:hidden absolute max-sm:top-40 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                              </svg>
                                              <span class="sr-only">Previous</span>
                                          </span>
                                      </button>
              <button type="button" class="max-lg:block min-lg:hidden absolute top-0 max-sm:top-40 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                              </svg>
                                              <span class="sr-only">Next</span>
                                          </span>
                                      </button>
                                  </div>
      
    </div>
  )
}

export default Achievements
