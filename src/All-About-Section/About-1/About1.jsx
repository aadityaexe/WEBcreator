import { useContent } from "../../Store/ContentValues";
import image1 from "../../assets/try.png";

const About1 = () => {
  const { colors, content, isGradient } = useContent();

  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 px-6 md:px-16 py-12"
      style={{
        background: isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)" // Example gradient
          : colors?.bg || "#111827", // Default background color
      }}
    >
      {/* Image Section */}
      <div className="w-full pl-24 md:w-1/2 transform hover:scale-105 transition duration-300">
        <img
          src={image1}
          alt="About Image"
          className="w-60 h-auto rounded-lg shadow-2xl border-4 border-pink-300"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-4 drop-shadow-lg"
          style={{
            background: `linear-gradient(to right, ${colors?.h1Start || "#ff7e5f"}, ${colors?.h1End || "#feb47b"})`, // Dynamic gradient for heading
            WebkitBackgroundClip: "text",
          }}
        >
          {content?.about?.title || "About Us"}
        </h2>
        <p
          className="text-lg leading-relaxed animate-pulse"
          style={{ color: colors?.p || "#d1d5db" }} // Dynamic paragraph color
        >
          {content?.about?.description ||
            "We thrive on creativity and innovation, bringing the most exciting and unique experiences to our audience. Our passion fuels everything we do, making sure every step is as vibrant as our ideas."}
        </p>
      </div>
    </div>
  );
};

export default About1;
