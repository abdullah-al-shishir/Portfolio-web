import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const About_me = () => {
  return (
    <div id="about" className="mt-10 flex flex-col items-center w-5/6 mx-auto">
      {/* About intro */}
      <div className="flex flex-col items-center text-center w-5/6 md:w-2/3">
        <span className="text-md tracking-widest">Introduction</span>
        <span className="font-Ovo text-5xl mt-3">About Me</span>
      </div>

      {/* Photo & details */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-18 px-6 max-w-6xl mx-auto">
        {/* Image */}
        <div className="mt-19 shrink-0">
          <img
            className="w-65 h-85 md:w-80 md:h-105 rounded-3xl object-cover shadow-2xl"
            src="/my-photo3.png"
            alt="Abdullah Al Shishir"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6 lg:mt-19">
          {/* Description */}
          <div>
            <p className="font-Ovo Font-color2 text-[15px] sm:text-[17px] leading-loose">
              I'm a passionate Web Developer and UI/UX Designer skilled in both
              front-end and back-end development. With expertise in React,
              Next.js, HTML, CSS, and JavaScript, I create user-centered,
              responsive websites and interactive applications. I'm also
              dedicated to designing intuitive, functional interfaces.
              <p>
                Driven by my curiosity, I explore new technologies, including
                robotics and IoT, to push the limits of digital design. My goal
                is to use technology to solve real-world problems while
                continuously learning and growing as a developer and designer.
              </p>
            </p>
          </div>

          {/* Follow & icons */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-sm font-semibold font-Ovo text-[18px] tracking-wider">
              Follow me:
            </span>
            <div className="flex flex-row items-center gap-4 text-2xl">
              <FaLinkedin />
              <FaGithub />
              <FaXTwitter />
              <FaFacebookSquare />
              <FaInstagramSquare />
              <AiOutlineYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_me;
