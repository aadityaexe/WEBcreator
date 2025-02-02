import { FaTwitter, FaDiscord, FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";

export default function SocialIcon1() {
  const { content, colors } = useContent();

  const socialLinks = content?.socialLinks || [
    { icon: <FaTwitter />, url: "https://twitter.com", color: "text-blue-400" },
    { icon: <FaDiscord />, url: "https://discord.com", color: "text-indigo-500" },
    { icon: <FaTelegram />, url: "https://t.me", color: "text-blue-500" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "text-pink-500" },
    { icon: <FaGithub />, url: "https://github.com", color: "text-gray-300" },
  ];

  return (
    <section
      className="w-full py-16 flex justify-center"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(to right, #ff7e5f, #feb47b)"
          : colors?.bg || "#111827", // Dynamic background color
      }}
    >
      <div className="flex gap-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group text-4xl ${social.color} transition-transform transform hover:scale-125`}
          >
            {social.icon}
            <span className="absolute inset-0 w-full h-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-all"></span>
          </a>
        ))}
      </div>
    </section>
  );
}
