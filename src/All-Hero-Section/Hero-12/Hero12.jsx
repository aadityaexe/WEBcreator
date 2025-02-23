import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useContent } from "../../Store/ContentValues";

const Home12 = () => {
  const { colors, isGradient } = useContent();
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      className="h-screen flex items-center justify-center text-center p-10"
      style={{
        background: isGradient ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)" : colors?.bg || "#1a202c",
        color: colors?.text || "#ffffff",
      }}
    >
      <h1 ref={titleRef} className="text-5xl font-bold">
        Welcome to the Future 🚀
      </h1>
    </section>
  );
};

export default Home12;
