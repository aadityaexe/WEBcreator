
import tryImage from "../../assets/try.png";

const Hero2 = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center bg-gray-900 text-white min-h-screen p-6">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-96 md:h-full">
        <img
          src={tryImage}
          alt="Hero"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left p-8 md:p-12">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Welcome to the Funky Universe
        </h1>
        <p className="text-lg mb-8">
          Discover endless possibilities and create something extraordinary with
          our tools and resources.
        </p>
        <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-lg text-white font-semibold transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero2;
