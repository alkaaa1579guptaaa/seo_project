import React from 'react'
import linkInsertOrange from "../../../assets/link-insert-orange-tick.png"
import star from "../../../assets/star.png"

const ServiceCards2 = () => {
  return (
    <div className="bg-[#FFF7F2] py-12">
    <div className="container mx-auto px-6">
      {/* Title Section */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
        Unveiling the Purpose of Specialization Edits
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Specialization edits refer to targeted modifications or enhancements
        made to content with a specific focus or purpose. These edits aim to
        tailor content to meet the needs of a particular audience, industry,
        or objective, ensuring that it aligns with the desired outcomes.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Lite Plan */}
        <div className="bg-white p-6 shadow-lg rounded-[16px] flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Lite</h3>
          <ul className="space-y-2  text-gray-600 text-sm">
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Number of Posts: 2</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Domain Authority: 20 - 30</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 1 Keyword / URL</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Do Follow Links</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 100% Quality Sites - No PBNs</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Delivery Time: 3-5 Days</li>
          </ul>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg">
            Buy for now →
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-orange-500 text-white p-6 shadow-lg rounded-[16px] relative flex flex-col items-center">
          <div className="absolute -top-4 bg-black text-white text-xs px-2 py-1 rounded-[16px]">
            <img src={star}/>
            Most Selling
          </div>
          <h3 className="text-xl font-semibold mb-4">Standard</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Number of Posts: 4</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Domain Authority: 30 - 40</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 1 Keyword / URL</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Do Follow Links</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 100% Quality Sites - No PBNs</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Delivery Time: 5-7 Days</li>
          </ul>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg">
            Buy for now →
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-6 shadow-lg rounded-[16px] flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Premium</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Number of Posts: 7</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Domain Authority: 40 - 60</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 1 Keyword / URL</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Do Follow Links</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 100% Quality Sites - No PBNs</li>
            <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Delivery Time: 7-10 Days</li>
          </ul>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg">
            Buy for now →
          </button>
        </div>

        {/* Customized Plan */}
        <div className="bg-white p-6 shadow-lg rounded-[16px] flex flex-col items-center justify-between h-full">
        
          <h3 className="text-xl font-semibold mb-4">Customized</h3>
          <p className="text-gray-600 text-sm space-y-2">
            Make a personalized set for yourself. You can use the link below
            to get in touch with us if you have any questions.
          </p>
          
          
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg border">
            Buy for now →
          </button>
          
        
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceCards2