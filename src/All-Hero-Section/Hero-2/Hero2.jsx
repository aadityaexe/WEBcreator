import tryImage from "../../assets/try.png";
import { useContent } from "../../Store/ContentValues";

const Hero2 = () => {
  const { colors, content, isGradient } = useContent();

  return (
    <section
      className="relative flex flex-col md:flex-row items-center text-white min-h-screen p-6"
      style={{
        background: isGradient 
          ? colors?.gradient || "linear-gradient(to right, #ec4899, #1f2937, #111827)" // Default gradient
          : colors?.bg || "#111827", // Default solid background
      }}
    >
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
        <h1 
          className="text-5xl font-bold mb-6 leading-tight"
          style={{ color: colors?.h1 || "#ffffff" }} // Default heading color
        >
          {content?.hero?.title || "Welcome To Funky Universe"}
        </h1>
        <p 
          className="text-lg mb-8"
          style={{ color: colors?.p || "#d1d5db" }} // Default paragraph color
        >
          {content?.hero?.subtitle || 
            `Discover endless possibilities and create something extraordinary with our tools and resources. Join the journey today!`}
        </p>
        <button
          className="px-8 py-3 rounded-lg shadow-lg text-white font-semibold transition duration-300"
          style={{
            backgroundColor: colors?.a || "#ec4899", // Default button color
            color: colors?.a === "#ffffff" ? "#000" : "#fff", // Ensure contrast
          }}
        >
          {content?.hero?.buttonName || `Get Started`}
        </button>
      </div>
    </section>
  );
};

export default Hero2;
