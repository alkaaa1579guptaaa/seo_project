import aboutUsImage from "../../assets/about-us.png"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
const AboutUs=()=>{
    return(
        
        <div className="container mx-[200px] p-6 mt-[150px]">
        {/* <!-- Heading Section --> */}
        <div className="mb-8">
     
            <h1 className="text-xl font-regular mb-4 px-8 py-4 bg-[#FFE0D5] text-gray-800 rounded-full inline-block"> ABOUT US</h1>
            <p className="text-lg text-gray-600">Challenges in digital technology are our specialty</p>
            <p className="text-lg text-gray-600">Learn how our talented designers combine creativity and functionality to del captivating user experiences for your audience.Learn how our talented designers combine</p>
        </div>
        {/* <!-- Content Section --> */}
        <div className="flex flex-wrap gap-6">
            {/* <!-- First Column --> */}
            <div className="flex-1 flex flex-col gap-4">
                <img className="w-[989px] h-[404px] " src={aboutUsImage} alt="Image 1"/>
                
            </div>
            {/* <!-- Second Column --> */}
            <div className="flex-1 flex flex-col gap-4">
                
                <div className="bg-white p-6 shadow-md rounded-lg  w-[469px] h-[207px]">
                    <div className="text-blue-500 text-4xl"></div>
                    <img src={icon1}/>
                    <div class="text-left">
                        <h2 class="text-xl font-bold">Expertise & Experience</h2>
                        <p class="text-gray-600">As an SEO agency,BacklinkExplore specializes in enhancing online visibility.</p>
                    </div>
                </div>

                {/* <div className="bg-white p-6 shadow-md rounded-lg text-center w-[469px] h-[207px]">Card 2 Content</div> */}
               <div className="bg-white p-6 shadow-md rounded-lg w-[469px] h-[207px]">
                <div className="text-blue-500 text-4xl"></div>
                <img src={icon2}/>
                <div class="text-left">
                        <h2 class="text-xl font-bold">Transparent Reporting</h2>
                        <p class="text-gray-600">At BacklinkExplore,transparent reporting is a cornerstone of our client relationships and overall service approach.</p>
                    </div>

            </div>
            </div>
        </div>
        {/* <div className=""></div> */}
        <div class="flex space-x-4">
  {/* <!-- Card 1 --> */}
  <div class="w-1/3 bg-white border-[1px] border-[#FFE0D5] rounded-lg p-6">
    <div class="text-xl font-semibold text-gray-800">
      <span class="text-orange-500">01.</span>
    </div>
    <h2 class="text-2xl font-bold mt-2">Exceptional Quality & Value</h2>
    <p class="mt-4 text-gray-600">At BacklinkExplore,delivering exceptional quality and value is more than a commitment-it's the foundation of everything we do.</p>
  </div>
  
  {/* <!-- Card 2 --> */}
  <div class="w-1/3 bg-white border-[1px] border-[#FFE0D5] rounded-lg p-6">
    <div class="text-xl font-semibold text-gray-800">
      <span class="text-orange-500">02.</span>
    </div>
    <h2 class="text-2xl font-bold mt-2">Unmatched Expertise & Experience</h2>
    <p class="mt-4 text-gray-600">At BacklinkExplore,our expertise and experience are the pillars of our success.With years of proven results in the dynamic world of SEO.</p>
  </div>
  
  {/* <!-- Card 3 --> */}
  <div class="w-1/3 bg-white border-[1px] border-[#FFE0D5] rounded-lg p-6">
    <div class="text-xl font-semibold text-gray-800">
      <span class="text-orange-500">03.</span>
    </div>
    <h2 class="text-2xl font-bold mt-2">Exceptional Quality & Value</h2>
    <p class="mt-4 text-gray-600">At BacklinkExplore,we specialize in SEO services that drive organic traffic,enhance search engine rankings,and deliver measurable results.</p>
  </div>
</div>


    </div>
        
    )
}
export default AboutUs