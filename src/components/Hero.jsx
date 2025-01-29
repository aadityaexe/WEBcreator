import tryImage from "../assets/try.png";
import { FaRocket, FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 min-h-screen text-white flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Left Section - Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-pink-300">MeemToken</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            The ultimate platform for funky tokens that redefine the way you
            experience crypto.
          </p>
          <div
            onClick={() => navigate("/new-website")}
            className="flex justify-center md:justify-start space-x-4"
          >
            <a
              href="#explore"
              className="bg-pink-600 hover:bg-pink-700 transition-all text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2"
            >
              <FaRocket />
              <span>Explore Now</span>
            </a>
            <a
              href="#learn-more"
              className="bg-gray-800 hover:bg-gray-700 transition-all text-pink-300 font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2"
            >
              <FaEthereum />
              <span>Learn More</span>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={tryImage}
              alt="MeemToken"
              className="absolute top-0 left-0 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
