import React from 'react'
import policyImage1 from "../../assets/Images/policyimage1.png"
import policyImage2 from "../../assets/Images/policyimage2.png"
import policyImage3 from "../../assets/Images/policyimage3.png"
import policyImage4 from "../../assets/Images/policyimage4.png"
import policyImage5 from "../../assets/Images/policyimage5.png"
import policyImage6 from "../../assets/Images/policyimage6.png"

import ArrowImage from "../../assets/Images/arrowimage.png"
const PoliciesCard = ({ title, image }) => {

    let policyCardData = [
        {
            title: "Privacy Policy",
            image: policyImage1 ,
            ArrowImage: ArrowImage,
        },
        {
            title: "Security Policy",
            image: policyImage2 ,
            ArrowImage: ArrowImage,
        },
        {
            title: "User Data Policy",
            image: policyImage3,
            ArrowImage: ArrowImage,
        },
        {
            title: "Terms and Condition",
            image: policyImage4 ,
            ArrowImage: ArrowImage,
        },
        {
            title: "Cookie Policy",
            image: policyImage5 ,
            ArrowImage: ArrowImage,
        },
        {
            title: "Refund Policy",
            image: policyImage6 ,
            ArrowImage: ArrowImage,
        }
    ]

    return (
        <div className='w-full h-auto items-center justify-center gap-3 bg-gray-100 flex flex-wrap'>
            {policyCardData.map(({ title, image, ArrowImage }) => (
                <div className="policyCard w-[31%] max-lg:w-[32%] p-3 bg-white h-[400px] max-md:h-[200px] rounded-3xl  text-black  flex flex-col items-between  justify-between">
                    <div className="logo w-full h-fit flex m-2 items-center ">
                        <img src={image} className='w-20 lg:w-20 max-[465px]:w-[200px]' alt="logo" />
                    </div>
                    <div className="signupBtn flex justify-between">
                        <h2 className='w-fit max-sm:text-2xl max-sm:leading-10 text-3xl leading-14 font-semibold uppercase'>{title}</h2>
                        <img className="arrowImage w-14 h-14 max-sm:w-12 border rounded-full max-sm:h-12" src={ArrowImage} alt="arrow Image" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PoliciesCard
