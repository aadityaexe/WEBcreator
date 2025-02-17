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
      </div>
    </footer>
  );
};

export default Footer2;
