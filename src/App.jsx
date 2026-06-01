import { useState } from "react";
import Home from "./pages/Home";
function App() {
    const [device,setDevice]=useState("desktop");
      const widths = {
        desktop: "100%",
        laptop: "1200px",
        tablet:"768px",
        mobile:"600px",
      };
      return (
        <div>
          <div className="device-bar">
            <button onClick={() => setDevice("desktop")}>🖥️</button>
            <button onClick={() => setDevice("laptop")}>💻</button>
            <button onClick={() => setDevice("tablet")}>📱</button>
            <button onClick={() => setDevice("mobile")}>📲</button>
          </div>
          <div style={{
              width:widths[device],
              margin: "0 auto",
              transition: "0.3s",
              overflow:"hidden",
              border:"1px solid #ddd",
            }}
            >
              <Home />
            </div>
          </div>
      );
}
export default App;