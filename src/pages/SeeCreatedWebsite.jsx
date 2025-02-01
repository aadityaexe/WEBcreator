import React from "react";
import { useContent } from "../Store/ContentValues";

const SeeCreatedWebsite = () => {
  const { selectedComponents } = useContent();

  return (
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
  );
};

export default SeeCreatedWebsite;
