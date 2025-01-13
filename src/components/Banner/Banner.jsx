import React from "react";
import bannerImage from "../../assets/banner-image.jpg";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div
      className="relative  bg-center   w-full pt-[100px] pb-[80px]"
      style={{ backgroundImage: `url(${bannerImage})`,
      // backgroundSize: "contain",
      // backgroundSize: "1920px 1080px",
      // backgroundSize:"100% 100%",
      backgroundRepeat: "no-repeat" }}
    >
    {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
        {/* Top Button */}

        <button
          className="w-[350px] h-[60px] text-[24px] opacity-9 backdrop-blur-sm font-normal 
           text-white  border-2 border-white rounded-full cursor-pointer mb-[56px]"
        >
          Strategy Driven SEO Agency
        </button>
     

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
          Elevate your Business
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
          with our Tailored  
          <span className="text-yellow-500 ml-2">Digital</span>
          
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
        <span className="text-yellow-500">Marketing Solutions</span>
        </h1>
        <h6 className="mb-[50px]">
       In today’s competitive digital landscape, standing out is more crucial than ever. Our team of SEO 
        <br />
       specialists is dedicated to helping your business achieve top rankings on search engines.
       </h6>

        <Button text="Get started" />
      </div>
    </div>
  );
};

export default Banner;
