
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Button from "../Button/Button";
import quote from "../../assets/quote.png"

const Testimonials = () => {
  return (
    <div className="bg-[#FFF8EB] pt-[146px]">
    <div className="container mx-auto px-6">
    <h1 className="text-[16px] font-regular mb-4 px-8 py-4 bg-[#FFE0D5] text-gray-800 rounded-full inline-block">TESTIMONIALS</h1>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* <!-- First Column: Heading --> */}
       
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            Real Success Stories{" "}
          </h2>
          {/* <p className="text-gray-600 mt-4">Be part of a growing network of innovators and visionaries shaping the future together.</p> */}
          <h2 className="text-4xl font-bold text-gray-800">& <span className="text-[#FF431E]">Testimonials</span></h2>
        </div>

        {/* <!-- Second Column: Paragraph and Button --> */}
        <div className="text-center md:text-left">
          <p className="text-gray-700 text-lg mb-6">
            We take pride in the positive experiences and successful outcomes
            we've<br/> helped our clients achieve. Read their stories and discover
            how we can help<br/> your business thrive.
          </p>
          
          <div className="">
            <Button text="Learn More"/>
            </div>
        </div>
      </div>

      <div className="pt-[116px]  pb-[146px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
             <Card className="w-[466px] h-[329px] p-6 flex flex-col justify-between shadow-lg rounded-lg">
          {/* Quote Content */}
          <CardContent className="flex-1">
            <p className="text-gray-700 text-lg">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              in accumsan erat. Suspendisse potenti.”
            </p>
          </CardContent>

          {/* Author Section */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-gray-800 font-semibold text-lg">John Doe</p>
              <p className="text-gray-500 text-sm">Software Engineer</p>
            </div>
            {/* <span className="text-gray-300 text-5xl leading-none">”</span> */}
            <img src={quote}/>
          </div>
        </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      
    </div>
    </div>
  
  );
};

export default Testimonials;
