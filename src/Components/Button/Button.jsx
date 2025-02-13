import React from 'react'

const Button = ({ title, bg, border, hidden }) => {


  return (
    <>
      <div className={`signinBtn py-3 bg-${bg} max-md:p-2 max-md:w-fit  max-lg:w-[100px] border w-[130px] text-center border-${border} rounded-4xl`}>{title}</div>
    </>
  )
}

export default Button