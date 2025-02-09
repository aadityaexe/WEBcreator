import { useState } from "react";
import Title from "../components/Title";
import components from "../All-Hero-Section/MapFile/AllHeroMapping";
import { FiClipboard } from "react-icons/fi";

const AllTypeOfHeros = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 pt-24 space-y-20 ">
      <div className="max-w-7xl mx-auto space-y-20">
        {components.map(({ id, component: HeroComponent }) => (
          <div
            key={id}
            className="p-6 shadow-md rounded-2xl border border-gray-200"
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <Title title={id} />
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(id)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 flex items-center gap-1 text-gray-700"
                >
                  <FiClipboard className="w-5 h-5" />
                  <span className="text-sm font-medium">Copy ID</span>
                </button>
                {copiedId === id && (
                  <span className="text-green-600 font-semibold animate-pulse">
                    Copied!
                  </span>
                )}
              </div>
            </div>
            <div className="mt-6">
              <HeroComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTypeOfHeros;
