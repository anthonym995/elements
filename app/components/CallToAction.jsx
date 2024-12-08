import React from "react";

const CallToAction = () => {
  return (
    <section className="cta py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h2 className="text-black text-3xl font-bold">Your path to wellness starts here! Reach out to us!</h2>

        {/* Button */}
        <div>
          <button className="w-64 h-12 px-7 py-3.5 bg-[#39b54a] rounded-full border border-[#39b54a] flex justify-center items-center">
            <span className="text-white text-lg font-semibold leading-tight">Book Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
