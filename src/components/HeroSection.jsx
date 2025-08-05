import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-pink-100 py-32 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-pink-900 leading-tight tracking-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
          Scoopable Skincare That Smells Like Dessert
        </h1>

        <div className="mt-10 flex flex-row justify-center items-center gap-3 sm:gap-6 flex-wrap">
          <a href="body-scurb" className="bg-pink-500 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full text-sm sm:text-lg font-semibold shadow-lg hover:bg-pink-600 transition-all duration-300">
            Body Scrub
          </a>
          <a href="lip-scurb" className="bg-white text-pink-500 border border-pink-400 px-6 py-3 sm:px-10 sm:py-4 rounded-full text-sm sm:text-lg font-semibold shadow-lg hover:bg-pink-50 transition-all duration-300">
            Lip Scrub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
