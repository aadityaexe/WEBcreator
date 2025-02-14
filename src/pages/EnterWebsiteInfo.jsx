import { useState } from "react";
import { useContent } from "../Store/ContentValues";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";
export default function EnterWebsiteInfo() {
  const navigate = useNavigate();
  const { run } = useContent();

  const [data, setData] = useState({
    hero: { title: "", subtitle: "", buttonName: "" },
    faq: [{ question: "", answer: "" }],
    about: "",
    roadmap: [{ phase: "", detail: "" }],
  });

  const handleChange = (section, index, field) => (e) => {
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      [section]:
        index !== null
          ? prev[section].map((item, i) =>
              i === index ? { ...item, [field]: value } : item
            )
          : field
          ? { ...prev[section], [field]: value }
          : value,
    }));
  };

  const handleAddItem = (section) => {
    setData((prev) => ({
      ...prev,
      [section]: [
        ...prev[section],
        section === "faq"
          ? { question: "", answer: "" }
          : { phase: "", detail: "" },
      ],
    }));
  };

  const handleRemoveItem = (section, index) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", data);
    run(data);
    alert("Data Submitted Successfully!");
  };

  return (
    <div className="p-6 pt-16 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Hero Section */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Hero Section</h2>
      <input
        type="text"
        placeholder="Hero Title"
        value={data.hero.title}
        onChange={handleChange("hero", null, "title")}
        className="border p-2 w-full mb-2 rounded focus:outline-blue-500 transition"
      />
      <input
        type="text"
        placeholder="Hero Subtitle"
        value={data.hero.subtitle}
        onChange={handleChange("hero", null, "subtitle")}
        className="border p-2 w-full mb-2 rounded focus:outline-blue-500 transition"
      />
      <input
        type="text"
        placeholder="Button Name"
        value={data.hero.buttonName}
        onChange={handleChange("hero", null, "buttonName")}
        className="border p-2 w-full mb-2 rounded focus:outline-blue-500 transition"
      />

      {/* FAQs Section */}
      <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-800 flex justify-between">
        FAQs
        <button
          onClick={() => handleAddItem("faq")}
          className="text-green-500 hover:text-green-600 transition"
        >
          <FaPlus />
        </button>
      </h2>
      {data.faq.map((item, index) => (
        <div key={index} className="mb-2 flex items-center gap-2">
          <div className="flex-grow">
            <input
              type="text"
              placeholder={`Question ${index + 1}`}
              value={item.question}
              onChange={handleChange("faq", index, "question")}
              className="border p-2 w-full mb-2 rounded focus:outline-blue-500 transition"
            />
            <input
              type="text"
              placeholder={`Answer ${index + 1}`}
              value={item.answer}
              onChange={handleChange("faq", index, "answer")}
              className="border p-2 w-full mb-2 rounded focus:outline-blue-500 transition"
            />
          </div>
          {data.faq.length > 1 && (
            <button
              onClick={() => handleRemoveItem("faq", index)}
              className="text-red-500 hover:text-red-600 transition"
            >
              <FaTrash />
            </button>
          )}
        </div>
      ))}

      {/* About Section */}
      <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-800">About</h2>
      <textarea
        placeholder="About Info"
        className="border p-2 w-full rounded focus:outline-blue-500 transition"
        value={data.about}
        onChange={handleChange("about", null, null)}
      />

      {/* Roadmap Section */}
      <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-800 flex justify-between">
        Roadmap
        <button
          onClick={() => handleAddItem("roadmap")}
          className="text-green-500 hover:text-green-600 transition"
        >
          <FaPlus />
        </button>
      </h2>
      {data.roadmap.map((item, index) => (
        <div key={index} className="mb-2 flex items-center gap-2">
          <div className="flex-grow">
            <input
              type="text"
              placeholder={`Phase ${index + 1} Name`}
              value={item.phase}
              onChange={handleChange("roadmap", index, "phase")}
              className="border p-2 w-full mb-2 rounded focus:outline-blue-500 transition"
            />
            <textarea
              placeholder={`Phase ${index + 1} Details`}
              className="border p-2 w-full rounded focus:outline-blue-500 transition"
              value={item.detail}
              onChange={handleChange("roadmap", index, "detail")}
            />
          </div>
          {data.roadmap.length > 1 && (
            <button
              onClick={() => handleRemoveItem("roadmap", index)}
              className="text-red-500 hover:text-red-600 transition"
            >
              <FaTrash />
            </button>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        onClick={() => {
          handleSubmit();
          navigate("/new-website");
        }}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full font-bold"
      >
        Submit
      </button>
    </div>
  );
}
