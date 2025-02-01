import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tryImage from "../assets/try.png";
import { FaRocket, FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animations
      const tl = gsap.timeline();
      tl.from([headingRef.current, paragraphRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }).from(
        imageRef.current,
        {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Scroll-triggered animations
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop parallax
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: -100,
          scale: 1.1,
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile parallax
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: -30,
          scale: 1.05,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 min-h-screen text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Left Section - Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Welcome to <span className="text-pink-300">MeemToken</span>
          </h1>
          <p ref={paragraphRef} className="text-lg md:text-xl text-gray-300">
            The ultimate platform for funky tokens that redefine the way you
            experience crypto.
          </p>
          <div
            ref={buttonsRef}
            className="flex justify-center md:justify-start space-x-4"
          >
            <a
              href="#explore"
              onClick={() => navigate("/enter-website-info")}
              className="bg-pink-600 hover:bg-pink-700 transition-all text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2"
            >
              <FaRocket />
              <span>Create Website</span>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-visible">
            <img
              ref={imageRef}
              src={tryImage}
              alt="MeemToken"
              className="absolute top-0 left-0 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
