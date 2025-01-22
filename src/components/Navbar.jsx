import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaRocket,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 via-gray-500 to-gray-800 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white font-bold text-xl tracking-wide">
          FunkyNav
        </div>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-white">
          <li className="group">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaHome className="text-lg group-hover:scale-125 transition-transform duration-300" />
              <span>Home</span>
            </a>
          </li>
          <li className="group">
            <a
              href="#about"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaInfoCircle className="text-lg group-hover:scale-125 transition-transform duration-300" />
              <span>About</span>
            </a>
          </li>
          <li className="group">
            <a
              href="#services"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaRocket className="text-lg group-hover:scale-125 transition-transform duration-300" />
              <span>Services</span>
            </a>
          </li>
          <li className="group">
            <a
              href="#contact"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaEnvelope className="text-lg group-hover:scale-125 transition-transform duration-300" />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="sm:hidden bg-gray-800 text-white flex flex-col space-y-4 p-4">
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaInfoCircle />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaRocket />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center space-x-2 hover:text-pink-300 transition duration-300"
            >
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
