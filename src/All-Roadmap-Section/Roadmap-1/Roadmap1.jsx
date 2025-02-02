import { FaCheckCircle } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

const defaultRoadmap = [
  { phase: "Phase 1", detail: "Default info for Phase 1" },
  { phase: "Phase 2", detail: "Default info for Phase 2" },
  { phase: "Phase 3", detail: "Default info for Phase 3" },
  { phase: "Phase 4", detail: "Default info for Phase 4" },
  { phase: "Phase 5", detail: "Default info for Phase 5" },
];

const Roadmap1 = () => {
  const { content, colors } = useContent();

  // Fill missing roadmap data while keeping existing ones
  const roadmapData = defaultRoadmap.map((defaultPhase, index) => {
    return content.roadmap?.[index] ? content.roadmap[index] : defaultPhase;
  });

  return (
    <div
      className="relative py-16 w-full"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827", // Fallback for background
        color: colors?.text || "#fff", // Dynamic text color
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Roadmap</h2>
      <div className="max-w-4xl mx-auto relative flex gap-5 flex-col items-center">
        <div
          className="absolute w-2 bg-gray-400 rounded-full h-full left-1/2 transform -translate-x-1/2"
          style={{ borderRadius: "50% 50% 50% 50%" }}
        ></div>

        {roadmapData.map((phase, index) => (
          <div
            key={index}
            className={`relative flex items-center p-6 rounded-xl shadow-lg border-2 w-2/3 ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
            style={{
              backgroundColor: colors?.cardBg || "rgba(0, 0, 0, 0.5)", // Dynamic background color for each card
              borderColor: colors?.cardBorder || "rgba(255, 255, 255, 0.2)", // Dynamic border color
            }}
          >
            <div className="w-10 h-10 flex justify-center items-center mr-4">
              <FaCheckCircle className="text-green-400 text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{phase.phase}</h3>
              <p className="text-gray-300">{phase.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap1;
