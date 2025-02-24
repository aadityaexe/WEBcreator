import { useEffect } from "react";
import { gsap } from "gsap";
import { useContent } from "../../Store/ContentValues";

const Hero6 = () => {
  const { colors, content, isGradient } = useContent(); // ✅ Access dynamic state

  useEffect(() => {
    gsap.to(".wave", {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-10"
      style={{
        background: isGradient
          ? colors?.gradient ||
            "linear-gradient(to bottom right, #ec4899, #3b82f6, #10b981)"
          : colors?.bg || "#111827",
      }}
    >
      {/* Text */}
      <h1
        className="text-5xl md:text-7xl font-extrabold wave"
        style={{ color: colors?.h1 || "#ffffff" }}
      >
        {content?.hero?.title || `Ride the Wave 🌊`}
      </h1>
      <p
        className="text-lg md:text-2xl mt-4"
        style={{ color: colors?.p || "#d1d5db" }}
      >
        {content?.hero?.subtitle ||
          `Experience the rhythm of life in vibrant colors.`}
      </p>

      <button
        className="mt-6 px-6 py-3 rounded-lg shadow-lg font-semibold transform hover:scale-110 transition-transform duration-300 wave"
        style={{
          backgroundColor: colors?.a || "#facc15",
          color: colors?.a === "#ffffff" ? "#000" : "#fff",
        }}
      >
        {content?.hero?.buttonName || `Surf Now 🌈`}
      </button>
    </section>
  );
};

export default Hero6;
