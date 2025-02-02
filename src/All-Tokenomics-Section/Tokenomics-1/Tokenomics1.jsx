import { useContent } from "../../Store/ContentValues";

export default function Tokenomics1() {
  const { colors } = useContent(); // Access dynamic colors from store

  return (
    <section
      className="w-full py-16 px-8"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827", // Fallback for background
        color: colors?.text || "#fff", // Dynamic text color
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Tokenomics</h2>
        <p className="text-lg mb-8">
          A transparent and fair distribution model for our ecosystem.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Total Supply", "Liquidity", "Team & Development", "Marketing", "Staking & Rewards", "Reserve"].map((item, index) => (
            <div
              key={index}
              className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg"
              style={{
                backgroundColor: colors?.cardBg || "rgba(255, 255, 255, 0.1)", // Dynamic background color for cards
                borderColor: colors?.cardBorder || "rgba(255, 255, 255, 0.2)", // Dynamic border color for cards
              }}
            >
              <h3 className="text-2xl font-semibold mb-2">{item}</h3>
              <p className="text-xl font-bold">{["1,000,000,000", "30%", "15%", "20%", "25%", "10%"][index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
