import React from 'react'

const ServiceSocialMedia = () => {
    const services = [
        {
          id: 1,
          title: "Platform Strategy Development",
          description:
            "Social media isn’t a one-size-fits-all solution. Each platform has its unique audience and style. Our experts analyze your business goals, target demographics, and industry trends to create tailored strategies for platforms like Facebook, Instagram, LinkedIn, Twitter, TikTok, & more.",
        },
        {
          id: 2,
          title: "Content Creation & Scheduling",
          description:
            "Content is the heart of social media success. Our team designs captivating posts, videos, graphics, and stories that speak directly to your audience. By scheduling content strategically, we ensure your brand stays active and relevant, posting at the best times to drive engagement.",
        },
        {
          id: 3,
          title: "Community Management",
          description:
            "Social media isn’t just about broadcasting; it’s about building relationships. We actively monitor your social channels, respond to comments and messages promptly, and engage with your audience to create a sense of community. This strategy strengthens your brand’s presence and fosters customer loyalty.",
        },
        {
          id: 4,
          title: "Paid Social Advertising",
          description:
            "Organic reach can only take you so far. To amplify your brand’s visibility, we craft data-driven advertising campaigns designed to connect with specific demographics and achieve measurable results. From precise targeting to optimized retargeting ads, we ensure your investment delivers maximum ROI.",
        },
      ];
  return (
    // <div>ServiceSocialMedia</div>
    // <div className="bg-black text-white py-16">
    //   <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12">
    //     {/* Left Section */}
    //     <div className="space-y-6">
    //       <button className="bg-gray-800 text-sm font-medium px-6 py-2 rounded-full">
    //         SOCIAL MEDIA SERVICES
    //       </button>
    //       <h1 className="text-4xl lg:text-5xl font-bold">
    //         Maximize Your <span className="text-orange-500">Social Media</span>{" "}
    //         Potential
    //       </h1>
    //       <p className="text-gray-400 text-lg">
    //         Social media isn’t a one-size-fits-all solution. Each platform has
    //         its unique audience and style.
    //       </p>
    //       <button className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-full">
    //         Learn More
    //       </button>
    //     </div>

    //     {/* Right Section */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {services.map((service, index) => (
    //         <div
    //           key={service.id}
    //           className={`p-6 rounded-lg ${
    //             index === 1 ? "bg-orange-500 text-black" : "bg-gray-800"
    //           }`}
    //         >
    //           <h2 className="text-xl font-semibold mb-4">
    //             {service.title}
    //           </h2>
    //           <p className="text-gray-400">
    //             {service.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-black text-white py-16">
    <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12">
      {/* Left Section: Heading and Content */}
      <div className="space-y-6">
        <button className="bg-gray-800 text-sm font-medium px-6 py-2 rounded-full">
          SOCIAL MEDIA SERVICES
        </button>
        <h1 className="text-4xl lg:text-5xl font-bold">
          Maximize Your <span className="text-orange-500">Social Media</span>{" "}
          Potential
        </h1>
        <p className="text-gray-400 text-lg">
          Social media isn’t a one-size-fits-all solution. Each platform has
          its unique audience and style.
        </p>
        <button className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-full">
          Learn More
        </button>
      </div>

      {/* Right Section: Cards in Two Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${
              index === 1 ? "bg-orange-500 text-black" : "bg-gray-800"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">
              {service.title}
            </h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ServiceSocialMedia