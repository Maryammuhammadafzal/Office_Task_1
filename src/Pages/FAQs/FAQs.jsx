import React from 'react'

const FAQs = () => {
  return (
    <div className='w-full min-h-screen h-auto flex items-center justify-center flex-col gap-3 bg-gray-100'>
          <div className="heading w-full h-[40px] my-5 flex justify-center items-center">
              <h2 className='w-fit text-6xl leading-14 font-extrabold uppercase'>FAQs</h2>
          </div>
      <div className="cardBox w-[80%] rounded-3xl max-md:h-auto h-[820px] py-3 gap-2 flex bg-white justify-center items-end">
            <div className="h-[780px] w-[80%] max-md:h-auto flex flex-col max-md:w-[95%]  items-center justify-between">
          <div className="border border-dashed border-black opacity-40 rounded-full min-lg:w-[300px]  min-lg:h-[300px] min-md:w-[200px] min-md:h-[200px] min-sm:w-[150px] min-sm:h-[150px] max-sm:w-[100px] max-sm:h-[100px] w-[150px] h-[150px]"></div>
                  <div className="heading w-full h-[40px] py-3 flex justify-center items-center">
                      <h2 className='w-fit text-3xl  max-sm:text-xl max-md:text-2xl leading-14 font-semibold uppercase'>How Can I Help You</h2>
                  </div>
                  <div className="query w-[80%] flex flex-wrap justify-center gap-3 h-auto">
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>What is Ezyiah?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>Can I Access Ezyiah on Mobile?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>Does Ezyiah Offer Tax Preparation Services?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>Can I Share Documents Securely with My Accountant or Clients?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>Can Ezyiah Provide Tax Guidance Specific to My Situation?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>Is my Data Safe with Ezyiah?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>How do I Get Started with Ezyiah?</p>
                      <p className='text-sm text-black border p-3 rounded-3xl w-auto px-5 text-center'>How Does Ezyiah Help Save Time?</p>

                  </div>
            </div>
            </div>      
    </div>
  )
}

export default FAQs
