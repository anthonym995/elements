"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { TwitterIcon, InstagramIcon, FacebookIcon, MailIcon, PhoneIcon } from "../assets/icons";

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50 transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-lg font-bold text-gray-800">Menu</span>
        <button aria-label="Close menu" className="p-2 text-gray-800 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col items-start gap-6 mt-8" role="menu">
        <li role="menuitem" className="w-full">
          <Link href="/" className="text-[#39b54a] text-lg font-semibold w-full" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li role="menuitem" className="w-full">
          <Link href="#about" className="text-gray-600 text-lg font-semibold w-full" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li role="menuitem" className="w-full">
          <Link href="#services" className="text-gray-600 text-lg font-semibold w-full" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li role="menuitem" className="w-full">
          <Link href="#contact" className="text-gray-600 text-lg font-semibold w-full" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const offsetTop = navRef.current.offsetTop;
        setIsSticky(window.scrollY > offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-white">
      {/* Address Bar Section */}
      <section className="border-b border-gray-200 hidden md:flex">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-2">
          {/* Social Media Icons */}
          <div className="flex gap-4" aria-label="Social Media Links">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 p-2"
            >
              <TwitterIcon size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 p-2"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 p-2"
            >
              <FacebookIcon size={20} />
            </a>
          </div>

          {/* Contact Information */}
          <address className="flex flex-wrap gap-4 not-italic text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <PhoneIcon size={16} className="text-[#39B54A]" aria-hidden="true" />
              <a href="tel:9943567955" className="hover:text-gray-800">
                9943567955
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon size={16} className="text-[#39B54A]" aria-hidden="true" />
              <a href="mailto:contact@example.com" className="hover:text-gray-800">
                contact@example.com
              </a>
            </div>
          </address>
        </div>
      </section>

      {/* Navigation Section */}
      <nav
        ref={navRef}
        className={`bg-white z-50 transition-all duration-30 ${isSticky ? "fixed top-0 shadow-md" : "relative"} w-full`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/3elements.png" alt="Company Logo" width={200} height={0} className="w-40" />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex gap-8 text-base font-medium text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#39B54A]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#39B54A]">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#39B54A]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#39B54A]">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
