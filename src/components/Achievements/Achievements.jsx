import Button from "../Button/Button";
import achievementsIcon1 from "../../assets/achievements-icon-1.png"
import achievementsIcon2 from "../../assets/achievements-icon-2.png"
import achievementsIcon3 from "../../assets/achievements-icon-3.png"
const Achievements = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] pt-[146px] py-16">
        {/* <!-- Section Container --> */}
        <div className="container mx-auto px-6">
          {/* <!-- Heading Section --> */}
          <div className="text-left mb-12">
            <div>
              <span className="inline-block bg-[#FFE0D5] text-sm font-medium text-gray-700 px-12 py-2 rounded-xl">
                OUR ACHIEVEMENTS
              </span>
            </div>
            <div className="flex justify-between">
            <h2 className="text-4xl font-bold text-gray-900 pt-[86px]">
              Discover our <span className="text-bold">Impressive</span>
              <br/>
               Stats
              & <span className="text-[#FF6130]">Achievements</span>
            </h2>
            <div className="flex flex-col mt-[120px]"> 
            <p className="mt-4 text-gray-600 text-xl max-w-2xl mx-auto">
              Learn how our talented designers combine creativity &
              functionality to deliver captivating user experiences for your
              audience.
            </p>
            <div className="mt-6">
            <Button text="Learn More"/>
            </div>
            </div>
           
            
          </div>
          </div>
        
          {/* <!-- Stats Section --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* <!-- Stat 1 --> */}
           
            <div className="rounded-lg p-6">
          <div className="flex items-center space-x-4">
    {/* Image */}
     <img
      src={achievementsIcon1}
      alt="Clients"
      className=""
    />
    {/* Heading */}
    <h3 className="text-4xl font-bold text-[#FF6130]">98+</h3>
  </div>
  {/* Paragraph */}
  <p className="mt-4 text-gray-700 font-medium">
    Satisfied Clients Across Various Industries
  </p>
</div>

            {/* <!-- Stat 2 --> */}
           
                        <div className="rounded-lg p-6">
          <div className="flex items-center space-x-4">
    {/* Image */}
     <img
      src={achievementsIcon2}
      alt="Clients"
      className=""
    />
    {/* Heading */}
    <h3 className="text-4xl font-bold text-[#FF6130]">99+</h3>
  </div>
  {/* Paragraph */}
  <p className="mt-4 text-gray-700 font-medium">
    Satisfied Clients Across Various Industries
  </p>
</div>
            {/* <!-- Stat 3 --> */}
           
                        <div className="rounded-lg p-6">
          <div className="flex items-center space-x-4">
    {/* Image */}
     <img
      src={achievementsIcon3}
      alt="Clients"
      className=""
    />
    {/* Heading */}
    <h3 className="text-4xl font-bold text-[#FF6130]">50+</h3>
  </div>
  {/* Paragraph */}
  <p className="mt-4 text-gray-700 font-medium">
    Satisfied Clients Across Various Industries
  </p>
</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Achievements;
