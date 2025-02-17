import React, { useEffect } from "react";
import { gsap } from "gsap";
// About3 Component
const About4 = () => {
    useEffect(() => {
        gsap.to(".about-future", {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        });
      }, []);
    
      return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-900 to-black text-white p-10">
          <h1 className="text-6xl font-extrabold about-future">The Future is Now 🔦</h1>
          <p className="text-lg mt-4 about-future">Innovative ideas for tomorrow's world.</p>
        </section>
      );
  };
  
  export default About4;