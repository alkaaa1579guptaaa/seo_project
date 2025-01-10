import Button from "../Button/Button";
import whyChoose1 from "../../assets/why-choose-1.png";
import whyChoose2 from "../../assets/why-choose-2.png";
const WhyUs = () => {
  return (
    <div className="bg-[#FFFFFF] pt-[146px] py-16">
      <div
        className=" container mx-auto px-6 w-full  bg-[#FF8A33] flex flex-col md:flex-row overflow-hidden"
        style={{ borderRadius: "30px" }}
      >
        {/* <!-- Left Section --> */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl">
              WHY CHOOSE US
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Discover why we the Trusted Partner for Business
          </h1>
          <p className="text-gray-600 mb-6">
            We are dedicated to providing unparalleled services that drive
            results &<br />
            exceed expectations.Here's why businesses choose us as their go-to
            <br /> digital marketing partner.Looking to achieve Exceptional
            growth &<br /> success.
          </p>

          <div className="text-left mb-12">
            {/* <Button text="Learn More" /> */}
            <span className="inline-block bg-white text-sm font-medium text-gray-700  h-[47px] px-12 py-3 rounded-xl">
              Learn More
            </span>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex-1 relative p-6 md:p-12 flex justify-center items-center">
          <div className="relative">
            <img src={whyChoose1} alt="Image 1" className="mb-4" />
            <img src={whyChoose2} alt="Image 2" className="mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
