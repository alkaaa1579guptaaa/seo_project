import React from "react";
import footerLogo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import email from "../../assets/email.png";
import playStore from "../../assets/playstore sticker.png"
import payPal from "../../assets/paypal.png"
import americanExpress from "../../assets/american express.png"
import visa from "../../assets/visa.png"
import gpay from "../../assets/gpay.png"
import mastercard from "../../assets/mastercard.png"
import phone from "../../assets/phone.png"
import location from "../../assets/location.png"
import mail from "../../assets/mail.png"

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
        <div className="py-6">
          <img src={footerLogo} alt="Logo" className=""/>
           <p>In today’s competitive digital landscape, standing out is
                more crucial than ever. Our team of SEO specialists is
                dedicated to helping your business achieve top rankings
                on search engines.</p>
          <div className="flex flex-start gap-6 mt-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={facebook}
                alt="Icon 1"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={whatsapp}
                alt="Icon 2"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={instagram}
                alt="Icon 3"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={email}
                alt="Icon 4"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* <div className="container"> */}

        <div className="py-6">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="">
                Link Insert
              </a>
            </li>
            <li>
              <a href="#" className="">
                Guest Posting
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
            <li>
              <a href="">Meet Our Team</a>
            </li>
            <li>
              <a href="#" className="">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <h3 className="text-xl font-bold mb-2">Legal Policy</h3>
          <ul>
            <li>
              <a href="" className="">Privacy Policy</a>
            </li>
            <li>
              <a href="" className="">Terms of Service</a>
            </li>
            <li>
              <a href="" className="">Reseller Rules</a>
            </li>
            <li>
              <a href="">Delivery Policy</a>
            </li>
            <li>
              <a href="">Refund Policy</a>
            </li>

          </ul>
        </div>
        <div className="py-6">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <div className="flex flex-col justify-between border">
            
            <p className="flex items-center">
              <img src={location} className="py-2 rounded mt-2"/>
                Katikandar, Gazole, Malda,
            </p>
          <p>West Bengal, India, 732124</p></div>
          <p><img src={mail}/>info@backlinkexplore.com</p>
          <p><img src={phone}/>(+91) 6294300940</p>
        
          <img src={playStore} className="py-2 rounded mt-2"/>
        </div>
        {/* </div> */}
   
      
        
      </div>
      <div className="container mx-auto text-[16px] flex justify-between">
          <p>Copyright © 2024 Backlink Explore. All Rights Reserved</p>
          <p>We accept</p>
          <img src={payPal} className="py-2  rounded mt-2"/>
          <img src={americanExpress} className="py-2  rounded mt-2"/>
          <img src={visa} className="py-2  rounded mt-2"/>
          <img src={gpay} className="py-2  rounded mt-2"/>
          <img src={mastercard} className="py-2  rounded mt-2"/>

        </div>
      </footer>
  );
};

export default Footer;
