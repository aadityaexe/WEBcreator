import { createContext, useState, useContext } from "react";

// Create context
const ContentContext = createContext();

// Create provider component
export const ContentProvider = ({ children }) => {
  // Add your state values here
  const [content, setContent] = useState({});
  const [selectedComponents, setSelectedComponents] = useState([]);
  const run = (newData) => {
    setContent((prevContent) => ({
      ...prevContent, // ✅ Keep previous data
      ...newData, // ✅ Update with new data
    }));
    // console.log("Updated Content:", newData);
  };

  const [selectedPalette, setSelectedPalette] = useState("");

  const [colors, setColors] = useState({});

  const [isGradient, setIsGradient] = useState(false);

  // Assuming the component data structure is like this
  const componentData = [
    {
      name: "HeroComponent1",
      code: `<section class="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 min-h-screen text-white flex items-center">
    <div id="hero" class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 w-full">
        <div class="text-center md:text-left md:w-1/2 space-y-6">
            <h1 id="heading" class="text-4xl md:text-6xl font-extrabold leading-tight">
                Welcome to <span class="text-pink-300">MeemToken</span>
            </h1>
            <p id="paragraph" class="text-lg md:text-xl text-gray-300">
                The ultimate platform for funky tokens that redefine the way you experience crypto.
            </p>
            <div id="buttons" class="flex justify-center md:justify-start space-x-4">
                <a href="#explore" onclick="navigateTo('/enter-website-info')" class="bg-pink-600 hover:bg-pink-700 transition-all text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2">
                    <i class="fas fa-rocket"></i>
                    <span>Create Website</span>
                </a>
            </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 overflow-visible">
                <img id="image" src="try.png" alt="MeemToken" class="absolute top-0 left-0 object-cover rounded-full shadow-lg">
            </div>
        </div>
    </div>
</section>`,
      styles: "",
      script: `<script>
        document.addEventListener("DOMContentLoaded", function () {
            gsap.registerPlugin(ScrollTrigger);
            
            const heading = document.getElementById("heading");
            const paragraph = document.getElementById("paragraph");
            const buttons = document.getElementById("buttons");
            const image = document.getElementById("image");
            const hero = document.getElementById("hero");
            
            gsap.from([heading, paragraph, buttons], {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });
            
            gsap.from(image, {
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power3.out",
            });
            
            gsap.to(image, {
                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: -100,
                scale: 1.1,
            });
        });
    </script>
    <script>
        function navigateTo(url) {
            window.location.href = url;
        }
    </script`,
    },

    {
      name: "SocialIconComponent",
      code: `<section
  class="w-full py-16 flex justify-center"
  style="background: linear-gradient(to right, #ff7e5f, #feb47b);" 
>
  <div class="flex gap-6">
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      class="relative group text-4xl text-blue-400 transition-transform transform hover:scale-125"
    >
      <i class="fa fa-twitter"></i>
      <span class="absolute inset-0 w-full h-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-all"></span>
    </a>
    <a
      href="https://discord.com"
      target="_blank"
      rel="noopener noreferrer"
      class="relative group text-4xl text-indigo-500 transition-transform transform hover:scale-125"
    >
      <i class="fa fa-discord"></i>
      <span class="absolute inset-0 w-full h-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-all"></span>
    </a>
    <a
      href="https://t.me"
      target="_blank"
      rel="noopener noreferrer"
      class="relative group text-4xl text-blue-500 transition-transform transform hover:scale-125"
    >
      <i class="fa fa-telegram"></i>
`,
      styles: "",
      script: '<script>console.log("Hello from HeroComponent1")</script>',
    },
    {
      name: "AboutComponent",
      code: `<section class="about bg-gray-200 p-16">
                      <h2 class="text-3xl font-bold">About Us</h2>
                      <p class="mt-4">This section provides information about the website and its purpose.</p>
                    </section>`,
      styles: "bg-blue-500 text-white p-16",
      script: '<script>console.log("Hello from HeroComponent1")</script>',
    },
    {
      name: "TokenomicsComponent",
      code: `<div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-6">Tokenomics</h2>
        <p class="text-lg mb-8">A transparent and fair distribution model for our ecosystem.</p>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Total Supply</h3>
                <p class="text-xl font-bold">1,000,000,000</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Liquidity</h3>
                <p class="text-xl font-bold">30%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Team & Development</h3>
                <p class="text-xl font-bold">15%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Marketing</h3>
                <p class="text-xl font-bold">20%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Staking & Rewards</h3>
                <p class="text-xl font-bold">25%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Reserve</h3>
                <p class="text-xl font-bold">10%</p>
            </div>
        </div>
    </div>`,
      styles: " ",
      script: " ",
    },
    {
      name: "TokenomicsComponent",
      code: `<div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-6">Tokenomics</h2>
        <p class="text-lg mb-8">A transparent and fair distribution model for our ecosystem.</p>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Total Supply</h3>
                <p class="text-xl font-bold">1,000,000,000</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Liquidity</h3>
                <p class="text-xl font-bold">30%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Team & Development</h3>
                <p class="text-xl font-bold">15%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Marketing</h3>
                <p class="text-xl font-bold">20%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Staking & Rewards</h3>
                <p class="text-xl font-bold">25%</p>
            </div>
            <div class="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
                <h3 class="text-2xl font-semibold mb-2">Reserve</h3>
                <p class="text-xl font-bold">10%</p>
            </div>
        </div>
    </div>`,
      styles: " ",
      script: " ",
    },
  ];
  // Values to be provided
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
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
