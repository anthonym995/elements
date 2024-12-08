import React from "react";

const services = [
  {
    title: "Physiotherapy",
    description: "Physiotherapy, also known as physical therapy, is a healthcare profession focused on...",
    image: "/images/physio.png",
  },
  {
    title: "Alternative Medicine",
    description: "Alternative Medicine involves therapeutic approaches for holistic care...",
    image: "/images/alternative.png",
  },
  {
    title: "Chiropractic",
    description: "Chiropractic is a healthcare profession focused on diagnosing, treating, and preventing...",
    image: "/images/chiro.png",
  },
  {
    title: "Yoga Wellness",
    description: "Yoga Wellness promotes mental and physical balance through structured practices...",
    image: "/images/yoga.png",
  },
  {
    title: "Ostepathy",
    description: "Osteopathy is a healthcare discipline that focuses on the treatment of the whole body...",
    image: "/images/ostepathy.png",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="Services bg-[#39b54a]/20 py-16">
      <div className="container mx-auto">
        {/* Section Title */}
        <header className="SectionTitle text-center mb-12">
          <h3 className="text-[#333333] text-base font-semibold uppercase">Services</h3>
          <h2 className="text-[#333333] text-4xl font-bold leading-10 mb-5">What We Offer</h2>
          <p className="text-[#333333] text-base font-normal leading-normal mt-4">
            Explore our wide range of holistic services designed for your well-being.
          </p>
        </header>

        {/* Services Content */}
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="TeamGridItem w-80 bg-white rounded-md shadow p-5 flex flex-col items-center"
            >
              <div className="ImageFrame w-full h-48 rounded-lg mb-5 flex items-center justify-center overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="Text text-left w-full">
                <h4 className="text-[#111928] text-base font-semibold  mb-2">{service.title}</h4>
                <p className="text-[#637381] text-xs font-normal leading-tight mb-4">{service.description}</p>
                <a href="#" className="text-[#637381] text-xs font-semibold leading-tight">
                  Read More...
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
