import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components2/Navbar";

import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import ProductsPage from "./Pages/ProductPage";

function App() {
  const [device, setDevice] = useState("desktop");

  const widths = {
    desktop: "100%",
    laptop: "1200px",
    tablet: "768px",
    mobile: "375px",
  };

  return (
    <BrowserRouter>
      <div>
        <div
          className="device-bar"
          style={{
            textAlign: "center",
            padding: "10px",
            background: "#f5f5f5",
          }}
        >
          <button onClick={() => setDevice("desktop")}>🖥️ Desktop</button>
          <button onClick={() => setDevice("laptop")}>💻 Laptop</button>
          <button onClick={() => setDevice("tablet")}>📱 Tablet</button>
          <button onClick={() => setDevice("mobile")}>📲 Mobile</button>
        </div>

        <Navbar />

        <div
          style={{
            width: widths[device],
            margin: "90px auto 0",
            transition: "0.3s ease-in-out",
            minHeight: "100vh",
            background: "#fff",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;