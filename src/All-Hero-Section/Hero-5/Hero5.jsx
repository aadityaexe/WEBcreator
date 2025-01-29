import  { useEffect } from "react";
import { gsap } from "gsap";
import tryImage from "../../assets/try.png";

const Hero5 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-image",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1,0.3)" }
    );
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-yellow-500 via-pink-500 to-purple-800 text-white p-10">
      {/* Image */}
      <div className="hero-image w-full md:w-1/2 flex justify-center">
        <img
          src={tryImage}
          alt="Funky"
          className="rounded-full shadow-2xl"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold">Let's Get Funky! 🎨</h1>
        <p className="text-lg md:text-xl mt-4">Join the most colorful journey of creativity and fun.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Hero5;
