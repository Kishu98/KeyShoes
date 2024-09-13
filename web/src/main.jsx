import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   }
// ])

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
