import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/store.jsx";
import Services from "./routes/mobo";
import WebDesign from "./routes/cpu.jsx";
import WebDev from "./routes/graphic";
import Frontend from "./routes/ram.jsx";
import Php from "./routes/fan.jsx";
import NodeJs from "./routes/storage.jsx";
import SEO from "./routes/cooler.jsx";
import Power from "./routes/psu.jsx";
import Case from "./routes/case.jsx";
import Main from "./routes/main";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "mobo",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cpu",
        element: <WebDesign />,
      },
      {
        path: "graphic",
        element: <WebDev />,
      },
      {
        path: "ram",
        element: <Frontend />,
      },
      {
        path: "storage",
        element: <NodeJs />,
      },
      {
        path: "fan",
        element: <Php />,
      },
      {
        path: "cooler",
        element: <SEO />,
      },
      {
        path: "psu",
        element: <Power />,
      },
      {
        path: "case",
        element: <Case />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
