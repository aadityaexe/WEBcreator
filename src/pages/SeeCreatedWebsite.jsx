import React from "react";
import { useContent } from "../Store/ContentValues";
import { useNavigate } from "react-router-dom";

const SeeCreatedWebsite = () => {
  const navigate = useNavigate();
  const { selectedComponents } = useContent();

  return (
    <>
      {" "}
      <div className="h-screen pt-28">
        {selectedComponents.map((component, index) => (
          <div key={index}>
            {/* Display component name if available */}
            {/* {component.content?.type?.name && <h3>{component.content.type.name}</h3>} */}

            {/* Render the component safely */}
            {React.isValidElement(component.content) ? (
              React.cloneElement(component.content)
            ) : (
              <p>Invalid component</p>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/get-website-code");
        }}
        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:from-purple-500 hover:to-pink-500"
      >
        Get Website Code
      </button>
    </>
  );
};

export default SeeCreatedWebsite;
