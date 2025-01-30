import { useState } from "react";
import Title from "../components/Title";
import components from "../All-Hero-Section/MapFile/AllHeroMapping";
import { FiClipboard } from "react-icons/fi";

const AllTypeOfHeros = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500); // Reset copied state after 1.5 sec
  };

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 pt-20 space-y-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {components.map(({ id, component: HeroComponent }) => (
          <div key={id}>
            <div className="flex items-center space-x-3">
              <Title title={id} />
              <button
                onClick={() => handleCopy(id)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                <FiClipboard className="w-5 h-5 text-gray-600" />
              </button>
              {copiedId === id && (
                <span className="text-green-500">Copied!</span>
              )}
            </div>
            <HeroComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTypeOfHeros;
