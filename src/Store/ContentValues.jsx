import { createContext, useState, useContext } from "react";
// Create context
const ContentContext = createContext();
// Create provider component
export const ContentProvider = ({ children }) => {
  // State management
  const [content, setContent] = useState({});
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedPalette, setSelectedPalette] = useState("");
  const [colors, setColors] = useState({});
  const [isGradient, setIsGradient] = useState(false);

  // Function to update content
  const run = (newData) => {
    setContent((prevContent) => ({
      ...prevContent,
      ...newData,
    }));
  };

  const componentData = [
    {
      name: "HeroComponent1",
      code: `<section class="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 min-h-screen text-white flex items-center">
          <div id="hero-section" class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 w-full">
            <div class="text-center md:text-left md:w-1/2 space-y-6">
              <h1 id="hero-heading" class="text-4xl md:text-6xl font-extrabold leading-tight">
                Welcome to <span class="text-pink-300">MeemToken</span>
              </h1>
              <p id="hero-paragraph" class="text-lg md:text-xl text-gray-300">
                The ultimate platform for funky tokens that redefine the way you experience crypto.
              </p>
              <div id="hero-buttons" class="flex justify-center md:justify-start space-x-4">
                <a href="#explore" onclick="navigateTo('/enter-website-info')" class="bg-pink-600 hover:bg-pink-700 transition-all text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2">
                  <i class="fas fa-rocket"></i>
                  <span>Create Website</span>
                </a>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
              <div class="relative w-64 h-64 md:w-80 md:h-80 overflow-visible">
                <img id="hero-image" src="/assets/try.png" alt="MeemToken" class="absolute top-0 left-0 object-cover rounded-full shadow-lg">
              </div>
            </div>
          </div>
        </section>`,
      script: `<script>
          document.addEventListener("DOMContentLoaded", function () {
            if (typeof gsap !== 'undefined') {
              gsap.registerPlugin(ScrollTrigger);
              gsap.from(["#hero-heading", "#hero-paragraph", "#hero-buttons"], {
                opacity: 0, y: 50, duration: 1, stagger: 0.2, ease: "power3.out"
              });
              gsap.from("#hero-image", { opacity: 0, x: 100, duration: 1, ease: "power3.out" });
              gsap.to("#hero-image", {
                scrollTrigger: { trigger: "#hero-section", start: "top top", end: "bottom top", scrub: true },
                y: -100, scale: 1.1
              });
            }
          });
    
          function navigateTo(url) { 
            window.location.href = url; 
          }
        </script>`,
    },
    {
      name: "SocialIconComponent",
      code: `<section class="w-full py-16 flex justify-center" style="background: linear-gradient(to right, #ff7e5f, #feb47b);">
        <div class="flex gap-6">
          <a href="https://twitter.com" target="_blank" class="group text-4xl text-blue-400 hover:scale-125 transition-transform">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://discord.com" target="_blank" class="group text-4xl text-indigo-500 hover:scale-125 transition-transform">
            <i class="fab fa-discord"></i>
          </a>
          <a href="https://t.me" target="_blank" class="group text-4xl text-blue-500 hover:scale-125 transition-transform">
            <i class="fab fa-telegram"></i>
          </a>
        </div>
      </section>`,
    },
    {
      name: "AboutComponent",
      code: `<div id="about-section" class="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 px-6 md:px-16 py-12">
            <div class="w-full pl-24 md:w-1/2 transform hover:scale-105 transition duration-300">
                <img src="/assets/try.png" alt="About Image" class="w-60 h-auto rounded-lg shadow-2xl border-4 border-pink-300">
            </div>
            <div class="w-full md:w-1/2 text-center md:text-left">
                <h2 id="about-title" class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-4 drop-shadow-lg">
                    About Us
                </h2>
                <p id="about-description" class="text-lg leading-relaxed animate-pulse">
                    We thrive on creativity and innovation, bringing the most exciting and unique experiences to our audience.
                </p>
            </div>
        </div>`,
      script: `<script>
          document.addEventListener("DOMContentLoaded", function () {
            const aboutTitle = document.getElementById("about-title");
            if (aboutTitle) {
              aboutTitle.style.backgroundImage = "linear-gradient(to right, #ff7e5f, #feb47b)";
              aboutTitle.style.webkitBackgroundClip = "text";
              aboutTitle.style.color = "transparent";
            }
            const aboutDescription = document.getElementById("about-description");
            if (aboutDescription) {
              aboutDescription.style.color = "#d1d5db";
            }
          });
        </script>`,
    },
    {
      name: "RoadmapComponent",
      code: `<div class="relative py-16 w-full" style="background: linear-gradient(to right, #ff7e5f, #feb47b); color: #fff;">
  <h2 class="text-4xl font-bold text-center mb-12">Roadmap</h2>
  <div class="max-w-4xl mx-auto relative flex gap-5 flex-col items-center">
    <div class="absolute w-2 bg-gray-400 rounded-full h-full left-1/2 transform -translate-x-1/2" style="border-radius: 50% 50% 50% 50%;"></div>

    <div class="relative flex items-center p-6 rounded-xl shadow-lg border-2 w-2/3 self-start" style="background-color: rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.2);">
      <div class="w-10 h-10 flex justify-center items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 text-3xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Phase 1</h3>
        <p class="text-gray-300">Default info for Phase 1</p>
      </div>
    </div>

    <div class="relative flex items-center p-6 rounded-xl shadow-lg border-2 w-2/3 self-end" style="background-color: rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.2);">
      <div class="w-10 h-10 flex justify-center items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 text-3xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Phase 2</h3>
        <p class="text-gray-300">Default info for Phase 2</p>
      </div>
    </div>

    <div class="relative flex items-center p-6 rounded-xl shadow-lg border-2 w-2/3 self-start" style="background-color: rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.2);">
      <div class="w-10 h-10 flex justify-center items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 text-3xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Phase 3</h3>
        <p class="text-gray-300">Default info for Phase 3</p>
      </div>
    </div>

    <div class="relative flex items-center p-6 rounded-xl shadow-lg border-2 w-2/3 self-end" style="background-color: rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.2);">
      <div class="w-10 h-10 flex justify-center items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 text-3xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Phase 4</h3>
        <p class="text-gray-300">Default info for Phase 4</p>
      </div>
    </div>

    <div class="relative flex items-center p-6 rounded-xl shadow-lg border-2 w-2/3 self-start" style="background-color: rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.2);">
      <div class="w-10 h-10 flex justify-center items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 text-3xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Phase 5</h3>
        <p class="text-gray-300">Default info for Phase 5</p>
      </div>
    </div>
  </div>
</div>
`,
    },
    {
      name: "FaqComponent",
      code: `
        <div
          className="w-full max-w-3xl mx-auto p-6 shadow-lg"
          id="faq-section"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div id="faq-container" className="space-y-4"></div>
          <button
            id="toggle-btn"
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg mx-auto block bg-pink-500 text-white transition-all"
          >
            See More <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      `,
      script: `
        document.addEventListener("DOMContentLoaded", function () {
          const faqs = [
            { question: "What is Meem Token?", answer: "Meem Token is a decentralized meme-based cryptocurrency." },
            { question: "How can I buy Meem Token?", answer: "You can buy Meem Token on supported decentralized exchanges." },
            { question: "Is Meem Token safe?", answer: "Meem Token uses blockchain security features like smart contracts and audits." },
            { question: "What is the utility of Meem Token?", answer: "Meem Token is used for transactions, staking, and governance in the ecosystem." },
            { question: "Where can I store Meem Token?", answer: "You can store Meem Token in any compatible crypto wallet like MetaMask or Trust Wallet." }
          ];
  
          let expanded = false;
          const faqContainer = document.getElementById('faq-container');
          const toggleBtn = document.getElementById('toggle-btn');
  
          function renderFAQs() {
            faqContainer.innerHTML = faqs.slice(0, expanded ? faqs.length : 2).map(faq => {
              return \`
                <div class="p-4 rounded-lg bg-gray-800 text-gray-300">
                  <h3 class="font-semibold text-lg">faq.question</h3>
                  <p class="mt-2">faq.answer</p>
                </div>
              \`;
            }).join('');
  
            toggleBtn.innerHTML = expanded ? 'See Less <i class="fas fa-chevron-up"></i>' : 'See More <i class="fas fa-chevron-down"></i>';
          }
  
          toggleBtn.addEventListener('click', () => {
            expanded = !expanded;
            renderFAQs();
          });
  
          renderFAQs();
        });
      `,
    },
    {
      name: "FooterComponent",
      code: `<footer class="bg-gray-800 text-white py-4 mt-10">
          <div class="max-w-7xl mx-auto px-6 text-center">
            <p class="text-sm">
              &copy; ${new Date().getFullYear()} Meem Token. All rights reserved.
            </p>
            <div class="mt-2">
              <a href="/privacy" class="text-gray-400 hover:text-white mx-2">
                Privacy Policy
              </a>
              <a href="/terms" class="text-gray-400 hover:text-white mx-2">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>`,
    },
  ];

  // Context values
  const values = {
    content,
    setContent,
    selectedComponents,
    setSelectedComponents,
    run,
    selectedPalette,
    setSelectedPalette,
    colors,
    setColors,
    isGradient,
    setIsGradient,
    componentData,
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};

// Custom hook for using the context
export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
