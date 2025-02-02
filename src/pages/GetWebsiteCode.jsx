import { useContent } from "../Store/ContentValues";

// Assuming the component data structure is like this
const componentData = [
  {
    name: "HeroComponent1",
    code: `<section class="hero bg-blue-500 text-white p-16">
               <h1 class="text-4xl font-bold">Welcome to the Hero Section</h1>
               <p class="mt-4">This is the hero section where you introduce the site.</p>
             </section>`,
  },

  {
    name: "SocialIconComponent",
    code: `<div class="flex space-x-4">
                        <a href="#" class="text-blue-500">Facebook</a>
                        <a href="#" class="text-blue-400">Twitter</a>
                        <a href="#" class="text-pink-500">Instagram</a>
                        <a href="#" class="text-red-500">YouTube</a>
                      </div>`,
  },
  {
    name: "AboutComponent",
    code: `<section class="about bg-gray-200 p-16">
                      <h2 class="text-3xl font-bold">About Us</h2>
                      <p class="mt-4">This section provides information about the website and its purpose.</p>
                    </section>`,
  },
];

const GetWebsiteCode = () => {
  const { selectedComponents } = useContent(); // Use context data

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Component Code</h2>
        <div
          id="codeContainer"
          className="bg-gray-900 text-white p-4 rounded-md"
        >
          {selectedComponents.length > 0 ? (
            selectedComponents.map((compName) => {
              // Match component name with componentData
              const compData = componentData.find(
                (data) => data.name === compName.content.type.name
              );
              return compData ? (
                <div key={compName.content.type.name} className="mb-4">
                  <h3 className="text-xl font-semibold text-green-500">
                    {compData.name} Code:
                  </h3>
                  <pre className="bg-gray-800 p-4 rounded text-white">
                    {/* Ensure the code is a string */}
                    {typeof compData.code === "string"
                      ? compData.code
                      : JSON.stringify(compData.code, null, 2)}
                  </pre>
                </div>
              ) : (
                <p className="text-red-500">
                  Component {compName.content.type.name} not found.
                </p>
              );
            })
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
