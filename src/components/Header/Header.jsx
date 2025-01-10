import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import AnimatedCursor from "react-animated-cursor";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className="mb-32 text-black px-4 py-3 
    //  fixed w-full z-10 h-[100px]
    // // ">
    <nav className="mb-3 text-black px-4 py-3 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {/* <li className="hover:bg-[#fba935] cursor-pointer">Home</li> */}
          <li className="hover:text-gray-400 cursor-pointer text-orange-500 border-b-2 border-orange-500">
            Home
          </li>

          <li className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-orange-500 cursor-pointer flex items-center focus:outline-none">
                Services
                <FaChevronDown className="ml-2" />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <Link to="/services/web-development">
                  <DropdownMenuItem className="hover:text-orange-500 cursor-pointer">
                    Web Development
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="hover:text-orange-500 cursor-pointer">
                  SEO Services
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-orange-500 cursor-pointer">
                  Marketing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-orange-500 cursor-pointer flex items-center focus:outline-none">
                Policy
                <FaChevronDown className="ml-2" />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem className="hover:text-orange-500 cursor-pointer">
                  Web Development
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  SEO Services
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  Marketing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li className="hover:text-gray-400 cursor-pointer">Sites</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        {/* "Let's Talk" Button */}
        <div className="hidden md:block">
          <Button text="Let's Talk" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-800 text-white mt-2 space-y-4 p-4">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          {/* Services Dropdown for Mobile */}
          <li className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-gray-400 cursor-pointer">
                Services
                <FaChevronDown className="ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2 bg-white shadow-md rounded-lg">
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  Web Development
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  SEO Services
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  Marketing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Policy Dropdown for Mobile */}
          <li className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-gray-400 cursor-pointer">
                Policy
                <FaChevronDown className="ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2 bg-white shadow-md rounded-lg">
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  Privacy Policy
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-gray-500 cursor-pointer">
                  Terms of Service
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">Sites</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          <div>
            <Button text="Let's Talk" />
          </div>
        </ul>
      )}
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          "input[type='text']",
          "input[type='email']",
          "input[type='number']",
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </nav>
  );
};

export default Header;
