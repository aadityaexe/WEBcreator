import { useContent } from "../Store/ContentValues";

const GetWebsiteCode = () => {
  const { selectedComponents, componentData } = useContent();

  const pHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generated Website</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <link href="styles.css" rel="stylesheet"/>
</head>
<body>`;

  const pHtmlEnd = `
<script src="scripts.js"></script>
</body>
</html>`;

  const codeSections = [];
  const stylesSections = [];
  const scriptSections = [];

  selectedComponents.forEach((comp) => {
    const compData = componentData.find(
      (data) => data.name === comp.content.type.name
    );

    if (compData) {
      codeSections.push(
        `<section>
  <!-- ${compData.name} Component -->
  ${compData.code}
</section>`
      );

      stylesSections.push(compData.styles);
      scriptSections.push(compData.script);
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
