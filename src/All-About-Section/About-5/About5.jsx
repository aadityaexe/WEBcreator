import { useEffect } from "react";
import { gsap } from "gsap";
// About3 Component
const About5 = () => {
  useEffect(() => {
    gsap.to(".about-abstract", {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white p-10">
      <h1 className="text-6xl font-extrabold about-abstract">
        Abstract & Funky
      </h1>
      <p className="text-lg mt-4">
        Creative solutions driven by imagination and innovation.
      </p>
    </section>
  );
};

export default About5;
