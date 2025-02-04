import { useContent } from "../Store/ContentValues";

const GetWebsiteCode = () => {
  const { selectedComponents, componentData } = useContent();

  // Check if selectedComponents or componentData are undefined
  if (!selectedComponents || !componentData) {
    return <p>Loading...</p>;
  }

  const pHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generated Website</title>
  <script src="/gsap.min.js"></script> <!-- Load locally -->
  <script src="/ScrollTrigger.min.js"></script> <!-- Load locally -->
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <link href="/styles.css" rel="stylesheet"/> <!-- Load locally -->
</head>
<body>`;

  const pHtmlEnd = `
<script src="/scripts.js"></script> <!-- Load locally -->
</body>
</html>`;

  const codeSections = [];
  const stylesSections = [];
  const scriptSections = [];

  selectedComponents.forEach((comp) => {
    // Ensure component name exists in componentData
    const compData = componentData.find(
      (data) => data.name === comp?.content?.type?.name // Optional chaining
    );

    if (compData) {
      codeSections.push(
        `<section>
  <!-- ${compData.name} Component -->
  ${compData.code}
</section>`
      );

      stylesSections.push(compData.styles || ""); // If styles are available, use them
      scriptSections.push(compData.script || ""); // If script is available, use them
    } else {
      console.warn(
        `Component ${comp?.content?.type?.name} not found in componentData.`
      );
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 overflow-x-hidden">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Generated Website Code</h2>
        {selectedComponents.length > 0 ? (
          <>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-green-500">
                HTML Code:
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-white overflow-x-auto">
                {pHtml + codeSections.join("\n") + pHtmlEnd}
              </pre>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-400">
                CSS Styles:
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-white overflow-x-auto">
                {stylesSections.join("\n")}
              </pre>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-red-400">
                JavaScript:
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-white overflow-x-auto">
                {scriptSections.join("\n")}
              </pre>
            </div>
          </>
        ) : (
          <p className="text-gray-400">
            Select components to generate website code.
          </p>
        )}
      </div>
    </div>
  );
};

export default GetWebsiteCode;
