import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer6 = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
          <p className="text-lg">
            &copy; 2025 Your Company. All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-blue-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
