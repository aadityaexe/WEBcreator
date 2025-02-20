<<<<<<< HEAD
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useContent } from '../../Store/ContentValues';
=======
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";
>>>>>>> fca1c1c8165b10ccde119414f843562112b69239

const Footer2 = () => {
  const { colors } = useContent();

  return (
    <footer
      className="relative text-center py-6 mt-10 overflow-hidden w-full"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || 'linear-gradient(to right, #ff7e5f, #feb47b)'
          : colors?.bg || '#111827',
        color: colors?.text || '#fff',
      }}
    >
      {/* Footer Content */}
      <p className="text-lg font-semibold animate-pulse">
        Stay Funky, Stay Creative! 🚀
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://facebook.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaFacebook />
        </a>
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
          href="https://linkedin.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      {/* Footer Copyright */}
      <p className="text-sm mt-4">&copy; 2025 Your Company. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer2;
