import React from 'react'

const Button2 = ({ px, hidden }) => {
  console.log(px);


  return (
    <>
      <div className={`signupBtn   py-3  w-[180px] max-lg:${hidden} max-md:py-2 max-lg:w-[150px] flex items-center justify-center text-center rounded-4xl bg-gradient-to-r  text-white from-indigo-400 to-indigo-600 `}>Signup for Free</div>
    

    </>
  )
}

export default Button2