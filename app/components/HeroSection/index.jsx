"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SlideContent from "./SlideContent";

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
    image: "/hero/grass.png",
    buttonText: "Learn More",
  },
  {
    title: "Innovative Solutions for Wellness",
    text: "Bringing advanced technology and care to improve your health journey.",
    image: "/hero/leaf2.png",
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
            <SlideContent slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
