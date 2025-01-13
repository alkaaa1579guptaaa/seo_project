import React from "react";
import guestPostingBanner from "../../../assets/guest-posting-banner.png";
import Button from "@/components/Button/Button";

const GuestPostingBanner = () => {
  return (
    <div
      className="relative  bg-center h-[1000px]  w-full  pb-[80px]"
      style={{
        backgroundImage: `url(${guestPostingBanner})`,
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
         Guest Posting Service
        </button>

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
        Reach with Professional
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
          
          <span className="text-yellow-500 ml-2">Guest Posting Services</span>
        </h1>
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-[30px]">
          <span className="text-yellow-500">Marketing Solutions</span>
        </h1> */}
        <h6 className="mb-[50px]">
          Guest posting is a powerful off-page SEO strategy that helps youbuild
          brand authority, drive
          <br />
          targeted traffic, and improve search engine rankings by publishing
          high-quality content on
          <br />
          reputable websites within your industry
        </h6>

        <Button text="Get started" />
      </div>
    </div>
  );
};

export default GuestPostingBanner;
