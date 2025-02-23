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
import Hero7 from "../All-Hero-Section/Hero-7/Hero7";
import Hero8 from "../All-Hero-Section/Hero-8/Hero8";
import Hero9 from "../All-Hero-Section/Hero-9/Hero9";
import Hero10 from "../All-Hero-Section/Hero-10/Hero10";
import Hero11 from "../All-Hero-Section/Hero-11/Hero11";
import Hero12 from "../All-Hero-Section/Hero-12/Hero12";
import Hero13 from "../All-Hero-Section/Hero-13/Hero13";
import Hero14 from "../All-Hero-Section/Hero-14/Hero14";
import Hero15 from "../All-Hero-Section/Hero-15/Hero15";
import Hero16 from "../All-Hero-Section/Hero-16/Hero16";
import Hero17 from "../All-Hero-Section/Hero-17/Hero17";
import Roadmap1 from "../All-Roadmap-Section/Roadmap-1/Roadmap1";
import FAQ from "../All-Faq-Section/Faq-1/Faq1";
import Tokenomics1 from "../All-Tokenomics-Section/Tokenomics-1/Tokenomics1";
import Tokenomics2 from "../All-Tokenomics-Section/Tokenomics-2/Tokenomics2";
import Tokenomics3 from "../All-Tokenomics-Section/Tokenomics-3/Tokenomics3";
import Tokenomics4 from "../All-Tokenomics-Section/Tokenomics-4/Tokenomics4";
import Tokenomics5 from "../All-Tokenomics-Section/Tokenomics-5/Tokenomics5";
import SocialIcon1 from "../All-SocialIcon-Section/SocialIcon-1/SocialIcon1";
import Footer1 from "../All-Footer-Section/Footer-1/Footer1";
import About1 from "../All-About-Section/About-1/About1";
import About2 from "../All-About-Section/About-2/About2";
import About3 from "../All-About-Section/About-3/About3";
import About4 from "../All-About-Section/About-4/About4";
import About5 from "../All-About-Section/About-5/About5";
import About6 from "../All-About-Section/About-6/About6";
import About7 from "../All-About-Section/About-7/About7";
import About8 from "../All-About-Section/About-8/About8";
import About9 from "../All-About-Section/About-9/About9";
import About10 from "../All-About-Section/About-10/About10";
import About11 from "../All-About-Section/About-11/About11";
import About12 from "../All-About-Section/About-12/About12";
import About13 from "../All-About-Section/About-13/About13";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Store/ContentValues";
import ColorPalette from "../components/ColorPalette";
import FAQ2 from "../All-Faq-Section/Faq-2/Faq2";
import Footer2 from "../All-Footer-Section/Footer-2/Footer2";
import Footer4 from "../All-Footer-Section/Footer-4.jsx/Footer4";
import Footer3 from "../All-Footer-Section/Footer-3/Footer3";
import Footer5 from "../All-Footer-Section/Footer-5.jsx/Footer5";

