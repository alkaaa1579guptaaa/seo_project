import React from 'react'
import linkInsertIcon1 from "../../../assets/link-insert-icon 1.png"
import linkInsertIcon2 from "../../../assets/link-insert-icon 2.png"
import linkInsertIcon3 from "../../../assets/link-insert-icon 3.png" 

const ServiceIntro2 = () => {
  return (
<>
<div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
   <div className="flex flex-col space-y-6 px-6 ">
   <div>
    <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl">INTRODUCTION</span>
   </div>
   {/* Heading Section in Rows */}
   <div className="flex flex-col space-y-4">
      <h1 className="text-3xl lg:text-5xl font-bold">
        Maximize Your Reach with Professional
      </h1>
      <span className="text-[#FF421E] text-3xl lg:text-5xl">
        Link Insert Services
      </span>
      <p className="text-lg text-gray-600">
        High-quality backlinks are a cornerstone of successful SEO, and our Link Insert Service is designed to strengthen your website’s authority and online visibility.<br/> By strategically placing your links within relevant, authoritative content, we help you.
      </p>
    </div>
  </div>
</div>
  <div className="max-w-5xl mx-auto px-6">
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
  {/* Feature 1 */}
  <div className=" p-6 shadow  flex items-center border space-x-4 bg-gray-100 rounded-[16px]">
    <div className="flex-shrink-0 h-full">
       
      <img src={linkInsertIcon1} className="bg-black rounded-[16px] p-4" />
    </div>
    <div className="text-left">
      <h3 className="text-lg font-semibold">Enhance Search Rankings</h3>
      <p className="text-gray-600 mt-2">
        Boost your position on search engines with links from trusted sources.
      </p>
    </div>
  </div>

  {/* Feature 2 */}
  <div className=" p-6 shadow  flex items-center space-x-4 bg-gray-100 rounded-[16px]">
    <div className="flex-shrink-0 h-full">
      <img src={linkInsertIcon2} className="bg-black rounded-[16px] p-4" />
    </div>
    <div className="text-left">
      <h3 className="text-lg font-semibold">Drive Targeted Traffic</h3>
      <p className="text-gray-600 mt-2">
        Attract visitors who are genuinely interested in your products or services.
      </p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className=" p-6 shadow  flex items-center space-x-4 bg-gray-100 rounded-[16px]">
    <div className="flex-shrink-0 h-full">
      <img src={linkInsertIcon3} className="bg-black rounded-[16px] p-4" />
    </div>
    <div className="text-left">
      <h3 className="text-lg font-semibold">Build Credibility</h3>
      <p className="text-gray-600 mt-2">
        Establish your brand as a reliable and valuable resource in your industry.
      </p>
    </div>
  </div>
</div>
       </div>
  <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center">
  <p className="text-lg text-gray-600">
   Our team ensures each link placement is contextually relevant, ethically sourced, and tailored to meet your business objectives. With our Link Insert Service,<br/>
   you’ll gain more than just backlinks—you’ll gain meaningful connections that support long-term growth. Our service ensures every link is strategically placed<br/>
   within high-quality content, delivering both SEO benefits and meaningful referral traffic to your website
      </p>
  </div>
</>
  )
}

export default ServiceIntro2