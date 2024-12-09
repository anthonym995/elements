"use client";

import React from "react";
import { MailIcon, PhoneIcon, LocationIcon } from "../assets/icons";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="Contact bg-[#39b54a]/20 py-14 px-6 lg:px-36 flex flex-col justify-start items-center gap-14"
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-14">
        {/* Heading and Supporting Text */}
        <header className="text-center flex flex-col items-center gap-5">
          <h3 className="text-[#333333] text-base font-semibold uppercase mt-4">Contact</h3>
          <h2 className="text-[#333333] font-montserrat text-4xl font-bold ">Get in touch</h2>
          <p className="text-[#333333] text-base font-normal max-w-3xl">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer
            elementum id sem. Arcu sed malesuada et magna.
          </p>
        </header>

        {/* Contact Details */}
        <div className="ContactContent flex flex-wrap justify-center items-center gap-9">
          {/* Phone Section */}
          <div className="MobileSet w-full sm:w-80 p-6 bg-white rounded-md shadow flex flex-col justify-center items-center gap-6">
            <div className="Phoneoutline w-10 h-10 p-1 flex justify-center items-center">
              <PhoneIcon size={24} />
            </div>
            <div className="Number flex flex-col justify-center items-center gap-1.5">
              <p className="text-center text-black text-lg font-normal ">+1-316-555-0116</p>
              <p className="text-center text-black text-lg font-normal ">+1-446-526-0117</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="MailSet w-full sm:w-80 p-6 bg-white rounded-md shadow flex flex-col justify-center items-center gap-6">
            <div className="Mailoutline w-10 h-10 flex justify-center items-center">
              <MailIcon size={24} />
            </div>
            <div className="Number flex flex-col justify-center items-center gap-1.5">
              <p className="text-center text-black text-lg font-normal ">contact@example.com</p>
              <p className="text-center text-black text-lg font-normal ">hr@example.com</p>
            </div>
          </div>

          {/* Location Section */}
          <div className="LocationSet w-full sm:w-80 p-6 bg-white rounded-md shadow flex flex-col justify-center items-center gap-6">
            <div className="LocationOn w-10 h-10 flex justify-center items-center">
              <LocationIcon size={30} />
            </div>
            <address className="text-center text-black text-lg font-normal not-italic">
              8502 Preston Rd. Ingle, Maine 98380, USA
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
