
import tryImage from "../../assets/try.png";
import { useContent } from "../../Store/ContentValues";

const Hero4 = () => {

  const { content } = useContent(); // ✅ Access the updated state

  return (
    <section className="relative bg-gradient-to-br from-pink-500 via-purple-700 to-black text-white min-h-screen flex items-center">
      {/* Diagonal Design */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-transparent to-transparent transform -skew-y-6"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full p-8 md:p-16 z-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {content?.hero?.title || "Welcome To FUnky Universe"}
          </h1>
          <p className="text-lg md:text-xl mb-8">
          { content?.hero?.subtitle || `Discover endless possibilities and create something extraordinary with
          our tools and resources. Join the journey today!`}
          </p>
          <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-lg text-white font-semibold transition duration-300">
          { content?.hero?.buttonName ||  `Get Started`}
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={tryImage}
            alt="Hero"
            className="rounded-xl shadow-xl w-full max-w-sm md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero4;
