import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoBriefcaseSharp } from "react-icons/io5";

const socialIcons = [
  {
    Icon: FaLinkedin,
    color: "#FF2056",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-al-shishir/",
  },
  {
    Icon: FaGithub,
    color: "#FF2056",
    label: "GitHub",
    href: "https://github.com/abdullah-al-shishir",
  },
  { Icon: FaXTwitter, color: "#FF2056", label: "X Twitter", href: "#" },
  {
    Icon: FaFacebookSquare,
    color: "#FF2056",
    label: "Facebook",
    href: "https://www.facebook.com/abdullah.shishir4",
  },
  {
    Icon: FaInstagramSquare,
    color: "#FF2056",
    label: "Instagram",
    href: "https://www.instagram.com/abdullah.shishir_/?hl=en",
  },
  {
    Icon: AiOutlineYoutube,
    color: "#FF2056",
    label: "YouTube",
    href: "https://www.youtube.com/@Easyphysicsbyshishir4155",
  },
];

const About_me = () => {
  return (
    <>
      <style>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          background-color: #000000;
          color: white;
          transition: background-color, transform 0.1s ease;
        }
        .social-icon:hover {
          background-color: var(--brand);
          transform: scale(1.1);
        }
      `}</style>

      <div
        id="about"
        className="min-h-screen pt-22 flex flex-col items-center w-4/5 md:w-11/12 mx-auto"
      >
        {/* About intro */}
        <div className="flex flex-col items-center text-center w-full mb-12">
          <span className="text-md tracking-widest text-gray-500">
            Introduction
          </span>
          <h2 className="font-Ovo text-5xl mt-3 mb-6">About Me</h2>
        </div>

        {/* Photo & details Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 w-full max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="shrink-0 flex justify-center">
            <img
              className="w-64 h-80 md:w-83 md:h-[445px] rounded-3xl object-cover shadow-2xl"
              src="/my-photo3.png"
              alt="Abdullah Al Shishir"
            />
          </div>

          {/* Details Side */}
          <div className="flex flex-col gap-6 flex-1 max-w-2xl lg:text-left">
            {/* Description */}
            <div className="w-full">
              <p className="font-Ovo text-gray-700 text-[15px] sm:text-[17px] leading-loose">
                I'm a passionate Web Developer and UI/UX Designer skilled in
                both front-end and back-end development. With expertise in
                React, Next.js, HTML, CSS, and JavaScript, I create
                user-centered, responsive websites and interactive applications.
                I'm also dedicated to designing intuitive, functional
                interfaces.
              </p>
              <p className="font-Ovo text-gray-700 text-[15px] sm:text-[17px] leading-loose">
                Driven by my curiosity, I explore new technologies, including
                robotics and IoT, to push the limits of digital design. My goal
                is to use technology to solve real-world problems while
                continuously learning and growing as a developer and designer.
              </p>
            </div>

            {/* Follow & icons */}
            <div className="flex flex-col gap-3 items-center lg:items-start mt-4">
              <span className="font-semibold font-Ovo text-[18px] tracking-wider">
                Follow me:
              </span>
              <div className="flex flex-row items-center gap-5 text-2xl">
                {socialIcons.map(({ Icon, color, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="social-icon"
                    style={{ "--brand": color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              {/* Hire me btn */}
              <div className="flex mt-7">
                <button className="group flex flex-row items-center justify-center gap-3 px-10 py-4 bg-black text-white rounded-full font-Ovo hover:bg-[#FF2056] cursor-pointer">
                  <span className="text-md">hire me</span>
                  <IoBriefcaseSharp className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_me;
