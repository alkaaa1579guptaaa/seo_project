import React from "react";
import bannerImage from "../../assets/banner-image.jpg";
import Button from "../Button/Button";
import privacy_policy_image from "../../assets/privacy_policy_image.png"

const PoliycBanner = () => {
  return (
    <div
      className="   mobile-lg:h-[980px]  mobile-sm:h-auto mobile-sm:w-full"
    //  className="relative  bg-center  w-full  pb-[80px]"
      style={{ backgroundImage: `url(${privacy_policy_image})`,
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
          Privacy Policy
        </button>
     

        

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
        Your Privacy, Our Promise <br />
          <span className="text-yellow-500 ml-2">at BacklinkExplore</span>
          
        </h1>
        
        <h6 className="mb-[50px]">
        Your data, our responsibility. At BacklinkExplore, we prioritize your privacy and ensure transparency in
        <br />
        how we handle your information.
       </h6>

        <Button text="Get started" />
      </div>
    </div>
  )
}

export default PoliycBanner

//  className="   mobile-lg:h-[980px] mobile-sm:h-auto border-2 mobile-sm:py-12 mobile-sm:w-full mobile-lg:pt-[100px] mobile-lg:pb-[80px]"