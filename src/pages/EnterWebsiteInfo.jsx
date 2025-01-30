import { useState } from "react";
import { useContent } from "../Store/ContentValues";

export default function EnterWebsiteInfo() {

  const {  setContent } = useContent();
  const { run } = useContent(); 

  const [data, setData] = useState({
    hero: {
      title: "",
      subtitle: "",
      buttonName: "",
    },
    faq: Array(5).fill({ question: "", answer: "" }),
    about: "",
    roadmap: Array(5).fill({ phase: "", detail: "" }),
  });

  const handleChange = (section, index, field, value) => {
    setData((prev) => {
      if (index !== null) {
        const updatedSection = [...prev[section]];
        updatedSection[index] = { ...updatedSection[index], [field]: value };
        return { ...prev, [section]: updatedSection };
      }
      return { ...prev, [section]: { ...prev[section], [field]: value } };
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", data);
    // setContent(data);
    run(data);
    alert("Data Submitted Successfully!");
  };

  return (
    <div className="p-6 pt-20 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
      <input
        type="text"
        placeholder="Hero Title"
        className="border p-2 w-full mb-2"
        onChange={(e) => handleChange("hero", null, "title", e.target.value)}
      />
      <input
        type="text"
        placeholder="Hero Subtitle"
        className="border p-2 w-full mb-2"
        onChange={(e) => handleChange("hero", null, "subtitle", e.target.value)}
      />
      <input
        type="text"
        placeholder="Button Name"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          handleChange("hero", null, "buttonName", e.target.value)
        }
      />

      <h2 className="text-2xl font-bold mt-4 mb-2">FAQs</h2>
      {data.faq.map((_, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            className="border p-2 w-full mb-1"
            onChange={(e) =>
              handleChange("faq", index, "question", e.target.value)
            }
          />
          <input
            type="text"
            placeholder={`Answer ${index + 1}`}
            className="border p-2 w-full"
            onChange={(e) =>
              handleChange("faq", index, "answer", e.target.value)
            }
          />
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-4 mb-2">About</h2>
      <textarea
        placeholder="About Info"
        className="border p-2 w-full"
        onChange={(e) => handleChange("about", null, "", e.target.value)}
      />

      <h2 className="text-2xl font-bold mt-4 mb-2">Roadmap</h2>
      {data.roadmap.map((_, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            placeholder={`Phase ${index + 1} Name`}
            className="border p-2 w-full mb-1"
            onChange={(e) =>
              handleChange("roadmap", index, "phase", e.target.value)
            }
          />
          <textarea
            placeholder={`Phase ${index + 1} Details`}
            className="border p-2 w-full"
            onChange={(e) =>
              handleChange("roadmap", index, "detail", e.target.value)
            }
          />
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-4">Collected Data</h2>
      <pre className="bg-gray-100 p-4 mt-2 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
