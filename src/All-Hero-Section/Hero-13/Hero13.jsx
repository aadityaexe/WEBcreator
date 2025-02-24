import { useContent } from "../../Store/ContentValues";

const Home13 = () => {
  const { colors, isGradient } = useContent();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div
        className="flex items-center justify-center p-10"
        style={{
          backgroundColor: colors?.leftBg || "#1f2937",
          color: colors?.leftText || "#ffffff",
        }}
      >
        <h1 className="text-4xl font-bold">Discover Our Platform</h1>
      </div>
      <div
        className="flex items-center justify-center p-10"
        style={{
          background: isGradient
            ? colors?.gradient || "linear-gradient(to left, #ff9a9e, #fad0c4)"
            : colors?.rightBg || "#374151",
          color: colors?.rightText || "#ffffff",
        }}
      >
        <p className="text-xl">
          Bringing innovative solutions for a better tomorrow.
        </p>
      </div>
    </section>
  );
};

export default Home13;
