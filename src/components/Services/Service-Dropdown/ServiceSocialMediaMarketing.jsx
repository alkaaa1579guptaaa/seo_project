import React from 'react'
import serviceSocialMarketing from "../../../assets/service-social-marketing.png"
import Button from '@/components/Button/Button'



const ServiceSocialMediaMarketing = () => {
  return (
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center mt-[10px]">
        <div className="flex-1">
        <img src={serviceSocialMarketing}/>
    </div>
    
    <div className="lg:w-1/2 flex flex-col  space-y-6 px-6">
    <div >
      <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl">SOCIAL MEDIA MARKETING</span>
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold">
    Connect with Powerful</h1>
    <h1 className="text-4xl lg:text-5xl font-bold"><span className="text-orange-500">Social Media</span></h1>  
    <p className="text-lg text-gray-600">Social media is more than just a platform—it's where your brand
   <br/>
   meets its audience, builds trust, and grows its influence.<br/>
</p>
<p className="text-lg text-gray-600">With billions of users scrolling through feeds daily, your business<br/>
has an unparalleled opportunity to connect directly with potential<br/>
customers.
</p>
<Button text="Learn More" />
    </div>
    
   </div>
  )
}

export default ServiceSocialMediaMarketing