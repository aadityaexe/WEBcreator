/* eslint-disable react/prop-types */
import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Hero1 from "../All-Hero-Section/Hero-1/Hero1";
import Hero2 from "../All-Hero-Section/Hero-2/Hero2";
import Hero3 from "../All-Hero-Section/Hero-3/Hero3";
import Hero4 from "../All-Hero-Section/Hero-4/Hero4";
import Hero5 from "../All-Hero-Section/Hero-5/Hero5";
import Hero6 from "../All-Hero-Section/Hero-6/Hero6";
import Roadmap1 from "../All-Roadmap-Section/Roadmap-1/Roadmap1";
import FAQ from "../All-Faq-Section/Faq-1/Faq1";
import Tokenomics1 from "../All-Tokenomics-Section/Tokenomics-1/Tokenomics1";
import SocialIcon1 from "../All-SocialIcon-Section/SocialIcon-1/SocialIcon1";
import Footer1 from "../All-Footer-Section/Footer-1/Footer1";
const ItemType = {
  HERO: "hero",
  NUMBER: "number",
  ROADMAP: "roadmap",
  FAQ: "faq",
  FOOTER: "footer",
  SOCIALICON: "socialicon",
  TOKENOMICS: "tokenomics",
};

// Component definitions
const HeroComponent1 = () => <Hero1 />;
const HeroComponent2 = () => <Hero2 />;
const HeroComponent3 = () => <Hero3 />;
const HeroComponent4 = () => <Hero4 />;
const HeroComponent5 = () => <Hero5 />;
const HeroComponent6 = () => <Hero6 />;
const RoadmapComponent = () => <Roadmap1 />;
const FaqComponent = () => <FAQ />;
const FooterComponent = () => <Footer1 />;
const SocialIconComponent = () => <SocialIcon1 />;
const TokenomicsComponent = () => <Tokenomics1 />;

const components = [
  { id: 1, type: ItemType.HERO, content: <HeroComponent1 /> },
  { id: 2, type: ItemType.HERO, content: <HeroComponent2 /> },
  { id: 3, type: ItemType.HERO, content: <HeroComponent3 /> },
  { id: 4, type: ItemType.HERO, content: <HeroComponent4 /> },
  { id: 5, type: ItemType.HERO, content: <HeroComponent5 /> },
  { id: 6, type: ItemType.HERO, content: <HeroComponent6 /> },
  { id: 7, type: ItemType.SOCIALICON, content: <SocialIconComponent /> },
  { id: 8, type: ItemType.TOKENOMICS, content: <TokenomicsComponent /> },
  { id: 9, type: ItemType.ROADMAP, content: <RoadmapComponent /> },
  { id: 10, type: ItemType.FAQ, content: <FaqComponent /> },
  { id: 11, type: ItemType.FOOTER, content: <FooterComponent /> },
];

const DraggableItem = ({ item, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`cursor-pointer p-3 bg-white rounded-lg shadow hover:bg-gray-100 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {item.content}
    </div>
  );
};

const DropZone = ({ acceptType, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: acceptType,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bg-gray-100 rounded-lg flex items-center justify-center text-xl font-semibold min-h-[100px] transition-colors ${
        isOver ? "bg-gray-300" : ""
      }`}
    >
      {children || (
        <span className="text-gray-500">Drop {acceptType} here</span>
      )}
    </div>
  );
};

export default function SplitView() {
  const [sections, setSections] = useState({
    [ItemType.HERO]: null,
    [ItemType.SOCIALICON]: null,
    [ItemType.TOKENOMICS]: null,
    [ItemType.ROADMAP]: null,
    [ItemType.FAQ]: null,
    [ItemType.FOOTER]: null,
  });

  const handleDrop = (item, sectionType) => {
    setSections((prev) => ({ ...prev, [sectionType]: item.content }));
  };

  // Group components by type for better organization
  const groupedComponents = components.reduce((groups, component) => {
    const group = groups[component.type] || [];
    group.push(component);
    groups[component.type] = group;
    return groups;
  }, {});

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row h-full pt-20 ">
        {/* Left Panel */}
        <div
          className="w-full md:w-2/4 space-y-5 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 20px)" }}
        >
          {/* Components Section */}
          {Object.entries(groupedComponents).map(([type, items]) => (
            <div key={type} className="bg-gray-200 p-5 rounded-lg space-y-3">
              <h3 className="font-bold text-2xl capitalize">{type}</h3>
              {items.map((component) => (
                <div key={component.id}>
                  <DraggableItem
                    key={component.id}
                    item={component}
                    type={component.type}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div
          className="w-full md:w-2/4  overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 20px)" }}
        >
          {Object.entries(sections).map(([sectionType]) => (
            <DropZone
              key={sectionType}
              acceptType={sectionType}
              onDrop={(item) => handleDrop(item, sectionType)}
            >
              {sections[sectionType]}
            </DropZone>
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
