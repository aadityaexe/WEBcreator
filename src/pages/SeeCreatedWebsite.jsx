import React from "react";
import { useContent } from "../Store/ContentValues";
import { useNavigate } from "react-router-dom";

const SeeCreatedWebsite = () => {
  const navigate = useNavigate();
  const { selectedComponents } = useContent();

  return (
    <div className="min-h-screen pt-20 px-4 flex flex-col items-center">
      <div className="w-full">
        {selectedComponents.length > 0 ? (
          selectedComponents.map((component, index) => (
            <div key={index} className="w-full">
              {React.isValidElement(component.content) ? (
                React.cloneElement(component.content)
              ) : (
                <p className="text-center text-gray-500">Invalid component</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No components selected</p>
        )}
      </div>
      <button
        onClick={() => navigate("/get-website-code")}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-purple-500 hover:to-pink-500"
      >
        Get Website Code
      </button>
    </div>
  );
};

export default SeeCreatedWebsite;
