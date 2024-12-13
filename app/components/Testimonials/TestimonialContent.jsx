// Testimonial.js
import React from "react";
import QuoteIcon from "../../assets/icons/QuoteIcon";

const Testimonial = ({ testimonial }) => {
  return (
    <article className="Testimonial bg-white w-full max-w-screen-sm md:max-w-2xl mx-auto p-7 rounded-md shadow-md flex flex-col items-center gap-7">
      {/* Quote Icon */}
      <QuoteIcon color="#39b54a" />
      <blockquote className="text-zinc-900 text-lg font-normal leading-7 text-center">{testimonial.message}</blockquote>
      <footer className="text-center">
        <h4 className="text-zinc-900 text-base font-bold ">{testimonial.name}</h4>
        <p className="text-zinc-600 text-sm font-normal ">{testimonial.role}</p>
      </footer>
    </article>
  );
};

export default Testimonial;
