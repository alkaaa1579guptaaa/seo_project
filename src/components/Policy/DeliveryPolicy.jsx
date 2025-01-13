import React from "react";
import DeliveryPolicyBanner from "../Banner/DeliveryPolicyBanner";
import arrow3 from "../../assets/arrow3.png";

const DeliveryPolicy = () => {
  return (
    <div>
      <DeliveryPolicyBanner />

      <section className="h-auto w-full  py-12 flex flex-col bg-[#fefcf6] font-sans">
        <div className="mains h-full flex flex-col justify-center px-4 lg:px-[100px]">
          <h1 className="text-2xl lg:text-[68px] leading-tight font-normal pb-8 lg:pb-[60px]">
            Delivery Policy of
            <span className="text-[#fe4602]"> BacklinkExplore </span>
          </h1>
          <p className="text-[#000000] text-base lg:text-lg leading-[1.875rem]">
            At BacklinkExplore, we are committed to delivering the highest
            quality SEO and link-building services in a timely manner. Upon
            placing an order, clients can expect to receive the services as
            outlined in their purchase agreement within the agreed timeframe.
            Delivery times may vary depending on the complexity of the project
            and the type of service chosen, but we always strive to meet or
            exceed client expectations.
          </p>
          <br />
          <p className="text-[#000000] text-base lg:text-lg leading-[1.875rem]">
            For any questions regarding delivery, or if you need further
            clarification on the timeline for a specific service, our support
            team is available to assist you.
          </p>
          <br />
          <h1 className="text-2xl lg:text-[68px] leading-tight pb-8 lg:pb-[60px]">
            Guest Post Submission Guidelines
          </h1>
          <div className="list flex flex-col  gap-[64px] mobile-lg:px-[50px]">
            <div className="one flex items-center space-x-4">
              <img src={arrow3} alt="arrow3" className="hidden lg:block " />
              <p className="text-base lg:text-lg text-[#777777] leading-[1.875rem]">
                BacklinkExplore allows all types of content for guest posts,
                except for adult (18+) material.
              </p>
            </div>
            <div className="one flex items-center space-x-4">
              <img src={arrow3} alt="arrow3" className="hidden lg:block " />
              <p className="text-base lg:text-lg text-[#777777] leading-[1.875rem]">
              Upon receiving an order or request to publish content, our website management team’s editors will review the post to ensure it meets all necessary
              standards and guidelines.
              </p>
            </div>
            <div className="one flex items-center space-x-4">
              <img src={arrow3} alt="arrow3" className="hidden lg:block " />
              <p className="text-base lg:text-lg text-[#777777] leading-[1.875rem]">
                If the post contains errors or plagiarized content, an editor
                will reach out to the requester or client to resolve and fix the
                issues promptly.
              </p>
            </div>
            <div className="one flex items-center space-x-4">
              <img src={arrow3} alt="arrow3" className="hidden lg:block " />
              <p className="text-base lg:text-lg text-[#777777] leading-[1.875rem]">
                Once all requirements are met and the content is approved, an
                editor will publish the post as a blog within 24 hours. For rush
                orders, please note that the delivery may take up to 36 hours.
              </p>
            </div>
            <div className="one flex items-center space-x-4">
              <img src={arrow3} alt="arrow3" className="hidden lg:block " />
              <p className="text-base lg:text-lg text-[#777777] leading-[1.875rem]">
                In the rare case that the content is not published within 36
                hours, the client has the option to cancel the order with no
                further obligations or issues from the company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPolicy;
