"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "3 Elements Healthcare",
    text: "What one knows is handful; whereas unknown is size of the world",
    image: "/hero/leaf.png",
    buttonText: "Book Appointment",
  },
  {
    title: "Your Health, Our Priority",
    text: "Experience personalized healthcare with compassion and expertise.",
    image: "/hero/chirop.png",
    buttonText: "Learn More",
  },
  {
    title: "Innovative Solutions for Wellness",
    text: "Bringing advanced technology and care to improve your health journey.",
    image: "/hero/office.png",
    buttonText: "Explore Services",
  },
];

const HeroSection = () => {
  return (
    <section className="HeroSection">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: null,
          prevEl: null,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} aria-label={`Slide ${index + 1}`}>
            <div
              className="h-full w-full bg-cover bg-center flex flex-col justify-start items-center text-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="container mx-auto flex flex-col justify-center items-center gap-14 py-24 lg:py-40">
                <div className="Header w-full h-auto flex flex-col justify-start items-center gap-4 text-center px-4">
                  <h1 className="Title text-white text-4xl lg:text-6xl font-bold leading-tight">{slide.title}</h1>
                  <p className="Text text-white text-lg lg:text-2xl font-semibold leading-relaxed">
                    {slide.text.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div className="Buttons flex justify-center items-center gap-4 lg:gap-8">
                  <button
                    className="Button w-48 lg:w-64 h-12 px-5 lg:px-7 py-3.5 bg-[#39b54a] rounded-full flex justify-center items-center"
                    aria-label={`Action button: ${slide.buttonText}`}
                  >
                    <span className="Text text-white text-base lg:text-lg font-semibold leading-tight">
                      {slide.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
