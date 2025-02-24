import { useContent } from "../../Store/ContentValues";

export const Home11 = () => {
  const { colors, isGradient } = useContent();

  return (
    <section
      className="py-20 px-8"
      style={{
        background: isGradient
          ? colors?.gradient ||
            "linear-gradient(to bottom right, #ec4899, #3b82f6, #10b981)"
          : colors?.bg || "#f3f4f6",
        color: colors?.text || "#111827",
      }}
    >
      <h1
        className="text-4xl font-bold text-center mb-10"
        style={{ color: colors?.h1 || "#111827" }}
      >
        What We Offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md text-center"
            style={{
              backgroundColor: colors?.cardBg || "#ffffff",
              color: colors?.cardText || "#374151",
            }}
          >
            <h2 className="text-2xl font-semibold">{feature}</h2>
            <p style={{ color: colors?.p || "#6b7280" }}>
              {index === 0
                ? "Innovative solutions for modern businesses."
                : index === 1
                ? "Scalable and reliable technology."
                : "Exceptional customer support."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home11;
