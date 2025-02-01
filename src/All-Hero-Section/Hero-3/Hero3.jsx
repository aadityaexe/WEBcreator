import tryImage from "../../assets/try.png";
import { useContent } from "../../Store/ContentValues";

const Hero3 = () => {
  const { colors, content, isGradient } = useContent();

  return (
    <section
      className="flex flex-col items-center justify-center text-white min-h-screen px-6"
      style={{
        background: isGradient 
          ? colors?.gradient || "linear-gradient(to top, #1e293b, #111827)" // Unique gradient
          : colors?.bg || "#111827", // Unique solid background
      }}
    >
      {/* Image Section */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 shadow-lg">
        <img src={tryImage} alt="Hero" className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="text-center max-w-2xl">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: colors?.h1 || "#ffffff" }} // Dynamic heading color
        >
          {content?.hero?.title || "Welcome To Funky Universe"}
        </h1>
        <p
          className="text-lg md:text-xl mb-6"
          style={{ color: colors?.p || "#d1d5db" }} // Dynamic paragraph color
        >
          {content?.hero?.subtitle ||
            `Discover endless possibilities and create something extraordinary with
          our tools and resources. Join the journey today!`}
        </p>
        <button
          className="px-6 py-3 rounded-full shadow-lg font-semibold transition duration-300"
          style={{
            backgroundColor: colors?.a || "#ec4899", // Dynamic button color
            color: colors?.a === "#ffffff" ? "#000" : "#fff", // Ensure contrast
          }}
        >
          {content?.hero?.buttonName || `Get Started`}
        </button>
      </div>
    </section>
  );
};

export default Hero3;
