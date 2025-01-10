import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="bg-[#FFF8EB] pt-[146px] py-16">
      <div className="container mx-auto px-6">
        {/* FAQ Title */}
        <div className="flex justify-center mb-8">
          <h1 className="text-[16px] font-regular px-8 py-4 bg-[#FFE0D5] text-gray-800 rounded-full inline-block">
            FAQ
          </h1>
        </div>

        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find answers to your most
          </h2>
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-[#FF431E]">Common Questions</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Explore our most recent articles and blog posts to stay informed
            about the latest trends, strategies,
            <br />
            and insights in digital marketing. Our expert team shares valuable
            knowledge to help you.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="p-4 border border-orange-500 rounded-[12px] text-gray-800 data-[state=open]:bg-orange-500 data-[state=open]:text-white mb-4 "
            >
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline">What services do you offer?</AccordionTrigger>

              <AccordionContent>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="p-4 border border-orange-500 rounded-[12px]  text-gray-800 data-[state=open]:bg-orange-500 data-[state=open]:text-white mb-4"
            >
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline" >
                What is your onboarding process?
              </AccordionTrigger>
              <AccordionContent>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="p-4 border border-orange-500 rounded-[12px]  text-gray-800 data-[state=open]:bg-orange-500 data-[state=open]:text-white mb-4"
            >
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline">
                What is your approach to customer support?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
