import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllTypeOfHeros from "./pages/AllTypeOfHeros.jsx";
import AllTypeOfRoadmap from "./pages/AllTypeOfRoadmap.jsx";
import CreateWebsite from "./pages/CreateWebsite.jsx";
import EnterWebsiteInfo from "./pages/EnterWebsiteInfo.jsx";
import SeeCreatedWebsite from "./pages/SeeCreatedWebsite.jsx";
import GetWebsiteCode from "./pages/GetWebsiteCode.jsx";
import { ContentProvider } from "./Store/ContentValues.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-heros", element: <AllTypeOfHeros /> },
      { path: "/all-roadmap", element: <AllTypeOfRoadmap /> },
      { path: "/new-website", element: <CreateWebsite /> },
      { path: "/enter-website-info", element: <EnterWebsiteInfo /> },
      { path: "/see-created-website", element: <SeeCreatedWebsite /> },
      { path: "/get-website-code", element: <GetWebsiteCode /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ContentProvider>
    <RouterProvider router={router} />
  </ContentProvider>
);
