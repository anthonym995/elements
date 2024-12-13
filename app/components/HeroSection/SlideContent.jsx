// SlideContent.js
import React from "react";

const SlideContent = ({ slide }) => {
  return (
    <div
      className="relative h-full w-full bg-cover bg-center flex flex-col justify-start items-center text-center"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>
      {/* content */}
      <div className="container relative z-10 mx-auto flex flex-col justify-center items-center gap-14 py-24 lg:py-40">
        <div className="Header w-full h-auto flex flex-col justify-start items-center gap-4 text-center px-4">
          <h1 className="font-montserrat text-white text-4xl lg:text-6xl font-bold leading-tight">{slide.title}</h1>
          <p className="Text text-white text-lg lg:text-2xl leading-relaxed">
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
            className="w-48 lg:w-64 h-12 px-5 lg:px-7 py-3.5 bg-[#39b54a] hover:bg-[#32a043] rounded-full flex justify-center items-center transition duration-300"
            aria-label={`Action button: ${slide.buttonText}`}
          >
            <span className="text-white text-base lg:text-lg font-semibold leading-tight">{slide.buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
