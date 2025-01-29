import React from "react";
import { useNavigate } from "react-router-dom";
const AllRoadmap = () => {
  const navigate = useNavigate();
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
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
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
