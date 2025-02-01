import { useState } from "react";
import { FaCopy, FaRandom } from "react-icons/fa";

const funkyColorPalette = [
  {
    name: "Electric Dream",
    colors: {
      bg: "#111111",
      h1: "#FF007F",
      p: "#1D1D1D",
      a: "#00FF00",
      gradient: "linear-gradient(45deg, #FF007F, #00FF00)",
    },
  },
  {
    name: "Neon Blaze",
    colors: {
      bg: "#0A0A0A",
      h1: "#FF8C00",
      p: "#333333",
      a: "#FF1493",
      gradient: "linear-gradient(45deg, #FF8C00, #FF1493)",
    },
  },
];

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const ColorPaletteSelector = () => {
  const [selectedPalette, setSelectedPalette] = useState("");
  const [colors, setColors] = useState({
    bg: "#111111",
    h1: "#FF007F",
    p: "#1D1D1D",
    a: "#00FF00",
    gradient: "",
  });
  const [isGradient, setIsGradient] = useState(false);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const handlePaletteSelect = (paletteName) => {
    setSelectedPalette(paletteName);
    const selected = funkyColorPalette.find((p) => p.name === paletteName);
    setColors(selected ? selected.colors : colors);
    setIsGradient(false);
  };

  const handleColorChange = (element, newColor) => {
    setColors((prev) => ({ ...prev, [element]: newColor }));
  };

  const handleGradientChange = (newGradient) => {
    setColors((prev) => ({ ...prev, gradient: newGradient }));
  };

  const handleRandomPalette = () => {
    const randomColors = {
      bg: getRandomColor(),
      h1: getRandomColor(),
      p: getRandomColor(),
      a: getRandomColor(),
      gradient: `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`,
    };
    setColors(randomColors);
  };

  const handleSavePalette = () => {
    setSavedPalettes([...savedPalettes, { ...colors }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Funky Color Palette Selector 🎨
      </h1>

      {/* Palette Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {funkyColorPalette.map((palette) => (
          <div
            key={palette.name}
            className={`p-4 rounded-lg cursor-pointer transform transition ${
              selectedPalette === palette.name
                ? "border-4 border-yellow-500 shadow-lg scale-105"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: palette.colors.bg }}
            onClick={() => handlePaletteSelect(palette.name)}
          >
            <h2
              className="text-xl font-semibold text-white"
              style={{ color: palette.colors.h1 }}
            >
              {palette.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Background Option */}
      <div className="flex items-center justify-center space-x-6 mb-6">
        <label className="text-white text-lg">
          <input
            type="radio"
            name="backgroundOption"
            checked={!isGradient}
            onChange={() => setIsGradient(false)}
            className="mr-2"
          />
          Solid Color
        </label>
        <label className="text-white text-lg">
          <input
            type="radio"
            name="backgroundOption"
            checked={isGradient}
            onChange={() => setIsGradient(true)}
            className="mr-2"
          />
          Gradient
        </label>
      </div>

      {/* Color Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["bg", "h1", "p", "a"].map((key) => (
          <div key={key} className="text-white text-center">
            <p className="text-xl">{key.toUpperCase()}</p>
            <input
              type="color"
              value={colors[key]}
              onChange={(e) => handleColorChange(key, e.target.value)}
              className="w-full h-12 rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Random & Save Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handleRandomPalette}
          className="px-4 py-2 bg-yellow-500 text-black rounded-lg flex items-center"
        >
          <FaRandom className="mr-2" /> Random Palette
        </button>
        <button
          onClick={handleSavePalette}
          className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center"
        >
          <FaCopy className="mr-2" /> Save Palette
        </button>
      </div>

      {/* Saved Palettes */}
      {savedPalettes.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl text-white mb-2">Saved Palettes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {savedPalettes.map((palette, index) => (
              <div
                key={index}
                className="p-4 rounded-lg cursor-pointer"
                style={{ backgroundColor: palette.bg }}
                onClick={() => setColors(palette)}
              >
                <h3 className="text-white">{`Palette ${index + 1}`}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Preview */}
      <div
        className="p-6 rounded-lg"
        style={{ background: isGradient ? colors.gradient : colors.bg }}
      >
        <h1 className="text-4xl font-bold" style={{ color: colors.h1 }}>
          Heading Example
        </h1>
        <p className="text-lg" style={{ color: colors.p }}>
          This is a sample paragraph with the selected color.
        </p>
        <a href="#" className="underline" style={{ color: colors.a }}>
          Sample Link
        </a>
      </div>
    </div>
  );
};

export default ColorPaletteSelector;
