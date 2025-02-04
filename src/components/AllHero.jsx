/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroes = [
  {
    id: 1,
    name: "Shadow Phantom",
    description: "A mysterious hero who controls the shadows to fight evil.",
    image: "https://via.placeholder.com/300x200?text=Shadow+Phantom",
  },
  {
    id: 2,
    name: "Storm Guardian",
    description:
      "Master of the winds and storms, protecting the city from harm.",
    image: "https://via.placeholder.com/300x200?text=Storm+Guardian",
  },
  {
    id: 3,
    name: "Blazing Fury",
    description: "A fiery warrior with immense strength and courage.",
    image: "https://via.placeholder.com/300x200?text=Blazing+Fury",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 text-white p-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Bring Out All Heroes!
        </h1>
        <p ref={textRef} className="text-lg md:text-xl mb-8">
          Explore a collection of heroes with unique powers and stories. Let's
          celebrate them all in style!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {heroes.map((hero, index) => (
          <div
            key={hero.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-60 object-cover"
            />
            <div className="bg-gray-800 p-4">
              <h3 className="text-xl font-bold">{hero.name}</h3>
              <p className="text-gray-400">{hero.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto py-5 text-center">
        <button
          ref={buttonRef}
          onClick={() => navigate("/all-heros")}
          className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          See All Heroes
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
