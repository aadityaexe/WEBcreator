import { useContent } from "../Store/ContentValues";

// Assuming the component data structure is like this
const componentData = [
  {
    name: "HeroComponent1",
    code: `<section class="hero bg-blue-500 text-white p-16">
               <h1 class="text-4xl font-bold">Welcome to the Hero Section</h1>
               <p class="mt-4">This is the hero section where you introduce the site.</p>
             </section>`,
    styles: "bg-blue-500 text-white p-16",
    script: '<script>console.log("Hello from HeroComponent1")</script>',
  },

  {
    name: "SocialIconComponent",
    code: `<div class="flex space-x-4">
                        <a href="#" class="text-blue-500">Facebook</a>
                        <a href="#" class="text-blue-400">Twitter</a>
                        <a href="#" class="text-pink-500">Instagram</a>
                        <a href="#" class="text-red-500">YouTube</a>
                      </div>`,
    styles: "bg-blue-500 text-white p-16",
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
  script src="https://cdn.tailwindcss.com"></script>
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
