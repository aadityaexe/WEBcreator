import { useState } from "react";
import Hero1 from "../All-Hero-Section/Hero-1/Hero1";

const HeroComponent1 = () => <Hero1 />;
const HeroComponent2 = () => (
  <div className="p-3 bg-white rounded-lg shadow">Hero 2</div>
);
const HeroComponent3 = () => (
  <div className="p-3 bg-white rounded-lg shadow">Hero 3</div>
);
const HeroComponent4 = () => (
  <div className="p-3 bg-white rounded-lg shadow">Hero 4</div>
);
const HeroComponent5 = () => (
  <div className="p-3 bg-white rounded-lg shadow">Hero 5</div>
);

export default function SplitView() {
  const [selectedComponent, setSelectedComponent] = useState(
    <div>Click on a hero to display here.</div>
  );
  const [selectedNumber, setSelectedNumber] = useState(
    "Click on a number to display here."
  );

  const components = [
    <HeroComponent1 key={1} />,
    <HeroComponent2 key={2} />,
    <HeroComponent3 key={3} />,
    <HeroComponent4 key={4} />,
    <HeroComponent5 key={5} />,
  ];

  const numbers = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];

  return (
    <div className="flex h-screen p-5 gap-5">
      {/* Left Side - Hero Selection */}
      <div className="w-1/4 bg-gray-200 p-5 rounded-lg flex flex-col gap-3">
        {components.map((component, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedComponent(component)}
          >
            {component}
          </div>
        ))}
      </div>
      {/* Middle Section - Number Selection */}
      <div className="w-1/4 bg-gray-300 p-5 rounded-lg flex flex-col gap-3">
        {numbers.map((number, index) => (
          <div
            key={index}
            className="p-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedNumber(number)}
          >
            {number}
          </div>
        ))}
      </div>
      {/* Right Side - Display Section */}
      <div className="w-2/4 flex flex-col gap-5">
        <div className="bg-gray-100 p-5 rounded-lg flex items-center justify-center text-xl font-semibold">
          {selectedComponent}
        </div>
        <div className="bg-gray-100 p-5 rounded-lg flex items-center justify-center text-xl font-semibold">
          {selectedNumber}
        </div>
      </div>
    </div>
  );
}
