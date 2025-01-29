import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllTypeOfHeros from "./pages/AllTypeOfHeros.jsx";
import AllTypeOfRoadmap from "./pages/AllTypeOfRoadmap.jsx";
import CreateWebsite from "./pages/CreateWebsite.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/all-heros",
        element: (
          <>
            <AllTypeOfHeros />
          </>
        ),
      },
      {
        path: "/all-roadmap",
        element: (
          <>
            <AllTypeOfRoadmap />
          </>
        ),
      },
      {
        path: "/new-website",
        element: (
          <>
            <CreateWebsite />
          </>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
