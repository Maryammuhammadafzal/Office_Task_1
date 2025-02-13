import React from 'react'
import Check from "../../assets/Images/Check.png"
const PricingTable = () => {
  return (

         
              <table class="w-full p-3 text-sm text-left rtl:text-right  ">
                  <thead class="text-[16px]  uppercase  ">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Features
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Basics
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Standard
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Enterprice
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Question Limit
                          </th>
                          <td class="px-6 py-4">
                              20/Month
                          </td>
                          <td class="px-6 py-4">
                              60/Month
                          </td>
                          <td class="px-6 py-4">
                             Unlimited
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Document Storage
                          </th>
                          <td class="px-6 py-4">
                              5GB
                          </td>
                          <td class="px-6 py-4">
                              10GB
                          </td>
                          <td class="px-6 py-4">
                             40GB
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Tailored Responses
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
                                      
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Tax Calculators
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      To Do List
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      2FA 
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Secure Document Storage
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Encrypted Sharing
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Email Support
                          </th>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                 <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 border-b  border-gray-400 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Verified Sources
                          </th>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                      <tr class=" p-3 ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Professional’s Verified Responses
                          </th>
                          <td class="px-6 py-4">
                               <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                                <img src={Check}  alt="check" />
       
                          </td>
                          <td class="px-6 py-4">
                       <img src={Check}  alt="check" />
       
                          </td>
                      </tr>
                  </tbody>
              </table>

    
  )
}

export default PricingTable
