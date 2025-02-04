import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmaps = [
  {
    id: 1,
    name: "Blockchain Basics",
    description:
      "Learn the fundamentals of blockchain technology and how it works.",
    image: "https://via.placeholder.com/300x200?text=Blockchain+Basics",
  },
  {
    id: 2,
    name: "Smart Contracts",
    description:
      "Understand smart contracts and how they enable decentralized applications.",
    image: "https://via.placeholder.com/300x200?text=Smart+Contracts",
  },
  {
    id: 3,
    name: "Crypto Security",
    description:
      "Master best practices for securing your crypto assets and wallets.",
    image: "https://via.placeholder.com/300x200?text=Crypto+Security",
  },
];

const AllRoadmap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.utils.toArray(".roadmap-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -200 : 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Bring Out All Roadmaps!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore a collection of roadmaps with unique powers and stories. Let's
          celebrate them all in style!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {roadmaps.map((roadmap, index) => (
          <div
            key={roadmap.id}
            className="roadmap-item rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300"
          >
            <img
              src={roadmap.image}
              alt={roadmap.name}
              className="w-full h-60 object-cover"
            />
            <div className="bg-gray-800 p-4">
              <h3 className="text-xl font-bold">{roadmap.name}</h3>
              <p className="text-gray-400">{roadmap.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-6 text-center">
        <button
          onClick={() => navigate("/all-roadmap")}
          className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          See All Roadmaps
        </button>
      </div>
    </div>
  );
};

export default AllRoadmap;
