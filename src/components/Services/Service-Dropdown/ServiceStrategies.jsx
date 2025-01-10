import React from "react";
import serviceDigitalMarketing from "../../../assets/service-digital-marketing.png";
import Button from "@/components/Button/Button";
import serviceAnalytics from "../../../assets/service-analytics.png";
const ServiceStrategies = () => {
  return (
    <div className="bg-[#FFF8EB] py-16">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-start">
        {/* Left Section: Images */}
        <div className="flex-1 flex flex-col space-y-6">
          {/* Top Image */}
          <img
            src={serviceAnalytics}
            alt="Top Service Image"
            className="w-full max-w-[574px] mx-auto h-auto rounded-lg"
          />

          {/* Bottom Image */}
          <img
            src={serviceDigitalMarketing}
            alt="Service Digital Marketing"
            className="w-full max-w-[574px] mx-auto h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="lg:w-1/2 flex flex-col space-y-6 px-6 justify-between">
          {/* Services Tag */}
          <div className="flex pb-[84px]">
            <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl">
              STRATEGIES
            </span>
          </div>

          {/* Heading */}
          <div className="mt-[-2.5rem]">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Comprehensive <span className="text-orange-500">Digital</span> 
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-orange-500">Marketing Strategies</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600">
            Digital marketing is the cornerstone of modern business success. In
            today’s
            <br />
            interconnected world, businesses need more than just an online
            presence—
            <br />
            they need a cohesive strategy that reaches the right audience.
          </p>

          {/* Grid with 4 Headings and Subheadings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Heading 1 */}
            <div>
              <h2 className="text-lg font-bold text-gray-800">
              Content Marketing
              </h2>
              <p className="text-sm text-gray-600">
              Create valuable content that attracts
              & retains your audience.
              </p>
            </div>
            {/* Heading 2 */}
            <div>
              <h2 className="text-lg font-bold text-gray-800">
              Email Marketing
              </h2>
              <p className="text-sm text-gray-600">
              Engage and nurture leads with
              personalized campaigns.
              </p>
            </div>
            {/* Heading 3 */}
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Email Campaigns
              </h2>
              <p className="text-sm text-gray-600">
                Create targeted email marketing strategies.
              </p>
            </div>
            {/* Heading 4 */}
            <div>
              <h2 className="text-lg font-bold text-gray-800">
              PPC Advertising
              </h2>
              <p className="text-sm text-gray-600">
                Analyze data to improve performance.
              </p>
            </div>
          </div>

          {/* Button */}
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default ServiceStrategies;
