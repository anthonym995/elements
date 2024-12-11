import React from "react";

const Cta: React.FC = () => {
  return (
    <section className="bg-[#39b54a]/25 py-10 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Left Text Section */}
        <div className="w-full md:w-3/5 flex justify-center items-center text-center md:text-left">
          <h2 className="text-2xl lg:text-3xl text-center font-bold font-montserrat text-gray-800 leading-snug">
            Your path to wellness starts here! <br className="" />
            Reach out to us!
          </h2>
        </div>

        {/* Right Button Section */}
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <a
            href=""
            className="inline-block px-7 py-3.5 bg-white text-[#39b54a] text-lg font-semibold font-['Roboto'] rounded-full border border-[#39b54a] hover:bg-[#39b54a] hover:text-white transition duration-300"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
