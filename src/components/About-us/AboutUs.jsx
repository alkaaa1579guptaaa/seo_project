import aboutUsImage from "../../assets/about-us.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 mt-[100px]">
      {/* <!-- Heading Section --> */}
      <div className="mb-8">
        <h1 className="text-xl font-regular mb-4 px-8 py-4 bg-[#FFE0D5] text-gray-800 rounded-full inline-block">ABOUT US</h1>
        {/* <p className="text-lg text-gray-600">Challenges in digital technology are our specialty</p> */}
        <h2 className="text-4xl font-bold text-gray-900 pt-[40px]">
        Challenges in <span className="text-bold">digital technology</span>
              <br/>
              are
            our <span className="text-[#FF6130]">Speciality</span>
            </h2>
        <p className="text-lg text-gray-600">
          Learn how our talented designers combine creativity and functionality to deliver captivating user experiences for your audience.
        </p>
      </div>

      {/* <!-- Content Section --> */}
      <div className="flex flex-wrap gap-6">
        {/* <!-- First Column --> */}
        <div className="flex-1">
          <img className="w-full h-auto max-w-[989px]" src={aboutUsImage} alt="About Us" />
        </div>
        
        {/* <!-- Second Column --> */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="text-blue-500 text-4xl"></div>
            <img src={icon1} alt="Expertise & Experience Icon" className="mb-4"/>
            <div className="text-left">
              <h2 className="text-xl font-bold">Expertise & Experience</h2>
              <p className="text-gray-600">As an SEO agency, BacklinkExplore specializes in enhancing online visibility.</p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="text-blue-500 text-4xl"></div>
            <img src={icon2} alt="Transparent Reporting Icon" className="mb-4"/>
            <div className="text-left">
              <h2 className="text-xl font-bold">Transparent Reporting</h2>
              <p className="text-gray-600">At BacklinkExplore, transparent reporting is a cornerstone of our client relationships and overall service approach.</p>
            </div>
          </div>
        </div>
      </div>
          {/* <!-- Cards Section --> */}
<div className="flex flex-wrap md:flex-nowrap gap-4 mt-8">
  {/* <!-- Card 1 --> */}
  <div className="w-full md:w-1/3 bg-white border-[1px] border-[#FFE0D5] rounded-lg p-6">
    <div className="text-xl font-semibold text-gray-800">
      <span className="text-orange-500">01.</span>
    </div>
    <h2 className="text-2xl font-bold mt-2">Exceptional Quality & Value</h2>
    <p className="mt-4 text-gray-600">At BacklinkExplore, delivering exceptional quality and value is more than a commitment—it's the foundation of everything we do.</p>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="w-full md:w-1/3 bg-white border-[1px] border-[#FFE0D5] rounded-lg p-6">
    <div className="text-xl font-semibold text-gray-800">
      <span className="text-orange-500">02.</span>
    </div>
    <h2 className="text-2xl font-bold mt-2">Unmatched Expertise & Experience</h2>
    <p className="mt-4 text-gray-600">At BacklinkExplore, our expertise and experience are the pillars of our success. With years of proven results in the dynamic world of SEO.</p>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="w-full md:w-1/3 bg-white border-[1px] border-[#FFE0D5] rounded-lg p-6">
    <div className="text-xl font-semibold text-gray-800">
      <span className="text-orange-500">03.</span>
    </div>
    <h2 className="text-2xl font-bold mt-2">Exceptional Quality & Value</h2>
    <p className="mt-4 text-gray-600">At BacklinkExplore, we specialize in SEO services that drive organic traffic, enhance search engine rankings, and deliver measurable results.</p>
  </div>
</div>
      </div>
  


      
  );
};

export default AboutUs;
