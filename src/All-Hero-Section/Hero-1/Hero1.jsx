import React from "react";
import tryImage from "../../assets/try.png";

const Hero1 = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 text-white min-h-screen p-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={tryImage}
          alt="Hero"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to the Funky Universe
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover endless possibilities and create something extraordinary with
          our tools and resources. Join the journey today!
        </p>
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-lg text-white font-semibold transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero1;
