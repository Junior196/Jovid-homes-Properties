import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[45vh] md:h-[70vh] lg:h-[80vh]">
      <img
        loading="lazy"
        src="./Contact/HeroImage.webp"
        className="object-cover w-full h-full"
        alt="Contact Us Hero"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80 flex justify-center items-center">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
