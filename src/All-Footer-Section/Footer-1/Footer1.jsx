import { FaTwitter, FaDiscord, FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

export default function Footer1() {
  const { colors } = useContent(); // ✅ Access dynamic colors from store

  const socialLinks = [
    { icon: <FaTwitter />, url: "https://twitter.com", color: "text-blue-400" },
    {
      icon: <FaDiscord />,
      url: "https://discord.com",
      color: "text-indigo-500",
    },
    { icon: <FaTelegram />, url: "https://t.me", color: "text-blue-500" },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
      color: "text-pink-500",
    },
    { icon: <FaGithub />, url: "https://github.com", color: "text-gray-300" },
  ];

  return (
    <footer
      className="w-full py-10 px-6 text-center relative"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827", // Fallback for background
        color: colors?.text || "#fff", // Dynamic text color
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-lg mb-6">
          Follow us on our social media for the latest updates.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group text-3xl ${social.color} transition-transform transform hover:scale-125`}
            >
              {social.icon}
              <span className="absolute inset-0 w-full h-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
          ))}
        </div>

        <p className="text-sm opacity-80">
          © 2025 Meem Token. All rights reserved.
        </p>

        <div className="absolute top-0 left-0 w-full h-full bg-white/5 mix-blend-overlay opacity-20 pointer-events-none"></div>
      </div>
    </footer>
  );
}
