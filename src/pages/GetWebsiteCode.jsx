import { useContent } from "../Store/ContentValues";

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
    code: `<div class="flex space-x-4">
                        <a href="#" class="text-blue-500">Facebook</a>
                        <a href="#" class="text-blue-400">Twitter</a>
                        <a href="#" class="text-pink-500">Instagram</a>
                        <a href="#" class="text-red-500">YouTube</a>
                      </div>`,
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
];

const GetWebsiteCode = () => {
  const { selectedComponents } = useContent(); // Use context data
  const pHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <link href="styles.css" rel="stylesheet"/>
  
</head>
<body>`;

  const pHemlEnd = ` 
script src=stcripts.js></script>
</body>
</html>`;

  const codeSections = [];
  const stylesSections = [];
  const scriptSections = [];

  // Populate code, styles, and scripts for selected components
  selectedComponents.forEach((compName) => {
    const compData = componentData.find(
      (data) => data.name === compName.content.type.name
    );

    if (compData) {
      codeSections.push(
        <div key={`code-${compName.content.type.name}`} className="mb-4">
          {/* <h3 className="text-xl font-semibold text-green-500">
            {compData.name} Code:
          </h3> */}
          <pre className="bg-gray-800 p-4 rounded text-white">
            {typeof compData.code === "string"
              ? compData.code
              : JSON.stringify(compData.code, null, 2)}
          </pre>
        </div>
      );

      stylesSections.push(
        <div key={`styles-${compName.content.type.name}`} className="mb-4">
          <h4 className="text-lg font-semibold text-blue-400">
            {compData.name} Styles:
          </h4>
          <pre className="bg-gray-800 p-4 rounded text-white">
            {typeof compData.styles === "string"
              ? compData.styles
              : JSON.stringify(compData.styles, null, 2)}
          </pre>
        </div>
      );

      scriptSections.push(
        <div key={`script-${compName.content.type.name}`} className="mb-4">
          <h4 className="text-lg font-semibold text-red-400">
            {compData.name} Script:
          </h4>
          <pre className="bg-gray-800 p-4 rounded text-white">
            {typeof compData.script === "string"
              ? compData.script
              : JSON.stringify(compData.script, null, 2)}
          </pre>
        </div>
      );
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Component Code</h2>
        <div
          id="codeContainer"
          className="bg-gray-900 text-white p-4 rounded-md"
        >
          {selectedComponents.length > 0 ? (
            <>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-green-500">
                  All Code:
                </h3>
                {pHtml}
                {codeSections}
                {pHemlEnd}
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-400">
                  All Styles:
                </h3>
                {stylesSections}
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-red-400">
                  All Scripts:
                </h3>
                {scriptSections}
              </div>
            </>
          ) : (
            <p className="text-gray-400">
              Select components to view their code.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetWebsiteCode;
