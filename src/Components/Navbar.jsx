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
    <nav className="grid grid-cols-12 items-center w-full mt-1 px-4 py-3">
      {/* Navbar Name */}
      <div className="col-span-2 lg:col-span-3 cursor-pointer">
        <span className="flex items-baseline md:justify-center gap-0.5 sm:gap-1 md:gap-2">
          <span className="font-Ovo font-bold text-xl ml-5 md:ml-0 md:text-xs lg:text-2xl">
            Shishir
          </span>
          <span className="font-bold text-red-500 text-3xl sm:text-sm md:text-xl lg:text-3xl">
            .
          </span>
        </span>
      </div>

      {/* Navbar Links */}
      <div className="col-span-8 lg:col-span-6 flex justify-center gap-6">
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 rounded-full px-12 py-4 transition-all duration-300 border border-gray-200 shadow-sm">
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-sm lg:text-base text-center lg:whitespace-nowrap"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-sm lg:text-base text-center lg:whitespace-nowrap"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-sm lg:text-base text-center lg:whitespace-nowrap"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar Icons & Contact */}
      <div className="col-span-2 lg:col-span-3 flex items-center justify-end lg:justify-start lg:ml-13 gap-3">
        <CiDark className="text-3xl cursor-pointer text-gray-600" />

        <CiMenuFries
          className="text-2xl cursor-pointer md:hidden"
          strokeWidth={1.5}
          onClick={openMenu}
        />
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-1 px-10 py-3.5 border border-gray-500 rounded-full ml-4 font-Ovo"
        >
          Contact <GoArrowUpRight className="text-xl text-gray-800" />
        </a>
      </div>

      {/* Mobile Side Menu */}
      <ul
        ref={sideMenu}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
      >
        {/* Close button with spin animation */}
        <div
          className="absolute right-6 top-6 cursor-pointer"
          onClick={closeMenu}
        >
          <RxCross1
            className="text-2xl"
            strokeWidth={1}
            style={{
              animation: isOpen ? "spin 1s ease-in-out" : "none",
            }}
          />
        </div>
        {/* Side menu links */}
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#top">
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#education">
            Education
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#work">
            My Work
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;