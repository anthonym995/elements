import React from "react";

const AboutDetails: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center ">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-auto object-cover"
                src="/about/about_details.png"
                alt="Healthcare Illustration"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-800 leading-snug tracking-wider mb-4">
              3 Elements Healthcare
            </h2>
            <p className="text-base text-gray-800 sm:text-lg font-medium mb-4 sm:mb-8">
              What one knows is a handful, whereas unknown is the size of the world
            </p>
            <p className="text-[#999191] text-base sm:text-lg font-normal leading-relaxed">
              We assist you in physiological conditions and psychosomatic disorders, those who suffer in their daily
              life, restricted activities due to various reasoning factors. 3 Elements Healthcare adopts a holistic
              approach to improve patients' overall balancing state, emphasizing the root cause before initiating
              treatment procedures. By assessing conditions, we ensure the patient’s overall health and use appropriate
              treatment modalities for faster healing.
            </p>
          </div>
        </div>

        {/* Paragraph Section */}
        <div className="mt-8 md:mt-12 text-left px-4 sm:px-6 lg:px-8">
          <p className="text-[#999191] text-base sm:text-lg font-normal leading-relaxed mb-6 mx-auto">
            We assist with physiological conditions and psychosomatic disorders, those who suffer in their daily
            activities due to various reasoning factors. 3 Elements Healthcare adopts a holistic approach to improve
            patients' overall balancing state. By eliciting root causes before initiating treatments and assessing
            conditions, we ensure appropriate modalities for faster healing.
          </p>
          <p className="text-[#999191] text-base sm:text-lg font-normal  leading-relaxed mx-auto">
            We assist with physiological conditions and psychosomatic disorders, those who suffer in their daily
            activities due to various reasoning factors. 3 Elements Healthcare adopts a holistic approach to improve
            patients' overall balancing state. By eliciting root causes before initiating treatments and assessing
            conditions, we ensure appropriate modalities for faster healing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
