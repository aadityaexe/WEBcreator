import React from "react";
import { useContent } from "../../Store/ContentValues";

const Home16 = () => {
  const { colors, isGradient } = useContent();

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center p-10"
      style={{
        background: isGradient ? colors?.gradient || "linear-gradient(to right, #ff512f, #dd2476)" : colors?.bg || "#1a202c",
        color: colors?.text || "#ffffff",
      }}
    >
      <h1 className="text-6xl font-extrabold">Unlock Your Potential</h1>
      <p className="text-xl mt-4 max-w-lg">
        Empowering businesses with cutting-edge technology and innovation.
      </p>
      <button
        className="mt-6 px-6 py-3 rounded-lg shadow-lg font-semibold transform hover:scale-110 transition-transform duration-300"
        style={{
          backgroundColor: colors?.button || "#facc15",
          color: colors?.button === "#ffffff" ? "#000" : "#fff",
        }}
      >
        Get Started 🚀
      </button>
    </section>
  );
};

export default Home16;
