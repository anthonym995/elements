import React from "react";

const AboutTitle: React.FC = () => {
  return (
    <section
      className="py-20 md:py-32 lg:py-40 bg-cover bg-center"
      style={{ backgroundImage: "url('/about/about_title.jpg')" }}
    >
      <div className="container mx-auto flex justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat leading-tight">ABOUT</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutTitle;
