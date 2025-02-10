import { useContent } from "../../Store/ContentValues";
import tryImage from "../../assets/try.png";
const Hero1 = () => {
  const { colors, content, isGradient } = useContent();

  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between text-white min-h-screen p-6"
      style={{
        background: isGradient
          ? colors?.gradient ||
            "linear-gradient(to right, #ec4899, #1f2937, #111827)" // Default gradient
          : colors?.bg || "#111827", // Default solid background
      }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={tryImage}
          alt="Hero"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: colors?.h1 || "#ffffff" }} // Default white heading color
        >
          {content?.hero?.title || "Welcome To Funky Universe"}
        </h1>
        <p
          className="text-lg md:text-xl mb-6"
          style={{ color: colors?.p || "#d1d5db" }} // Default light gray paragraph color
        >
          {content?.hero?.subtitle ||
            `Discover endless possibilities and create something extraordinary with
          our tools and resources. Join the journey today!`}
        </p>
        <button
          className="px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300"
          style={{
            backgroundColor: colors?.a || "#ec4899", // Default pink button
            color: colors?.a === "#ffffff" ? "#000" : "#fff", // Ensure contrast
          }}
        >
          {content?.hero?.buttonName || `Get Started`}
        </button>
      </div>
    </section>
  );
};

export default Hero1;
