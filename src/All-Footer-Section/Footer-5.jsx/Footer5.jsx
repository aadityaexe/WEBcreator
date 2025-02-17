import { useContent } from "../../Store/ContentValues";

const Footer5 = () => {
  const { colors } = useContent(); // Fetching colors from the context

  return (
    <footer className="bg-cover bg-center h-[500px] text-white flex items-center justify-center">
      <div
        className="text-4xl p-4 rounded-lg shadow-xl"
        style={{
          backgroundColor: colors.footerBgColor, // Dynamically using background color from colors
          color: colors.footerTextColor, // Dynamically changing text color
        }}
      >
        <p>© Alya Anime. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer5;
