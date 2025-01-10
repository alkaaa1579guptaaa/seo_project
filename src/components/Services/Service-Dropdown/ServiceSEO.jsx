import React from 'react'
import serviceSolution from "../../../assets/SEO-solutions.png"

const ServiceSEO = () => {
    const services=[
        {
            id: 1,
            title: "Keyword Research & Strategy",
            description:
              "Effective SEO starts with understanding your audience and the terms they search for. We conduct in-depth keyword research to uncover high-value opportunities that align with your business goals.",
          },
          {
            id: 2,
            title: "On-Page Optimization",
            description:
              "Search engines favor websites that are clear, structured, and relevant. Our on-page optimization services include fine-tuning your website’s content, headers, meta tags, and images.",
          },
          {
            id:3,
            title:"Technical SEO",
            description:
            "Behind the scenes, your website’s technical performance plays a critical role in ranking. Our teamaddresses key technical elements, including site speed, mobile-friendliness, security, crawlability,and indexability."
          },
          {
            id:4,
            title:"Off-Page SEO",
            description:
            "Building your website's authority is vital for long-term SEO success. Our off-page SEO services include ethical link-building, brand mentions, and outreach strategies to establish trust."
          }

    ]
  return (
   
    <div className="bg-black text-white py-16">
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
      {/* Left Section (Headings and Subheadings) */}
      <div className="lg:w-1/2 space-y-8 px-6">
        <div>
          <button className="bg-gray-800 text-sm font-medium px-6 py-2 rounded-full">
            OUR SEO SERVICES
          </button>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold">
          Comprehensive <span className="text-orange-500">SEO Solutions</span>{" "}
          for Your Needs
        </h1>
        <p className="text-gray-400 text-lg">
          In today's digital landscape, being found online is everything. Our
          SEO services ensure your business ranks higher, drives traffic, and
          captures leads effectively.
        </p>

        {/* Service Items */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-white group-hover:text-orange-500 transform group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h2>
              <p className="text-gray-400 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src={serviceSolution}
          alt="SEO Services"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
  )
}

export default ServiceSEO