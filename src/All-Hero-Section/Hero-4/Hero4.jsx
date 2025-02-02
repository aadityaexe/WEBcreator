import tryImage from "../../assets/try.png";
import { useContent } from "../../Store/ContentValues";

const Hero4 = () => {
  const { colors, content, isGradient } = useContent();

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-12 text-white"
      style={{
        background: isGradient
          ? colors?.gradient || "linear-gradient(to bottom right, #ec4899, #6b21a8, #000)"
          : colors?.bg || "#111827",
      }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl">
          <img src={tryImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: colors?.h1 || "#ffffff" }}
        >
          {content?.hero?.title || "Welcome To Funky Universe"}
        </h1>
        <p
          className="text-lg md:text-xl mb-6"
          style={{ color: colors?.p || "#d1d5db" }}
        >
          {content?.hero?.subtitle ||
            `Discover endless possibilities and create something extraordinary with
          our tools and resources. Join the journey today!`}
        </p>
        <button
          className="px-6 py-3 rounded-full shadow-lg font-semibold transition duration-300"
          style={{
            backgroundColor: colors?.a || "#ec4899",
            color: colors?.a === "#ffffff" ? "#000" : "#fff",
          }}
        >
          {content?.hero?.buttonName || `Get Started`}
        </button>
      </div>
    </section>
  );
};

export default Hero4;
