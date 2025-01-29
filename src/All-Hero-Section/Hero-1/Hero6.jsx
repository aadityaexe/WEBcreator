import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero6 = () => {
  useEffect(() => {
    gsap.to(".wave", {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-blue-500 to-green-500 text-white p-10">
      {/* Text */}
      <h1 className="text-7xl font-extrabold wave">Ride the Wave 🌊</h1>
      <p className="text-lg md:text-2xl mt-4">Experience the rhythm of life in vibrant colors.</p>
      <button className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-yellow-800 text-black rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 wave">
        Surf Now 🌈
      </button>
    </section>
  );
};

export default Hero6;
