
import tryImage from "../../assets/try.png";

const Hero3 = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen px-6">
      {/* Image Section */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 shadow-lg">
        <img
          src={tryImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Funky Universe
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover endless possibilities and create something extraordinary with
          our tools and resources.
        </p>
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full shadow-lg text-white font-semibold transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero3;
