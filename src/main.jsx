import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

import "remixicon/fonts/remixicon.css";
import "./index.css";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Loader />
    <div className="container mx-auto px-4  ">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
