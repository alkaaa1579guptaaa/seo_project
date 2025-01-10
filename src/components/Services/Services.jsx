import serviceImage from "../../assets/service-image.png"
import Button from "../Button/Button"
const Services=()=>{
    return(
<div className="bg-[#FFF8EB] py-16">
  <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
    {/* <!-- Left Section: Image --> */}
   
    <div className="flex-1">
      <img
        src={serviceImage}
        alt="Service Image"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* <!-- Right Section: Text --> */}
    <div className="lg:w-1/2 flex flex-col space-y-6 px-6">
      {/* <!-- Services Tag --> */}
      <div>
      
        <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl" >
          SERVICES
        </span>
      </div>

      {/* <!-- Heading --> */}
      <h1 className="text-4xl lg:text-5xl font-bold">
        Explore our wide range </h1><h1 className="text-4xl lg:text-5xl font-bold">of <span className="text-orange-500">Tailored Services</span></h1>  
      

      {/* <!-- Description --> */}
      <p className="text-lg text-gray-600">
        We offer a comprehensive suite of services to help your business thrive in today’s competitive market.
        Discover how our expert solutions can support your goals and deliver outstanding results.
      </p>

      {/* <!-- Button --> */}
      
       <Button text="Learn More" />
    </div>
  </div>

  {/* <!-- Features Section --> */}
  <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
 
  </div>
</div>


    )
}
export default Services