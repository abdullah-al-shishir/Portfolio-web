import React, { useState, useEffect, useRef } from "react";
import { CiDark } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

// Global style function for links
const getNavLinkClass = (extraClasses = "") => {
  return `font-Ovo hover:text-red-500 transition-colors text-sm lg:text-base xl:text-[16px] whitespace-nowrap ${extraClasses}`.trim();
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sideMenu = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle logic at 50px scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
    setIsOpen(true);
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
    setIsOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center max-w-7xl mx-auto">
        {/* 1. LEFT SECTION (LOGO) */}
        <div className="flex-1 cursor-pointer">
          <a href="#top" className="flex items-baseline gap-0.5 w-fit">
            <span className="font-Ovo font-bold text-2xl">Shishir</span>
            <span className="font-bold text-red-500 text-3xl">.</span>
          </a>
        </div>

        {/* 2. MIDDLE SECTION (LINKS) */}
        <div className="hidden md:flex justify-center items-center">
          <ul
            className={`flex items-center gap-3 lg:gap-6 xl:gap-8 rounded-full px-6 lg:px-10 xl:px-14 py-3 transition-all duration-300 ${
              isScrolled
                ? "bg-transparent border-transparent shadow-none"
                : "bg-white/50 border border-gray-200 shadow-sm"
            }`}
          >
            <li>
              <a className={getNavLinkClass()} href="#top">
                Home
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#about">
                About Me
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#education">
                Education
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#services">
                Services
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#work">
                My Work
              </a>
            </li>
            <li>
              <a className={getNavLinkClass()} href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* 3. RIGHT SECTION (ICONS & ACTIONS) */}
        <div className="flex-1 flex items-center justify-end gap-2 lg:gap-4 ">
          <CiDark className="text-3xl cursor-pointer text-gray-600 hover:text-black transition-colors" />

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 lg:px-8 py-2.5 lg:py-3 border border-gray-500 rounded-full font-Ovo hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm lg:text-base xl:text-lg"
          >
            Contact <GoArrowUpRight className="text-xl" />
          </a>

          <CiMenuFries
            className="text-2xl cursor-pointer md:hidden ml-2"
            onClick={openMenu}
          />
        </div>

        {/* MOBILE OVERLAY */}
        {isOpen && (
          <div
            className="fixed inset-0 h-screen w-screen bg-black/10 md:hidden z-40"
            onClick={closeMenu}
          ></div>
        )}

        {/* MOBILE SIDE MENU */}
        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 shadow-2xl"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <RxCross1
              className={`text-2xl transition-transform duration-700 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#top">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#about">
              About Me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#skills">
              Skills
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#experience">
              Experience
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#education">
              Education
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#services">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#work">
              My Work
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className={getNavLinkClass("text-lg")} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
