import { useEffect } from "react";
import { gsap } from "gsap";

const About3 = () => {
  useEffect(() => {
    gsap.from(".about-text", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-10">
      <div className="about-text text-4xl font-bold">Minimal Design</div>
      <p className="about-text text-lg md:w-1/2 mt-4">
        We believe in simplicity and elegance to create meaningful digital
        experiences.
      </p>
    </section>
  );
};

export default About3;
