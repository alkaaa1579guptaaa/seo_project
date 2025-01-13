import React from "react";
import footerLogo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import email from "../../assets/email.png";
import playStore from "../../assets/playstore sticker.png";
import payPal from "../../assets/paypal.png";
import americanExpress from "../../assets/american express.png";
import visa from "../../assets/visa.png";
import gpay from "../../assets/gpay.png";
import mastercard from "../../assets/mastercard.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info Section */}
        <div className="py-6">
          <img src={footerLogo} alt="Logo" className="mb-4 mx-auto md:mx-0" />
          <p className="text-gray-600">
            In today’s competitive digital landscape, standing out is more crucial than ever. Our team of SEO specialists is dedicated to helping your business achieve top rankings on search engines.
          </p>
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            {[facebook, whatsapp, instagram, email].map((icon, index) => (
              <div key={index} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md">
                <img src={icon} alt={`Icon ${index + 1}`} className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="py-6">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Link Insert", "Guest Posting", "Contact Us", "Meet Our Team", "Career"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-600 hover:text-gray-800">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Policy Section */}
        <div className="py-6">
          <h3 className="text-xl font-bold mb-4">Legal Policy</h3>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms of Service", "Reseller Rules", "Delivery Policy", "Refund Policy"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-600 hover:text-gray-800">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="py-6">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-4">
            <p className="flex items-center text-gray-600">
              <img src={location} alt="Location" className="w-6 h-6 mr-2" />
              Katikandar, Gazole, Malda, West Bengal, India, 732124
            </p>
            <p className="flex items-center text-gray-600">
              <img src={mail} alt="Mail" className="w-6 h-6 mr-2" />
              info@backlinkexplore.com
            </p>
            <p className="flex items-center text-gray-600">
              <img src={phone} alt="Phone" className="w-6 h-6 mr-2" />
              (+91) 6294300940
            </p>
            <img src={playStore} alt="Play Store" className="w-32 mt-4" />
          </div>
        </div>
      </div>

      {/* Payment Methods and Copyright */}
      <div className="container mx-auto flex flex-wrap items-center justify-between text-center text-gray-600 text-sm mt-8">
        <p className="w-full md:w-auto mb-4 md:mb-0">Copyright © 2024 Backlink Explore. All Rights Reserved</p>
        <div className="flex justify-center md:justify-end gap-4">
          {[payPal, americanExpress, visa, gpay, mastercard].map((icon, index) => (
            <img key={index} src={icon} alt={`Payment Method ${index + 1}`} className="w-10 h-10" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
