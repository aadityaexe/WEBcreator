import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

const Footer2 = () => {
  const { colors } = useContent();

  return (
    <footer
      className="relative text-center py-6 mt-10 overflow-hidden w-full"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827",
        color: colors?.text || "#fff",
      }}
    >
      {/* Footer Content */}
      <p className="text-lg font-semibold animate-pulse">
        Stay Funky, Stay Creative! 🚀
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://twitter.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com"
          className="hover:scale-125 transition-transform duration-300 text-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer2;
