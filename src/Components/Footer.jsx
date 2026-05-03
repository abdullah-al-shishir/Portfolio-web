import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const socialLinks = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-al-shishir/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/abdullah-al-shishir",
  },
  { Icon: FaXTwitter, label: "X Twitter", href: "#" },
  {
    Icon: FaFacebookSquare,
    label: "Facebook",
    href: "https://www.facebook.com/abdullah.shishir4",
  },
  {
    Icon: FaInstagramSquare,
    label: "Instagram",
    href: "https://www.instagram.com/abdullah.shishir_/?hl=en",
  },
  {
    Icon: AiOutlineYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@Easyphysicsbyshishir4155",
  },
];

const Footer = () => {
  return (
    <footer className="pt-14 pb-0 px-[12%] bg-white text-center">
      {/* Name + dot */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <h2 className="text-3xl font-bold font-Ovo text-gray-800">Shishir</h2>
        <span className="w-2 h-2 mt-3 rounded-full bg-[#FF2056] inline-block" />
      </div>

      {/* Email */}
      <a
        href="mailto:tanzim.ikram@protonmail.com"
        className="inline-flex items-center gap-2 text-[15px] text-gray-500 mb-6 hover:text-gray-700 transition-colors"
      >
        <span className="w-5 h-3.5 bg-[#FF2056] rounded-sm flex items-center justify-center">
          <svg viewBox="0 0 12 8" className="w-3 h-2" fill="none">
            <path d="M0 0l6 5 6-5" stroke="white" strokeWidth="1.2" />
          </svg>
        </span>
        <span className="hover:underline">abdullahshishir2018@gmail.com</span>
      </a>

      {/* Social icons */}
      <div className="flex justify-center gap-2.5 mb-10">
        {socialLinks.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-stone-200 flex items-center justify-center text-slate-600 hover:text-[#FF2056] hover:border-[#FF2056] transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Divider + bottom bar */}
      <div className="font-Ovo border-t border-stone-200 flex flex-col md:flex-row items-center justify-between py-5 text-[14px] text-stone-600">
        <div className="">
          <span>© Abdullah AL Shishir | All Rights Reserved</span>
        </div>
        <div className="flex gap-6">
          <a
            href="#top"
            className="hover:text-stone-600 transition-colors hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#contact"
            className="hover:text-stone-600 transition-colors hover:underline"
          >
            Connect with me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
