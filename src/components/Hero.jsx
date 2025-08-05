import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Hero = () => {
  return (
    <div className="relative pt-40 md:pt-56 min-h-screen flex flex-col items-center justify-center text-white font-poppins">
      {/* Background Image for Mobile (default) and Desktop */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0 
        bg-[url('https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/cropped-front%20(1)%20(1).jpeg')] 
        md:bg-[url('https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/cropped-main%20banner%20img%20(1).jpeg')]"
      />
      
      {/* Dark overlay with higher opacity to improve text contrast */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 text-center px-4">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 font-pacifico text-[#F7C8D4]"
          style={{
            textShadow: '0 0 10px rgba(247, 200, 212, 0.7), 0 0 20px rgba(247, 200, 212, 0.5)',
          }}
        >
          <span className="block sm:inline">Glow Naturally</span>
          <span className="block sm:inline md:ml-4">Scrub Beautifully</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-white font-poppins leading-relaxed">
          Handcrafted body scrubs for smooth, radiant skin.
        </p>

        {/* Button wrapped in React Router Link for internal navigation */}
        <Link to="/shop">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none mt-6 sm:mt-8 md:mt-2 lg:mt-0">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
