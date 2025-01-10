import React from "react";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8">
        {/* Left Section: Contact Form */}
      
        <div className="flex-1 bg-gray-800 p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
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
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
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
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium"
                >
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
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="w-full px-4 py-2 text-black rounded-md"
                  placeholder="Enter website"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
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
       

        {/* Right Section: Text and Map */}
        <div className="flex-1">
        <div className="text-left mb-8">
          <h1 className="text-[16px] text-left font-regular px-8 py-4 bg-[#FFE0D5] text-gray-800 rounded-full inline-block">
            Contact Us
          </h1>
        </div>
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch <span className="text-orange-500">with Us</span>
          </h2>
          <p className="mb-6 text-gray-400">
            We're here to help and answer any questions you might have. Reach
            out to us and we'll respond as soon as we can.
          </p>

          {/* Map Embed */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509097!2d144.96305791531694!3d-37.81362797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c15a6379e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633612908974!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
