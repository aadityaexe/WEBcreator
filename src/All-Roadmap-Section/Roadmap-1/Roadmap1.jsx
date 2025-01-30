import { FaCheckCircle } from "react-icons/fa";

const roadmapData = [
  {
    title: "Phase 1",
    description: "Launch website and social media.",
    completed: true,
  },
  {
    title: "Phase 2",
    description: "Develop smart contracts and conduct audits.",
    completed: true,
  },
  {
    title: "Phase 3",
    description: "Community building and partnerships.",
    completed: false,
  },
  {
    title: "Phase 4",
    description: "Mainnet launch and marketing expansion.",
    completed: false,
  },
];

const Roadmap1 = () => {
  return (
    <div className="relative py-16 w-full bg-gradient-to-r from-pink-500 to-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Roadmap</h2>
      <div className="max-w-4xl mx-auto relative flex gap-5 flex-col items-center">
        <div
          className="absolute w-2 bg-gray-400 rounded-full h-full left-1/2 transform -translate-x-1/2"
          style={{ borderRadius: "50% 50% 50% 50%" }}
        ></div>
        {roadmapData.map((phase, index) => (
          <div
            key={index}
            className={`relative flex items-center p-6 rounded-xl shadow-lg border-2 ${
              phase.completed ? "border-green-400" : "border-gray-500"
            } bg-black/50 backdrop-blur-lg w-2/3 ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            <div className="w-10 h-10 flex justify-center items-center mr-4">
              {phase.completed ? (
                <FaCheckCircle className="text-green-400 text-3xl" />
              ) : (
                <div className="w-6 h-6 border-4 border-gray-400 rounded-full" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{phase.title}</h3>
              <p className="text-gray-300">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap1;
