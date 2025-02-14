import { useContent } from "../Store/ContentValues";

const GetWebsiteCode = () => {
  const { selectedComponents, componentData } = useContent();

  // Ensure selectedComponents and componentData are available
  if (!selectedComponents?.length || !componentData?.length) {
    return <p>Loading components...</p>;
  }

  const pHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generated Website</title>
</head>
<body>`;
  const pHtmlEnd = `
</body>
</html>`;

  // Filter and map selected components to retrieve matching data
  const matchedComponents = selectedComponents
    .map((comp) =>
      componentData.find((data) =>
        data.name.toLowerCase().includes(comp.type.toLowerCase())
      )
    )
    .filter(Boolean); // Remove undefined values (if componentData doesn't match)

  return (
    <div className="min-h-screen bg-gray-100 p-6 overflow-x-hidden">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Generated Website Code</h2>
        {matchedComponents.length > 0 ? (
          <>
            {/* HTML Code */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-green-500">
                HTML Code:
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-white overflow-x-auto">
                {pHtml +
                  matchedComponents
                    .map(
                      (comp) =>
                        `<section>\n  <!-- ${comp.name} Component -->\n  ${comp.code}\n</section>`
                    )
                    .join("\n") +
                  pHtmlEnd}
              </pre>
            </div>

            {/* CSS Styles */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-400">
                CSS Styles:
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-white overflow-x-auto">
                {matchedComponents.map((comp) => comp.styles || "").join("\n")}
              </pre>
            </div>

            {/* JavaScript Code */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-red-400">
                JavaScript:
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-white overflow-x-auto">
                {matchedComponents.map((comp) => comp.script || "").join("\n")}
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
