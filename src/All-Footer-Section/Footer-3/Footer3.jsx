<<<<<<< HEAD
import React from 'react';

const Footer3 = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
        <p className="text-sm">&copy; 2025 Your Company. All Rights Reserved.</p>
=======
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

const Footer3 = () => {
  const { colors } = useContent();

  return (
    <footer
      className="relative text-center py-6 mt-10 overflow-hidden"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827",
        color: colors?.text || "#fff",
      }}
    >
      {/* Wavy Effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C150,90 350,0 600,60 C850,120 1050,30 1200,80 V120 H0 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <p className="text-lg font-semibold animate-pulse">
        Stay Funky, Stay Creative! 🚀
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://twitter.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaGithub />
        </a>
>>>>>>> 8bb0ed480b398d84720bf6bd52d2e118649a9e5d
      </div>
    </footer>
  );
};

export default Footer3;
