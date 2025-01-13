import Button from "@/components/Button/Button";
import React from "react";
import serviceBanner2 from "../../../assets/service-banner-2.png"


const ServiceBanner2 = () => {
  return (
    <div
      className="relative  bg-center h-[1000px]  w-full  pb-[80px]"
      style={{
        backgroundImage: `url(${serviceBanner2})`,
        // backgroundSize: "contain",
        // backgroundSize: "1920px 1080px",
        // backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
        {/* Top Button */}

        <button
          className="w-[350px] h-[60px] text-[24px] opacity-9 backdrop-blur-sm font-normal 
           text-white  border-2 border-white rounded-full cursor-pointer mb-[56px]"
        >
          Link Insert Service
        </button>

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
          Boost your SEO with
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
           Strategic
          <span className="text-yellow-500 ml-2">Link Insert</span>
        </h1>
      
        <h6 className="mb-[50px]">
        Boost your website’s authority and drive organic traffic with expertly placed backlinks. Backlinks from <br />
authoritative and relevant sources signal trust to search engines, improving your site’s ranking <br />
potential
         
         
        </h6>

        <Button text="Get started" />
      </div>
    </div>
  );
};

export default ServiceBanner2;
