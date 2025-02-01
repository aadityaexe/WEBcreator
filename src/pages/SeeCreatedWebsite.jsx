import React from "react";
import { useContent } from "../Store/ContentValues";

const SeeCreatedWebsite = () => {
  const { selectedComponents } = useContent();

  return (
    <div className="h-screen pt-28">
      {selectedComponents.map((component, index) => (
        <div key={index}>
          <h3>{component.content.type.name}</h3>
          {/* Safely clone the component, ensuring the ref is passed correctly */}
          {React.cloneElement(component, {
            ...component.props,
            ref: component.ref || null, // Ensuring ref is not invalid
          })}
        </div>
      ))}
    </div>
  );
};

export default SeeCreatedWebsite;
