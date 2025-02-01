import { useState } from "react";

const funkyColorPalette = {
  palette1: {
    bg: { body: "#111111", h1: "#FF007F", p: "#1D1D1D", a: "#00FF00" },
    text: { h1: "#FF00FF", p: "#FFFFFF", a: "#00FFFF" },
  },
  palette2: {
    bg: { body: "#0A0A0A", h1: "#FF8C00", p: "#333333", a: "#FF1493" },
    text: { h1: "#FFD700", p: "#FFFFFF", a: "#FF1493" },
  },
  palette3: {
    bg: { body: "#2E2E2E", h1: "#00BFFF", p: "#1A1A1A", a: "#FF6347" },
    text: { h1: "#FF1493", p: "#FFFFFF", a: "#FFFF00" },
  },
  palette4: {
    bg: { body: "#111111", h1: "#32CD32", p: "#2F4F4F", a: "#FF4500" },
    text: { h1: "#FF6347", p: "#FFFFFF", a: "#32CD32" },
  },
  palette5: {
    bg: { body: "#2C3E50", h1: "#9B59B6", p: "#34495E", a: "#E74C3C" },
    text: { h1: "#F39C12", p: "#FFFFFF", a: "#F39C12" },
  },
};

const ColorPalette = () => {
  const [selectedPalette, setSelectedPalette] = useState("");

  const handlePaletteSelect = (paletteName) => {
    setSelectedPalette(paletteName);
    console.log(`Selected Palette: ${paletteName}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Select a Funky Color Palette
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(funkyColorPalette).map((paletteName) => (
          <div
            key={paletteName}
            className={`p-6 rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              selectedPalette === paletteName
                ? "border-4 border-yellow-500 shadow-lg scale-105"
                : "hover:scale-105"
            }`}
            style={{
              backgroundColor: funkyColorPalette[paletteName].bg.body,
              borderColor:
                selectedPalette === paletteName ? "#FF007F" : "#FFFFFF",
            }}
            onClick={() => handlePaletteSelect(paletteName)}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: funkyColorPalette[paletteName].text.h1 }}
            >
              {paletteName}
            </h2>
            <p style={{ color: funkyColorPalette[paletteName].text.p }}>
              Background: {funkyColorPalette[paletteName].bg.body}
            </p>
            <a
              href="#"
              style={{
                color: funkyColorPalette[paletteName].text.a,
              }}
              className="underline"
            >
              This is a link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
