import React from 'react'
import linkInsertOrange from "../../../assets/link-insert-orange-tick.png"
import star from "../../../assets/star.png"
import arrow from "../../../assets/arrow.png"
import whiteTick from "../../../assets/white tick.png"

const GuestPostingCards = () => {
  return (
    <div className="bg-[#FFF7F2] py-12">
     <div className="container mx-auto px-6">
       {/* Title Section */}
       <h2 className="text-3xl lg:text-5xl font-bold text-start mb-6">
       Effective{" "}<span className="font-bold">Guest Posting</span> : Build Authority
       </h2>
      <h2 className="text-3xl lg:text-5xl font-bold text-start mb-6">and<span className="text-[#FF421E] text-3xl lg:text-5xl"> Drive Results</span></h2> 
       <p className="text-gray-600  mx-auto mb-12 text-start">
       Guest posting is one of the most effective strategies for expanding your online reach, building credibility, and boosting your website’s SEO. It involves<br/>
       publishing high-quality content on authoritative websites within your niche, allowing you to showcase your expertise while earning valuable backlinks
       </p>
 
       {/* Pricing Cards */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {/* Lite Plan */}
         <div className="bg-white p-6 shadow-lg rounded-[16px] flex flex-col items-center">
           <h3 className="text-xl font-semibold mb-4">Lite</h3>
           <ul className="space-y-2 text-gray-600 text-sm">
             <li className="flex items-center space-x-2"><img src={linkInsertOrange} className=""/> Number of Posts: 2</li>
             <li className="flex items-center space-x-2"><img src={linkInsertOrange} /> Domain Authority: 20 - 30</li>
             <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 1 Keyword / URL</li>
             <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Do Follow Links</li>
             <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> 100% Quality Sites - No PBNs</li>
             <li className="flex items-center space-x-2"><img src={linkInsertOrange}/> Delivery Time: 3-5 Days</li>
           </ul>
           <div className="flex justify-between">
           <button className="mt-6 bg-black text-white px-6 py-2 rounded-[16px] flex items-center">
             Buy for now <img src={arrow} className="ml-2"/>
           </button>
           </div>
         </div>
 
         {/* Standard Plan */}
         <div className="bg-orange-500 text-white p-6 shadow-lg rounded-[16px] relative flex flex-col items-center">
           <div className="absolute -top-4 bg-black text-white text-xs px-2 py-1 rounded-[16px] flex justify-between">
             <img src={star}/>
             <h3 className="p-[4px]">Most Selling</h3>
           </div>
           <h3 className="text-xl font-semibold mb-4">Standard</h3>
           <ul className="space-y-2 text-sm pb-[4px]">
             <li className="flex items-center space-x-4 space-y-2 ml-[4px]"><img src={whiteTick} className="text-white"/> Number of Posts: 4</li>
             <li className="flex items-center space-x-4 space-y-2"><img src={whiteTick} className="text-white"/> Domain Authority: 30 - 40</li>
             <li className="flex items-center space-x-2 pt-[4px]"><img src={whiteTick} className="text-white"/> 1 Keyword / URL</li>
             <li className="flex items-center space-x-2"><img src={whiteTick} className="text-white"/> Do Follow Links</li>
             <li className="flex items-center space-x-2"><img src={whiteTick} className="text-white"/> 100% Quality Sites - No PBNs</li>
             <li className="flex items-center space-x-2"><img src={whiteTick} className="text-white"/> Delivery Time: 5-7 Days</li>
           </ul>
          
           <div className="flex justify-between">
           <button className="mt-6 bg-black text-white px-6 py-2 rounded-[16px] flex items-center">
             Buy for now <img src={arrow} className="ml-2"/>
           </button>
           </div>
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
         
           <div className="flex justify-between">
           <button className="mt-6 bg-black text-white px-6 py-2 rounded-[16px] flex items-center">
             Buy for now <img src={arrow} className="ml-2"/>
           </button>
           </div>
         </div>
 
         {/* Customized Plan */}
         <div className="bg-white p-6 shadow-lg rounded-[16px] flex flex-col items-center justify-between h-full">
         
           <h3 className="text-xl font-semibold mb-4">Customized</h3>
           <p className="text-gray-600 text-sm space-y-2">
             Make a personalized set for yourself. You can use the link below
             to get in touch with us if you have any questions.
           </p>
           
          
           <div className="flex justify-between">
           <button className="mt-6 bg-black text-white px-6 py-2 rounded-[16px] flex items-center">
             Buy for now <img src={arrow} className="ml-2"/>
           </button>
           </div>
           
         
          
         </div>
       </div>
     </div>
   </div>
  )
}

export default GuestPostingCards