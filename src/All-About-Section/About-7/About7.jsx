import { useEffect } from "react";
import { gsap } from "gsap";

const About7 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-nature",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, stagger: 0.3 }
    );
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-green-200 text-green-800 p-10">
      <div className="md:w-1/2">
        <img
          src="https://source.unsplash.com/400x300/?nature"
          alt="Nature"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-6">
        <h1 className="text-5xl font-bold about-nature">Nature & Harmony 🌳</h1>
        <p className="text-lg mt-4 about-nature">
          Connecting with the beauty of the natural world.
        </p>
      </div>
    </section>
  );
};

export default About7;
