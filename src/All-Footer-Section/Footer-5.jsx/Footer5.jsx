import { useContent } from "../../Store/ContentValues";

const Footer5 = () => {
  const { colors } = useContent(); // Fetching colors from the context

  return (
    <footer className="bg-cover bg-center text-white flex items-center justify-center">
      <div
        className="text-4xl p-4 rounded-lg shadow-xl"
        style={{
          background: colors?.isGradient
            ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
            : colors?.bg || "#111827", // Fallback for background
          color: colors?.text || "#fff", // Dynamic text color
        }}
      >
        <p>© Alya Anime. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer5;
