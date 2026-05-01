import React, { useState, useRef } from "react";
import { CiDark } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const sideMenu = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
    setIsOpen(true);
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md px-4 py-3 border-b border-gray-100">
      <div className="grid grid-cols-12 items-center max-w-7xl mx-auto">
        {/* Navbar Name / Logo */}
        <div className="col-span-4 md:col-span-2 lg:col-span-3 cursor-pointer">
          <a href="#top" className="flex items-baseline gap-0.5">
            <span className="font-Ovo font-bold text-2xl">Shishir</span>
            <span className="font-bold text-red-500 text-3xl">.</span>
          </a>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:col-span-8 lg:col-span-6 md:flex justify-center">
          <ul className="flex items-center gap-4 lg:gap-8 rounded-full px-10 py-3 border border-gray-200 shadow-sm bg-white/50">
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors"
                href="#top"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors text-sm lg:text-base whitespace-nowrap"
                href="#about"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors text-sm lg:text-base whitespace-nowrap"
                href="#work"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                className="font-Ovo hover:text-red-500 transition-colors text-sm lg:text-base whitespace-nowrap"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar Icons & Contact Button */}
        <div className="col-span-8 md:col-span-2 lg:col-span-3 flex items-center justify-end gap-4">
          <CiDark className="text-3xl cursor-pointer text-gray-600 hover:text-black transition-colors" />
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-8 py-3 border border-gray-500 rounded-full font-Ovo hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Contact <GoArrowUpRight className="text-xl" />
          </a>
          <CiMenuFries
            className="text-2xl cursor-pointer md:hidden"
            strokeWidth={1.5}
            onClick={openMenu}
          />
        </div>

        {/* --- BACKDROP OVERLAY --- */}
        {/* This div covers the rest of the page when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 h-screen w-screen bg-black/10 md:hidden z-40"
            onClick={closeMenu}
          ></div>
        )}

        {/* Mobile Side Menu Overlay */}
        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 shadow-2xl"
        >
          {/* Close button */}
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <RxCross1
              className={`text-2xl transition-transform duration-700 ${isOpen ? "rotate-180" : ""}`}
              strokeWidth={1}
            />
          </div>

          {/* Side menu links */}
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#top">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#about">
              About Me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#skills">
              Skills
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#experience">
              Experience
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#services">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#work">
              My Work
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo text-lg" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
