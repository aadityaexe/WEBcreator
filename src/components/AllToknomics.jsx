import React, { useEffect } from "react";
import { gsap } from "gsap";

const tokonomicsData = [
  {
    id: 1,
    name: "Etherian Guardian",
    image: "https://via.placeholder.com/300x200?text=Etherian+Guardian",
    description: "A powerful entity safeguarding the Ethereum network.",
  },
  {
    id: 2,
    name: "Bitcoin Titan",
    image: "https://via.placeholder.com/300x200?text=Bitcoin+Titan",
    description: "An unstoppable force in the world of digital gold.",
  },
  {
    id: 3,
    name: "Solana Phantom",
    image: "https://via.placeholder.com/300x200?text=Solana+Phantom",
    description: "The speedster of decentralized finance.",
  },
];

const AllToknomics = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tokonomics-item",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".tokonomics-item",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Bring Out All Tokonomics!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore a collection of tokonomics with unique powers and stories.
          Let's celebrate them all in style!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {tokonomicsData.map((item) => (
          <div
            key={item.id}
            className="tokonomics-item rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="bg-gray-800 p-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto py-5 text-center">
        <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
          See All Tokonomics
        </button>
      </div>
    </div>
  );
};

export default AllToknomics;
