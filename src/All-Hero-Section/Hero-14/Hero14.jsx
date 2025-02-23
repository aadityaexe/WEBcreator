import React from "react";
import { useContent } from "../../Store/ContentValues";

const Home14 = () => {
  const { colors } = useContent();

  return (
    <section className="relative h-screen">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/src/assets/video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: colors?.overlay || "rgba(0, 0, 0, 0.5)", color: colors?.text || "#ffffff" }}
      >
        <h1 className="text-5xl font-bold">Experience Innovation</h1>
        <p className="text-lg mt-4">Your journey into technology begins here.</p>
      </div>
    </section>
  );
};

export default Home14;
