import React from "react";

const Button = ({ text, className = "", ...props }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#fe5622] to-[#fba935] text-white py-2 px-5 rounded 
        cursor-pointer font-medium text-[14px] w-[165px] h-[53px] transition-all duration-300 ease-in-out hover:from-[#fba935] hover:to-[#fe5622] ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;