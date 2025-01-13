import React from 'react'
import serviceBanner from "../../../assets/service-banner.png"
import Button from '@/components/Button/Button'

const ServiceBanner = () => {
  return (
//     <div className="relative bg-center h-[1080px] md:h-[600px] w-full pt-[100px] pb-[80px]"
//     style={{backgroundImage:`url(${serviceBanner})`}}>
  
//    <div className="relative flex flex-col justify"></div>
//    </div>
   <div
      className="relative  bg-center h-[1080px]  w-full  pb-[80px]"
      style={{ backgroundImage: `url(${serviceBanner})`,
      // backgroundSize: "contain",
      // backgroundSize: "1920px 1080px",
      backgroundSize:"100% 100%",
      backgroundRepeat: "no-repeat" }}
    >
    {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
        {/* Top Button */}

        <button
          className="w-[350px] h-[60px] text-[24px] opacity-9 backdrop-blur-sm font-normal 
           text-white  border-2 border-white rounded-full cursor-pointer mb-[56px]"
        >
          SEO Services
        </button>
     

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
        Boost Your Visibility with
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
          Expert  
          <span className="text-yellow-500 ml-2">SEO</span>
          
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
        <span className="text-yellow-500">Solutions</span>
        </h1>
        <h6 className="mb-[50px]">
       In today’s competitive digital landscape, standing out is more crucial than ever. Our team of SEO 
        <br />
       specialists is dedicated to helping your business achieve top rankings on search engines.
       </h6>

        <Button text="Get started" />
      </div>
    </div>
  )
}

export default ServiceBanner