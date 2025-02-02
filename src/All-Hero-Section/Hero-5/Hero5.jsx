import { useEffect } from "react";
import { gsap } from "gsap";
import tryImage from "../../assets/try.png";
import { useContent } from "../../Store/ContentValues";

const Hero5 = () => {
  const { colors, content, isGradient } = useContent();

  useEffect(() => {
    gsap.fromTo(
      ".hero-image",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1,0.3)" }
    );
  }, []);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen text-white p-10"
      style={{
        background: isGradient
          ? colors?.gradient || "linear-gradient(to bottom right, #facc15, #ec4899, #7e22ce)"
          : colors?.bg || "#111827",
      }}
    >
      {/* Image */}
      <div className="hero-image w-full md:w-1/2 flex justify-center">
        <img
          src={content?.hero?.image || tryImage}
          alt="Funky"
          className="rounded-full shadow-2xl w-48 h-48 md:w-64 md:h-64 object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1
          className="text-5xl md:text-7xl font-extrabold"
          style={{ color: colors?.h1 || "#ffffff" }}
        >
          {content?.hero?.title || `Let's Get Funky! 🎨`}
        </h1>
        <p
          className="text-lg md:text-xl mt-4"
          style={{ color: colors?.p || "#d1d5db" }}
        >
          {content?.hero?.subtitle || `Join the most colorful journey of creativity and fun`}
        </p>
        <button
          className="mt-6 px-6 py-3 rounded-lg shadow-lg font-semibold transition-transform duration-300 transform hover:scale-105"
          style={{
            backgroundColor: colors?.a || "#3b82f6",
            color: colors?.a === "#ffffff" ? "#000" : "#fff",
          }}
        >
          {content?.hero?.buttonName || `Get Started`}
        </button>
      </div>
    </section>
  );
};

export default Hero5;
