import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AllRoadmap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll animations for the grid items
    gsap.fromTo(
      ".roadmap-item",
      {
        opacity: 0,
        x: -200, // Start from the left
      },
      {
        opacity: 1,
        x: 0, // End at normal position
        duration: 1,
        scrollTrigger: {
          trigger: ".roadmap-item",
          start: "top 80%", // Start the animation when the item is 80% from the top
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".roadmap-item-right",
      {
        opacity: 0,
        x: 200, // Start from the right
      },
      {
        opacity: 1,
        x: 0, // End at normal position
        duration: 1,
        scrollTrigger: {
          trigger: ".roadmap-item-right",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
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
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className={`roadmap-item rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
              index % 2 === 0 ? "" : "roadmap-item-right"
            }`}
          >
            <img
              src={`https://via.placeholder.com/300x200?text=Hero+${item}`}
              alt={`Hero ${item}`}
              className="w-full h-60 object-cover"
            />
            <div className="bg-gray-800 p-4">
              <h3 className="text-xl font-bold">Roadmap {item}</h3>
              <p className="text-gray-400">
                A brief description of Roadmap {item}.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-5 text-center">
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