const ItemType = {
  HERO: "hero",
  ABOUT: "about",
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

const HeroComponent7 = () => <Hero7 />;
const HeroComponent8 = () => <Hero8 />;
const HeroComponent9 = () => <Hero9 />;
const HeroComponent10 = () => <Hero10 />;
const HeroComponent11 = () => <Hero11 />;
const HeroComponent12 = () => <Hero12 />;
const HeroComponent13 = () => <Hero13 />;
const HeroComponent14 = () => <Hero14 />;
const HeroComponent15 = () => <Hero15 />;
const HeroComponent16 = () => <Hero16 />;
const HeroComponent17 = () => <Hero17 />;

const AboutComponent = () => <About1 />;
const AboutComponent2 = () => <About2 />;
const AboutComponent3 = () => <About3 />;
const AboutComponent4 = () => <About4 />;
const AboutComponent5 = () => <About5 />;
const AboutComponent6 = () => <About6 />;
const AboutComponent7 = () => <About7 />;
const AboutComponent8 = () => <About8 />;
const AboutComponent9 = () => <About9 />;
const AboutComponent10 = () => <About10 />;
const AboutComponent11 = () => <About11 />;
const AboutComponent12 = () => <About12 />;
const AboutComponent13 = () => <About13 />;

const RoadmapComponent = () => <Roadmap1 />;
const FaqComponent = () => <FAQ />;
const FaqComponent2 = () => <FAQ2 />;
const FooterComponent = () => <Footer1 />;
const FooterComponent2 = () => <Footer2 />;
const FooterComponent3 = () => <Footer3 />;
const FooterComponent4 = () => <Footer4 />;
const FooterComponent5 = () => <Footer5 />;
const SocialIconComponent = () => <SocialIcon1 />;
const TokenomicsComponent = () => <Tokenomics1 />;
const TokenomicsComponent2 = () => <Tokenomics2 />;
const TokenomicsComponent3 = () => <Tokenomics3 />;
const TokenomicsComponent4 = () => <Tokenomics4 />;
const TokenomicsComponent5 = () => <Tokenomics5 />;

const components = [
  { id: 1, type: ItemType.HERO, content: <HeroComponent1 /> },
  { id: 2, type: ItemType.HERO, content: <HeroComponent2 /> },
  { id: 3, type: ItemType.HERO, content: <HeroComponent3 /> },
  { id: 4, type: ItemType.HERO, content: <HeroComponent4 /> },
  { id: 5, type: ItemType.HERO, content: <HeroComponent5 /> },
  { id: 6, type: ItemType.HERO, content: <HeroComponent6 /> },
  { id: 7, type: ItemType.HERO, content: <HeroComponent7 /> },
  { id: 8, type: ItemType.HERO, content: <HeroComponent8 /> },
  { id: 9, type: ItemType.HERO, content: <HeroComponent9 /> },
  { id: 10, type: ItemType.HERO, content: <HeroComponent10 /> },
  { id: 11, type: ItemType.HERO, content: <HeroComponent11 /> },
  { id: 12, type: ItemType.HERO, content: <HeroComponent12 /> },
  { id: 13, type: ItemType.HERO, content: <HeroComponent13 /> },
  { id: 14, type: ItemType.HERO, content: <HeroComponent14 /> },
  { id: 15, type: ItemType.HERO, content: <HeroComponent15 /> },
  { id: 16, type: ItemType.HERO, content: <HeroComponent16 /> },
  { id: 17, type: ItemType.HERO, content: <HeroComponent17 /> },
  { id: 18, type: ItemType.SOCIALICON, content: <SocialIconComponent /> },
  { id: 19, type: ItemType.ABOUT, content: <AboutComponent /> },
  { id: 20, type: ItemType.ABOUT, content: <AboutComponent2 /> },
  { id: 21, type: ItemType.ABOUT, content: <AboutComponent3 /> },
  { id: 22, type: ItemType.ABOUT, content: <AboutComponent4 /> },
  { id: 23, type: ItemType.ABOUT, content: <AboutComponent5 /> },
  { id: 24, type: ItemType.ABOUT, content: <AboutComponent6 /> },
  { id: 25, type: ItemType.ABOUT, content: <AboutComponent7 /> },
  { id: 26, type: ItemType.ABOUT, content: <AboutComponent8 /> },
  { id: 27, type: ItemType.ABOUT, content: <AboutComponent9 /> },
  { id: 28, type: ItemType.ABOUT, content: <AboutComponent10 /> },
  { id: 29, type: ItemType.ABOUT, content: <AboutComponent11 /> },
  { id: 30, type: ItemType.ABOUT, content: <AboutComponent12 /> },
  { id: 31, type: ItemType.ABOUT, content: <AboutComponent13 /> },
  { id: 32, type: ItemType.TOKENOMICS, content: <TokenomicsComponent /> },
  { id: 33, type: ItemType.TOKENOMICS, content: <TokenomicsComponent2 /> },
  { id: 34, type: ItemType.TOKENOMICS, content: <TokenomicsComponent3 /> },
  { id: 35, type: ItemType.TOKENOMICS, content: <TokenomicsComponent4 /> },
  { id: 36, type: ItemType.TOKENOMICS, content: <TokenomicsComponent5 /> },
  { id: 37, type: ItemType.ROADMAP, content: <RoadmapComponent /> },
  { id: 38, type: ItemType.FAQ, content: <FaqComponent /> },
  { id: 39, type: ItemType.FAQ, content: <FaqComponent2 /> },
  { id: 40, type: ItemType.FOOTER, content: <FooterComponent /> },
  { id: 41, type: ItemType.FOOTER, content: <FooterComponent2 /> },
  { id: 42, type: ItemType.FOOTER, content: <FooterComponent3 /> },
  { id: 43, type: ItemType.FOOTER, content: <FooterComponent4 /> },
  { id: 44, type: ItemType.FOOTER, content: <FooterComponent5 /> },
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
  const { selectedComponents, setSelectedComponents } = useContent();
  const navigate = useNavigate();
  const [sections, setSections] = useState({
    [ItemType.HERO]: null,
    [ItemType.SOCIALICON]: null,
    [ItemType.ABOUT]: null,
    [ItemType.TOKENOMICS]: null,
    [ItemType.ROADMAP]: null,
    [ItemType.FAQ]: null,
    [ItemType.FOOTER]: null,
  });

  const handleDrop = (item, sectionType) => {
    setSections((prev) => ({ ...prev, [sectionType]: item.content }));

    setSelectedComponents((prev) => {
      const existingIndex = prev.findIndex((comp) => comp.type === sectionType);
      if (existingIndex !== -1) {
        // Update existing component
        return prev.map((comp, index) =>
          index === existingIndex
            ? { type: sectionType, content: item.content }
            : comp
        );
      }
      // Add new component
      return [...prev, { type: sectionType, content: item.content }];
    });
  };

  const handleSubmit = () => {
    console.log("Selected Components:", selectedComponents);
    navigate("/see-created-website");
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
      <div className="flex flex-col md:flex-row h-full pt-20">
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
                <DraggableItem
                  key={component.id}
                  item={component}
                  type={component.type}
                />
              ))}
            </div>
          ))}
          <ColorPalette />
        </div>

        {/* Right Panel */}
        <div
          className="w-full md:w-2/4 overflow-y-auto"
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
          <button
            onClick={handleSubmit}
            className="mt-5 w-full py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </DndProvider>
  );
}
