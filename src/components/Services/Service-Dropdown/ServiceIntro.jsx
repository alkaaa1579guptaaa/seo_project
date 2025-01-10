import React from 'react'
import serviceIntro from "../../../assets/service-intro.png"
import Button from '@/components/Button/Button'

const ServiceIntro = () => {
  return (
   <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
    
    <div className="lg:w-1/2 flex flex-col  space-y-6 px-6">
    <div >
      <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl">INRODUCTION OF SEO</span>
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold">
    We ensure your</h1>
    <h1 className="text-4xl lg:text-5xl font-bold">Business Ranks <span className="text-orange-500">Higher</span></h1>  
    <p className="text-lg text-gray-600">In today’s competitive digital world, simply having a website isn’t<br/>
enough. With billions of online searches performed daily, standing<br/>
out in search results is crucial for your business's success.</p>
<p className="text-lg text-gray-600">Whether it’s optimizing your website’s technical structure or crafting<br/>
content that resonates with your audience.</p>
<Button text="Learn More" />
    </div>
    <div className="flex-1">
        <img src={serviceIntro}/>
    </div>
   </div>
  )
}

export default ServiceIntro