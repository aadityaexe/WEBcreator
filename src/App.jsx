import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-pink-500 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <section aria-label="Main content" className="flex-grow p-6">
        <Suspense
          fallback={<div className="text-center text-lg">Loading...</div>}
        >
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
};

export default App;
