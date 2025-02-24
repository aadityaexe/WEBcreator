import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContent } from "../../Store/ContentValues";

gsap.registerPlugin(ScrollTrigger);

const Home15 = () => {
  const { colors, content, isGradient } = useContent();
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background: isGradient
          ? colors?.gradient ||
            "linear-gradient(to bottom right, #1e3a8a, #9333ea)"
          : colors?.bg || "#111827",
      }}
    >
      {/* Background Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            content?.hero?.bgImage || "/src/assets/parallax-bg.jpg"
          })`,
        }}
      ></div>

      {/* Overlay & Content */}
      <div
        className="relative z-10 p-10 rounded-xl"
        style={{
          backgroundColor: colors?.overlay || "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1
          ref={textRef}
          className="text-5xl font-bold"
          style={{ color: colors?.h1 || "#ffffff" }}
        >
          {content?.hero?.title || `Immersive Experiences 🌌`}
        </h1>
        <p
          className="text-lg mt-4 max-w-lg"
          style={{ color: colors?.p || "#d1d5db" }}
        >
          {content?.hero?.subtitle ||
            `Explore a world of innovation with smooth parallax scrolling.`}
        </p>
      </div>
    </section>
  );
};

export default Home15;
