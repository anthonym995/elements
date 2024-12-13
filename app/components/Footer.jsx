import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, MailIcon, PhoneIcon, TwitterIcon, InstagramIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-[#464e54] py-20 text-white">
      <div className="container mx-auto flex flex-col gap-10">
        {/* Footer Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Main Location */}
          <div className="w-full flex flex-col gap-5">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/3elements.png" alt="Company Logo" width={200} height={0} className="w-40" />
            </Link>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <p className="text-base font-normal tracking-tight">+91 7387216128</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon />
                <p className="text-base font-normal tracking-tight">raj.arokia4@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full flex flex-col gap-5">
            <h3 className="text-lg font-semibold leading-relaxed">Quick Links</h3>
            <nav className="flex flex-col gap-1.5">
              <Link href="#home" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-sm font-normal hover:underline">
                About
              </Link>
              <Link href="/#services" className="text-sm font-normal hover:underline">
                Services
              </Link>
              <Link href="/#contact" className="text-sm font-normal hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="w-full flex flex-col gap-5">
            <h3 className="text-lg font-semibold leading-relaxed">Follow Us On</h3>
            <div className="flex gap-4">
              <a
                href="#twitter"
                className="w-8 h-8 flex justify-center items-center rounded-full border border-[#dfe4ea] hover:bg-[#39b54a] transition"
                aria-label="Twitter"
              >
                <TwitterIcon color="#fff" />
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 flex justify-center items-center rounded-full border border-[#dfe4ea] hover:bg-[#39b54a] transition"
                aria-label="Facebook"
              >
                <FacebookIcon color="#fff" />
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 flex justify-center items-center rounded-full border border-[#dfe4ea] hover:bg-[#39b54a] transition"
                aria-label="Instagram"
              >
                <InstagramIcon color="#fff" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center gap-5">
          <hr className="w-full border-zinc-400" />
          <p className="text-sm text-zinc-400 text-center">© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
