import React from 'react'
// import Button2 from '../../../Components/Button2/Button2'
import PricingTable from '../../../Components/PricingTable/PricingTable'
import Check from "../../../assets/Images/check.png"

const PricingSection = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-3 overflow-hidden bg-gray-100'>
            <div className="tabsSection max-md:hidden w-full h-[100px] flex" >
                {/* Switch Tabs */}
                <div className="content flex flex-col items-start w-[50%] p-2 justify-between gap-y-3 h-auto">
                    <div className="tabs w-[90%] max-lg:w-[100%] max-md:w-[100%] max-sm:w-[100%] h-18 flex items-center justify-center gap-2 px-3 max-md:p-0 rounded-[40px] bg-white">
                        <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Individual</button>
                        <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Business</button>
                        <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Tax Professionals</button>
                    </div>
                </div>
                <div className="content flex flex-col items-end w-[50%] p-2 justify-between gap-y-3 h-auto">
                    <div className="tabs w-[60%] max-lg:w-[80%] max-md:w-[95%] max-sm:w-[100%] h-18 flex items-center justify-center gap-2 px-3 max-md:p-0 rounded-[40px] bg-white">
                        <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Individual</button>
                        <button className="tabItem w-[32%] max-sm:w-[30%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Business</button>
                    </div>
                </div>
            </div>

            <div className="cardSection w-full h-auto mt-2  flex">
                <div className="cards m-2 w-full h-auto gap-3 flex max-md:flex-col justify-center items-center">





                    <div className="h-[300px] max-md:hidden  p-3 rounded-3xl shadow-md hover:border-2 flex-col flex justify-between border-indigo-400 bg-white space-y-4 w-[30%]">
                        {/* <img className="h-auto max-w-full py-7 rounded-lg " src={Feature3} alt="featureImage" /> */}
                        <div className="head flex flex-col items-start gap-3 w-full h-auto">
                            <h3 className='text-2xl font-bold'>Basic</h3>
                            <p className='w-full text-[14px]'>Perfect for individuals starting their tax journey with essential features and secure document storage.</p>

                        </div>
                        <div className="foot flex flex-col items-start gap-3 w-full h-auto">
                            <h2 className='text-4xl font-extrabold'>$9.99 <span className='text-[14px] -ml-2 font-light'>/Month</span></h2>
                            <button className={`signupBtn   py-3  w-full max-md:py-2  flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Start a free trial</button>
                        </div>
                    </div>
                    <div className="h-[300px] max-md:hidden p-3 rounded-3xl shadow-md hover:border-2 flex-col flex justify-between border-indigo-400 bg-white space-y-4 w-1/3">
                        {/* <img className="h-auto max-w-full py-[26px] rounded-lg " src={Feature6} alt="featureImage" /> */}
                        <div className="head flex flex-col items-start gap-3 w-full h-auto">
                            <div className="heading flex justify-between w-full items-center "><h3 className='text-2xl font-bold'>Premium</h3> <button className={`signupBtn   py-3  w-[130px] max-md:py-2 max-lg:w-[130px] flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Best Value</button></div>
                            <p className='w-full text-[14px]'>Ideal for growing users with extended question limits and additional storage to handle more complex needs.</p>
                        </div>
                        <div className="foot flex flex-col items-start gap-3 w-full h-auto">
                            <h2 className='text-4xl font-extrabold'>$9.99 <span className='text-[14px] -ml-2 font-light'>/Month</span></h2>
                            <button className={`signupBtn   py-3  w-full max-md:py-2  flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Get Started</button>
                        </div>
                    </div>
                    <div className="h-[300px] max-md:hidden p-3 rounded-3xl shadow-md hover:border-2 flex-col flex justify-between border-indigo-400 bg-white space-y-4 w-1/3">
                        {/* <img className="h-auto max-w-full py-[26px] rounded-lg " src={Feature6} alt="featureImage" /> */}
                        <div className="head flex flex-col items-start gap-3 w-full h-auto">
                            <h3 className='text-2xl font-bold'>Standard</h3>
                            <p className='w-full text-[14px]'>The ultimate plan for professionals or heavy users, offering unlimited access, extensive storage, and verified responses.</p>
                        </div>
                        
                        <div className="foot flex flex-col items-start gap-3 w-full h-auto">
                            <h2 className='text-4xl font-extrabold'>$9.99 <span className='text-[14px] -ml-2 font-light'>/Month</span></h2>
                            <button className={`signupBtn   py-3  w-full max-md:py-2  flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Get Started</button>
                        </div>
                    </div>

{/* Mobile Cards */}
                    <div className="w-[90%] min-md:hidden mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Basic</h2>
                            <p className="mt-2 text-gray-600">
                                Perfect for individuals starting their tax journey with essential features and secure document storage.
                            </p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">$9.99</span>
                                <span className="text-gray-600">/Month</span>
                            </div>
                            <div className="content mt-4 flex max-sm:w-full flex-col border border-r-gray-300 rounded-full items-end w-[50%]  justify-between gap-y-3 h-auto">
                                <div className="tabs w-[80%]  max-lg:w-[80%] max-md:w-[95%] max-sm:w-[100%] h-14 flex items-center justify-center gap-2 max-md:p-0 rounded-[40px] bg-white">
                                    <button className="tabItem w-[45%] max-sm:w-[45%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Monthly</button>
                                    <button className="tabItem w-[45%] max-sm:w-[45%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Yearly -(17%)</button>
                                </div>
                            </div>
                            <button className={`signupBtn mt-4  py-3  w-full max-md:py-2  flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Start a free trial</button>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center">
                                    <span className="text-gray-400">Question Limit</span>
                                    <span className="ml-auto text-gray-900 font-semibold">30/Month</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Document Storage</span>
                                    <span className="ml-auto text-gray-900 font-semibold">5 GB</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Tailored Responses</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Tax Calculators</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">To Do List</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">2FA</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Secure Document Storage</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Encrypted Sharing</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Email Support</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Verified Sources</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-400">Professional's Verified Responses</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-[90%] min-md:hidden mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Standard</h2>
                            <p className="mt-2 text-gray-600">
                                Perfect for individuals starting their tax journey with essential features and secure document storage.
                            </p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">$9.99</span>
                                <span className="text-gray-600">/Month</span>
                            </div>
                            <div className="content mt-4 flex max-sm:w-full flex-col border border-r-gray-300 rounded-full items-end w-[50%]  justify-between gap-y-3 h-auto">
                                <div className="tabs w-[80%]  max-lg:w-[80%] max-md:w-[95%] max-sm:w-[100%] h-14 flex items-center justify-center gap-2 max-md:p-0 rounded-[40px] bg-white">
                                    <button className="tabItem w-[45%] max-sm:w-[45%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Monthly</button>
                                    <button className="tabItem w-[45%] max-sm:w-[45%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Yearly -(17%)</button>
                                </div>
                            </div>
                            <button className={`signupBtn mt-4  py-3  w-full max-md:py-2  flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Get Started</button>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center">
                                    <span className="text-gray-700">Question Limit</span>
                                    <span className="ml-auto text-gray-900 font-semibold">60/Month</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Document Storage</span>
                                    <span className="ml-auto text-gray-900 font-semibold">10 GB</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Tailored Responses</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Tax Calculators</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">To Do List</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">2FA</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Secure Document Storage</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Encrypted Sharing</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Email Support</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Verified Sources</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Professional's Verified Responses</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-[90%] min-md:hidden mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Premium</h2>
                            <p className="mt-2 text-gray-600">
                                Perfect for individuals starting their tax journey with essential features and secure document storage.
                            </p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">$9.99</span>
                                <span className="text-gray-600">/Month</span>
                            </div>
                            <div className="content mt-4 flex max-sm:w-full flex-col border border-r-gray-300 rounded-full items-end w-[50%]  justify-between gap-y-3 h-auto">
                                <div className="tabs w-[80%]  max-lg:w-[80%] max-md:w-[95%] max-sm:w-[100%] h-14 flex items-center justify-center gap-2 max-md:p-0 rounded-[40px] bg-white">
                                    <button className="tabItem w-[45%] max-sm:w-[45%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Monthly</button>
                                    <button className="tabItem w-[45%] max-sm:w-[45%] text-center h-[80%] rounded-4xl mx-auto  text-sm font-medium text-black hover:bg-gradient-to-r from-indigo-400 to-indigo-600 hover:text-white">Yearly -(17%)</button>
                                </div>
                            </div>
                            <button className={`signupBtn mt-4  py-3  w-full max-md:py-2  flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Get Started</button>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center">
                                    <span className="text-gray-700">Question Limit</span>
                                    <span className="ml-auto text-gray-900 font-semibold">Unlimited</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Document Storage</span>
                                    <span className="ml-auto text-gray-900 font-semibold">40 GB</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Tailored Responses</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Tax Calculators</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">To Do List</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">2FA</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Secure Document Storage</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Encrypted Sharing</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Email Support</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Verified Sources</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">Professional's Verified Responses</span>
                                    <span className="ml-auto text-green-500"> <img src={Check}  alt="check" /></span>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>

            <div class="relative max-md:hidden overflow-x-auto p-3">
                <PricingTable/>
            </div>

        </div>
    )
}

export default PricingSection
