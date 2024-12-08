import React from "react";
import { aboutImage } from "../assets/images";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Inner container for content alignment */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-lg overflow-hidden">
              <img src={aboutImage} alt="About Us" className="w-full h-auto md:object-cover" />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center text-left md:text-left">
            <div className="w-full">
              <header className="mb-6">
                <h2 className="text-[#333333] text-base font-semibold  uppercase leading-tight">About</h2>
                <h3 className="text-[#0e0e0e] text-2xl md:text-4xl font-bold leading-snug tracking-wider mt-2">
                  3 Elements Healthcare
                </h3>
              </header>
              <p className="text-[#999191] text-sm md:text-base font-normal leading-relaxed mb-8 max-w-xl">
                Assist in the physiological conditions and psychosomatic disorders of those who suffer in their daily
                lives from various factors. 3 Elements Healthcare takes a holistic approach to uncover the root cause
                before initiating the treatment process, by assessing the patient's condition and overall health. This
                ensures that the most appropriate treatments and techniques are used to achieve effective healing.
              </p>
              <div>
                <a href="/about" className="px-7 py-3 bg-[#39b54a] text-white text-lg font-semibold rounded-full">
                  Read more...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
