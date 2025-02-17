import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { useContent } from "../../Store/ContentValues";
const Footer4 = () => {
  const { colors } = useContent();
  return (
    <footer
      className="relative py-12 text-center overflow-hidden footer-glow"
      style={{
        background: colors?.isGradient
          ? colors?.gradient || "linear-gradient(45deg, #ff007f, #7f00ff)"
          : colors?.bg || "#111827",
        color: colors?.text || "#fff",
      }}
    >
      <p className="text-5xl font-extrabold tracking-widest uppercase funky-text">
        &copy; 2024 Footer 🐱🔥
      </p>

      <div className="flex justify-center space-x-8 mt-6">
        <a href="#" className="social-link">
          <FaTwitter />
        </a>
        <a href="#" className="social-link">
          <FaTelegram />
        </a>
        <a href="#" className="social-link">
          <FaDiscord />
        </a>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-noise"></div>

      <style jsx>{`
        .funky-text {
          text-shadow: 0 0 8px #ff007f, 0 0 20px #7f00ff, 0 0 30px #ff007f;
        }

        .footer-glow {
          box-shadow: 0 -5px 15px rgba(255, 0, 127, 0.5);
          border-top: 2px solid rgba(255, 0, 127, 0.3);
        }

        .social-link {
          font-size: 2.8rem;
          transition: transform 0.3s ease, color 0.3s ease,
            text-shadow 0.3s ease;
          color: #aaa;
        }

        .social-link:hover {
          transform: scale(1.3) rotate(-10deg);
          color: #fff;
          text-shadow: 0 0 10px #ff007f, 0 0 20px #7f00ff;
        }

        .bg-noise {
          background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
          opacity: 0.1;
          z-index: -1;
        }
      `}</style>
    </footer>
  );
};

export default Footer4;
