import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
