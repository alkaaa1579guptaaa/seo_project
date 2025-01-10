import React from "react";
import organicTraffic from "../../../assets/link-insert-organic-traffic-bg.png" 

const GuestPostingMean = () => {
  return (
    <div style={{backgroundImage:`url(${organicTraffic})`}}>
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-left mb-6 text-white">
          What does{" "}
          <span className="text-[#FC7E29] text-3xl lg:text-5xl">
            Guest Posting{" "}
          </span>
          actually mean?
        </h2>
        <p className="text-lg text-white">
          A guest post is a piece of content written by an individual or
          business that is published on someone else’s website or blog. It’s a
          collaborative marketing strategy where the guest author contributes
          high-quality, relevant content to a host site, typically in exchange
          for exposure and backlinks.
          <br />
          <br />
          Guest posting serves as a mutually beneficial arrangement: the host
          site receives valuable content for its audience, while the guest
          author gains access to a wider readership and enhances their online
          presence.
        </p>
        <div className="container mx-auto px-6">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-[#FC7E29] rounded-[10px] -ml-4"></div>
              <div className="w-2 h-12 bg-[#FC7E29] mr-4 rounded-[10px]"></div>
              <div className="w-0.5 h-4 bg-[#FC7E29] rounded-[10px] -ml-4"></div>
            </div>

            <h2 className="text-[30px] text-[#FC7E29]">
            Quality Content
            </h2>
          </div>
          <p className="text-[20px] ml-6 text-lg text-white">
          The article must provide value to the host site’s audience, aligning with its niche and standards.
          </p>
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-[#FC7E29] rounded-[10px] -ml-4"></div>
              <div className="w-2 h-12 bg-[#FC7E29] mr-4 rounded-[10px]"></div>
              <div className="w-0.5 h-4 bg-[#FC7E29] rounded-[10px] -ml-4"></div>
            </div>
            <h2 className="text-[30px] text-[#FC7E29]">
            Author Bio or Backlinks
            </h2>
          </div>

          <p className="text-[20px] ml-6 text-lg text-white">
          Guest posts usually include a short bio or strategically placed backlinks to the author’s website, helping drive traffic and improve SEO.
          </p>

          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-[#FC7E29] rounded-[10px] -ml-4"></div>
              <div className="w-2 h-12 bg-[#FC7E29] mr-4 rounded-[10px]"></div>
              <div className="w-0.5 h-4 bg-[#FC7E29] rounded-[10px] -ml-4"></div>
            </div>
            <h2 className="text-[30px] text-[#FC7E29]">Targeted Outreach</h2>
          </div>

          <p className="text-[20px] ml-6 text-lg text-white">
          The guest post is published on websites relevant to the author’s industry, ensuring the content reaches the right audience.
          </p>
        </div> 
      </div>
    </div>
    </div>
  );
};

export default GuestPostingMean;
