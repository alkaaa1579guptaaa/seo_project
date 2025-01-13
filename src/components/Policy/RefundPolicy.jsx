import React from "react";
import RefundPoliycBanner from "../Banner/RefundPolicyBanner";

const RefundPolicy = () => {
  return (
    <div>
      <RefundPoliycBanner />

      <section className="h-auto w-full  py-12 flex flex-col bg-[#fff9ed] font-sans">
        <div className="mains h-full flex flex-col justify-center px-4 lg:px-[100px]">
          <h1 className="text-2xl lg:text-[68px] leading-tight font-normal pb-8 lg:pb-[60px]">
            Guaranteed
            <span className="text-[#fe4602]"> Refund Assurance </span>
          </h1>
          <p className="text-[#777777] text-base lg:text-lg leading-[1.875rem]">
            At BacklinkExplore, we are committed to ethical practices and client
            satisfaction. If any unethical activity occurs, such as publishing
            articles or posts on unauthorized websites, we honor a money-back
            guarantee. Clients who identify such issues and submit a refund
            claim will be eligible for a full refund or a partial refund through
            discounts, depending on the situation.
          </p>
          <br />
          <p className="text-[#777777] text-base lg:text-lg leading-[1.875rem]">
            Additionally, we may provide alternatives, such as retrying the
            request on different websites or crediting the amount for future
            use. However, if the client prefers, they can opt for a complete
            refund in the current scenario. Please note that a full refund is
            only applicable when the fault lies in failing to meet our stated
            commitments.
          </p>
          <br />
          <h1 className="text-2xl lg:text-[68px] leading-tight pb-8 lg:pb-[60px]">
            Promotional Discounts for{" "}
            <span className="text-[#fe4602]">Publishing Services</span>
          </h1>
          <p className="text-[#777777] text-base lg:text-lg leading-[1.875rem]">
            At BacklinkExplore, we aim to make our publishing process both
            efficient and cost-effective for our clients. During the publishing
            process, we occasionally offer discounts on select services to
            provide added value and affordability. These discounts may vary
            based on the scope of the project, the type of service, or ongoing
            promotions.
          </p>
          <br />
          <p className="text-[#777777] text-base lg:text-lg leading-[1.875rem]">
            Our goal is to ensure that every client benefits from our
            high-quality link-building services while enjoying potential cost
            savings. For more information on current discounts and offers, feel
            free to contact our support team.
          </p>
          <br />

          <h1 className="text-xl lg:text-[68px] leading-tight pb-8 lg:pb-[60px]">
            Refund Processing Timeline
          </h1>
          <br />
          <p className="text-[#777777] text-base lg:text-lg leading-[1.875rem]">
            At BacklinkExplore, we strive to ensure a seamless refund process
            for our clients. Once a refund is approved, the processing time
            typically ranges from 7 to 14 business days, depending on the
            payment method used.
          </p>

          <br />
          <p className="text-[#777777] text-base lg:text-lg leading-[1.875rem]">
            For credit card payments, the refund may take slightly longer to
            reflect in your account due to standard banking procedures. Refunds
            via digital payment platforms or direct bank transfers are generally
            faster but may still be subject to processing timelines set by your
            financial institution. If you have any questions or concerns about
            your refund status, our support team is always available to assist
            you.
          </p>
          <br />
        </div>
      </section>

      <section className="h-auto w-full  py-12 flex flex-col bg-[#000000] font-sans">
        <div className="mains h-full flex flex-col justify-center px-4 lg:px-[100px]">
          <h1 className="text-2xl lg:text-[68px] text-[#ffffff] leading-tight font-normal pb-8 lg:pb-[60px]">
            How to
            <span className="text-[#fe4602]"> Request a Refund </span>
          </h1>
          <p className="text-[#ffffff] text-base lg:text-lg leading-[1.875rem]">
            Requesting a refund from BacklinkExplore is simple and
            straightforward. Clients can initiate the process by contacting our
            support team through email or our dedicated customer support portal.
            Please include detailed information about your claim, such as the
            service purchased, the issue encountered, and the reason for the
            refund request.
          </p>
          <br />
          <p className="text-[#ffffff] text-base lg:text-lg leading-[1.875rem]">
            Once your request is received, it will be thoroughly reviewed by our
            team to ensure all criteria for a refund are met. If additional
            details are needed, we will promptly reach out to you. Upon
            approval, we will process the refund within the standard timeframe
            of 7–14 business days. Our goal is to make the refund process as
            transparent and efficient as possible. For further guidance, feel
            free to reach out to our support team.
          </p>
          <br />
          <h1 className="text-2xl text-[#ffffff] lg:text-[68px] leading-tight pb-8 lg:pb-[60px]">
            How Long Do
            <span className="text-[#fe4602]"> Refunds Take?</span>
          </h1>
          <p className="text-[#ffffff] text-base lg:text-lg leading-[1.875rem]">
            Once a refund is approved, the processing time depends on the
            payment method used. For Mastercard payments, refunds will typically
            be credited back to your card within 5 to 10 business days. PayPal
            refunds are usually immediate if paid through your PayPal balance,
            but if you used a linked card or bank account, the refund may take
            up to five business days, though it could take longer depending on
            your bank's processing time. Regardless of the payment method,
            refunds will always be returned to the original payment source used
            for the transaction.
          </p>
          <br />
        </div>
      </section>

      
    </div>
  );
};

export default RefundPolicy;
