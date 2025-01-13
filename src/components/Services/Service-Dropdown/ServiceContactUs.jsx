import Button from '@/components/Button/Button';
import React from 'react';
import serviceContact from "../../../assets/service-contact.png";

const ServiceContactUs = () => {
  return (
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center gap-8">
        {/* Left Section: Contact Form */}
        <div className="flex-1 bg-gray-800 p-8 rounded-md shadow-lg">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 text-black rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 text-black rounded-md"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 text-black rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 text-black rounded-md"
                  placeholder="Enter subject"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 text-black rounded-md"
                placeholder="Write your message"
              ></textarea>
            </div>

            <Button text="Send Message" />
          </form>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex-1 flex flex-col items-center lg:items-start space-y-8 lg:space-y-12 px-6">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Get in Touch <span className="text-orange-500">with Us</span>
            </h2>
            <p className="mb-6 text-gray-400">
              We offer a comprehensive suite of services to help your business thrive in
              today’s competitive market. Discover how our expert solutions can support
              your goals and deliver outstanding results.
            </p>
          </div>
          <img
            src={serviceContact}
            alt="Contact Us"
            className="w-full max-w-md h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceContactUs;
