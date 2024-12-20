"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialContent from "./TestimonialContent";


const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Physiotherapy Patient",
    message:
      "“The physiotherapy sessions here have been life-changing! The team was incredibly attentive and tailored a recovery plan just for me. My mobility has improved significantly, and I can now enjoy my daily activities without pain.”",
  },
  {
    name: "Jane Cooper",
    role: "Holistic Care Enthusiast",
    message:
      "“The alternative medicine approach was exactly what I needed. The holistic treatments made me feel seen and cared for. I noticed improvements not only in my health but also in my overall energy and well-being.”",
  },
  {
    name: "Robert Fox",
    role: "Chiropractic Patient",
    message:
      "“I came here with severe back pain and left feeling like a new person. The chiropractic care was top-notch, and the professionals explained every step of the process. I can't recommend them enough!”",
  },
  {
    name: "Emma Johnson",
    role: "Yoga Practitioner",
    message:
      "“Yoga wellness classes here have brought so much balance and peace into my life. The instructors are patient and skilled, helping me progress at my own pace. It’s a transformative experience I’d recommend to anyone.”",
  },
  {
    name: "Michael Brown",
    role: "Osteopathy Patient",
    message:
      "“The osteopathy treatments addressed issues I’ve been struggling with for years. The personalized care and expertise of the practitioners made all the difference. I finally feel like myself again!”",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="Testimonials bg-white py-14">
      <div className="container mx-auto">
        {/* Section Title */}
        <header className="SectionTitle text-center mb-12">
          <h3 className="text-[#333333] text-base font-semibold uppercase ">Testimonials</h3>
          <h2 className="text-[#333333] font-montserrat text-4xl font-bold leading-10">What our Clients Say</h2>
          <p className="text-[#333333] text-base font-normal leading-normal mt-4">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in
            some form.
          </p>
        </header>

        {/* Swiper for Testimonials */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: null,
            prevEl: null,
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={50}
          slidesPerView={1}
          className="h-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center py-8 !bg-white">
              <TestimonialContent testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
