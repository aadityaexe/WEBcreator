import React, { useState } from "react";

const funkyColorPalette = [
  {
    name: "Electric Dream",
    colors: {
      bg: "#111111",
      h1: "#FF007F",
      p: "#1D1D1D",
      a: "#00FF00",
      gradient: "linear-gradient(45deg, #FF007F, #00FF00)", // Correct gradient
    },
  },
  {
    name: "Neon Blaze",
    colors: {
      bg: "#0A0A0A",
      h1: "#FF8C00",
      p: "#333333",
      a: "#FF1493",
      gradient: "linear-gradient(45deg, #FF8C00, #FF1493)", // Correct gradient
    },
  },
  {
    name: "Ocean Vibes",
    colors: {
      bg: "#2E2E2E",
      h1: "#00BFFF",
      p: "#1A1A1A",
      a: "#FF6347",
      gradient: "linear-gradient(45deg, #00BFFF, #FF6347)", // Correct gradient
    },
  },
  {
    name: "Tropical Pulse",
    colors: {
      bg: "#111111",
      h1: "#32CD32",
      p: "#2F4F4F",
      a: "#FF4500",
      gradient: "linear-gradient(45deg, #32CD32, #FF4500)", // Correct gradient
    },
  },
  {
    name: "Sunset Glow",
    colors: {
      bg: "#2C3E50",
      h1: "#9B59B6",
      p: "#34495E",
      a: "#E74C3C",
      gradient: "linear-gradient(45deg, #9B59B6, #E74C3C)", // Correct gradient
    },
  },
];

const ColorPaletteSelector = () => {
  const [selectedPalette, setSelectedPalette] = useState("");
  const [colors, setColors] = useState({
    bg: "#111111",
    h1: "#FF007F",
    p: "#1D1D1D",
    a: "#00FF00",
    gradient: "", // Gradient initially empty
  });
  const [isGradient, setIsGradient] = useState(false); // Track if gradient is selected

  const handleColorChange = (element, newColor) => {
    setColors((prevColors) => {
      const updatedColors = {
        ...prevColors,
        [element]: newColor,
      };
      console.log("Updated Colors:", updatedColors); // Log updated colors
      return updatedColors;
    });
  };

  const handleGradientChange = (newGradient) => {
    setColors((prevColors) => {
      const updatedColors = {
        ...prevColors,
        gradient: newGradient,
      };
      console.log("Updated Gradient:", updatedColors.gradient); // Log gradient
      return updatedColors;
    });
  };

  const handlePaletteSelect = (paletteName) => {
    setSelectedPalette(paletteName);
    const selected = funkyColorPalette.find(
      (palette) => palette.name === paletteName
    );
    setColors(selected ? selected.colors : colors);
    setIsGradient(false); // Reset gradient when new palette is selected
    console.log(`Selected Palette: ${paletteName}`);
    console.log("Palette Colors:", selected ? selected.colors : colors); // Log selected palette
  };

  const handleBackgroundOptionChange = (option) => {
    setIsGradient(option === "gradient");
    console.log("Background Option:", option); // Log background option change
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Select a Funky Color Palette
      </h1>

      {/* Palette Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {funkyColorPalette.map((palette) => (
          <div
            key={palette.name}
            className={`p-6 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              selectedPalette === palette.name
                ? "border-4 border-yellow-500 shadow-lg scale-105"
                : "hover:scale-105"
            }`}
            style={{
              backgroundColor: palette.colors.bg,
            }}
            onClick={() => handlePaletteSelect(palette.name)}
          >
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: palette.colors.h1 }}
            >
              {palette.name}
            </h2>
            <div className="mb-4">
              <p className="text-xl mb-2">Body Background Color (bg)</p>
              <div
                className="h-12 w-full mb-2 rounded-lg"
                style={{ backgroundColor: palette.colors.bg }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Option */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Background Style
        </h2>
        <div className="flex items-center space-x-6">
          <label className="text-white text-xl">
            <input
              type="radio"
              name="backgroundOption"
              value="solid"
              checked={!isGradient}
              onChange={() => handleBackgroundOptionChange("solid")}
              className="mr-2"
            />
            Solid Color
          </label>
          <label className="text-white text-xl">
            <input
              type="radio"
              name="backgroundOption"
              value="gradient"
              checked={isGradient}
              onChange={() => handleBackgroundOptionChange("gradient")}
              className="mr-2"
            />
            Gradient
          </label>
        </div>
      </div>

      {/* Custom Color Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Custom Color Selection
        </h2>

        {/* Background Color */}
        {isGradient ? (
          <>
            <p className="text-xl text-white mb-2">Select Gradient Colors</p>
            <div className="flex mb-4">
              <input
                type="color"
                value={
                  colors.gradient
                    ? colors.gradient.split(",")[0].split("(")[1]
                    : "#FF007F"
                }
                onChange={(e) =>
                  handleGradientChange(
                    `linear-gradient(45deg, ${e.target.value}, ${
                      colors.gradient.split(",")[1] || "#FF00FF"
                    })`
                  )
                }
                className="h-12 w-1/2 mb-2"
              />
              <input
                type="color"
                value={
                  colors.gradient
                    ? colors.gradient.split(",")[1].split(")")[0]
                    : "#00FF00"
                }
                onChange={(e) =>
                  handleGradientChange(
                    `linear-gradient(45deg, ${
                      colors.gradient.split(",")[0].split("(")[1]
                    }, ${e.target.value})`
                  )
                }
                className="h-12 w-1/2 mb-2"
              />
            </div>
          </>
        ) : (
          <div className="mb-4">
            <p className="text-xl text-white mb-2">Background Color (bg)</p>
            <input
              type="color"
              value={colors.bg}
              onChange={(e) => handleColorChange("bg", e.target.value)}
              className="h-12 w-full mb-2"
            />
          </div>
        )}

        {/* Heading Color */}
        <div className="mb-4">
          <p className="text-xl text-white mb-2">Heading Color (h1)</p>
          <input
            type="color"
            value={colors.h1}
            onChange={(e) => handleColorChange("h1", e.target.value)}
            className="h-12 w-full mb-2"
          />
        </div>

        {/* Paragraph Color */}
        <div className="mb-4">
          <p className="text-xl text-white mb-2">Paragraph Color (p)</p>
          <input
            type="color"
            value={colors.p}
            onChange={(e) => handleColorChange("p", e.target.value)}
            className="h-12 w-full mb-2"
          />
        </div>

        {/* Link Color */}
        <div className="mb-4">
          <p className="text-xl text-white mb-2">Link Color (a)</p>
          <input
            type="color"
            value={colors.a}
            onChange={(e) => handleColorChange("a", e.target.value)}
            className="h-12 w-full mb-2"
          />
        </div>
      </div>

      {/* Live Preview */}
      <div
        className="p-6"
        style={{ background: isGradient ? colors.gradient : colors.bg }}
      >
        <h1 className="text-4xl font-bold" style={{ color: colors.h1 }}>
          Heading 1 - The Color Will Change!
        </h1>
        <p className="text-xl" style={{ color: colors.p }}>
          This is a paragraph. You can change its color, too!
        </p>
        <a
          href="#"
          style={{ color: colors.a }}
          className="underline hover:text-opacity-80"
        >
          This is a sample link
        </a>
      </div>
    </div>
  );
};

export default ColorPaletteSelector;
