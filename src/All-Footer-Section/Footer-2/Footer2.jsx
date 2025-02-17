<<<<<<< HEAD
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Stay Connected</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-white hover:text-blue-400"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-blue-400"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-blue-400"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
          <form className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-black"
            />
            <button className="px-4 py-2 bg-blue-500 rounded-r-md text-white hover:bg-blue-400">
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-sm">&copy; 2025 Your Company. All Rights Reserved.</p>
=======
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

const Footer2 = () => {
  const { colors } = useContent();

  return (
    <footer
      className="relative text-center py-6 mt-10 overflow-hidden w-full"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827",
        color: colors?.text || "#fff",
      }}
    >
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

export default Footer2;
