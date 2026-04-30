import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const Home_Intro = () => {
  return (
    <div className="max-w-8xl r w-3/4 md:w-full mx-auto mt-5 md:mt-2 flex flex-col items-center text-center justify-center gap-4">
      {/* Image Container */}
      <div className="flex justify-center">
        <img
          className="w-38 h-38 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          src="/my-photo1.jpg"
          alt="Abdullah Al Shishir"
        />
      </div>

      {/* Description */}
      {/* Name */}
      <div className="text-xl md:text-2xl font-medium ">
        <span className="font-Ovo Font-color1">
          Hi! I'm Abdullah Al Shishir 👋🏻
        </span>
      </div>
      {/* Web & Designer */}
      <div className="font-playfai text-[2rem] md:text-6xl lg:text-6xl leading-tight">
        Web Developer &
        <br className="hidden md:block lg:hidden" /> UI/UX
        <br className="hidden lg:block" /> Designer
      </div>
      {/* Title decsription */}
      <div className="font-Ovo Font-color2 ml-5 mr-5 ">
        Creating innovative and efficient digital solutions with a focus on
        front-end development and
        <br className="hidden md:block" /> user experience.
      </div>
      {/* Contact & resume button */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-9">
        {/* Contact btn */}
        <button className="font-Ovo flex items-center gap-2 px-10 py-4 text-[17px] bg-black text-gray-200 rounded-full font-medium hover:bg-gray-900 hover:text-gray-50 transition-colors duration-200 cursor-pointer">
          contact me <FaArrowRight />
        </button>
        {/* Resume btn */}
        <button className="font-Ovo Font-color1 flex items-center gap-2 px-10 py-4 text-[17px] bg-white text-black border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          my resume <BsDownload />
        </button>
      </div>
    </div>
  );
};

export default Home_Intro;
