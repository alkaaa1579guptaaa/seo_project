import React from "react";

import Button from "../Button/Button";
import Delivery_Policy_image from "../../assets/Delivery_Policy_image.png"

const DeliveryPolicyBanner = () => {
  return (
    <div
      className="   mobile-lg:h-[980px] border mobile-sm:h-auto mobile-sm:w-full"
    // className="relative  bg-center  w-full  pb-[80px]"
      style={{ backgroundImage: `url(${Delivery_Policy_image})`,
      // backgroundSize: "contain",
      // backgroundSize: "1920px 1080px",
      // backgroundSize:"100% 100%",
      backgroundRepeat: "no-repeat" }}
    >
    {/* Content */}
      <div className="  flex flex-col justify-center items-center h-full text-center text-white">
        {/* Top Button */}

        <button
          className="w-[350px] h-[60px] text-[24px] leading-[30] opacity-9 backdrop-blur-sm font-normal 
           text-white py-4 px-4  flex items-center justify-center border-2 border-white rounded-full cursor-pointer mb-[56px]"
        >
          Delivery Policy
        </button>
     

        

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
        Reliable & Timely Service <br />
          <span className="text-yellow-500 ml-2">Delivery by BacklinkExplore</span>
          
        </h1>
        
        <h6 className="mb-[50px]">
        Our team works diligently to ensure that each project is carefully tailored to meet your unique needs and
        <br />
        objectives, helping you achieve your online goals with efficiency and expertise
    
       </h6>

        <Button text="Get started" />
      </div>
    </div>
  )
}

export default DeliveryPolicyBanner

//  className="   mobile-lg:h-[980px] mobile-sm:h-auto border-2 mobile-sm:py-12 mobile-sm:w-full mobile-lg:pt-[100px] mobile-lg:pb-[80px]"



