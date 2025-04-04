
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center text-center p-10">
    <div>
      <h1 className="text-4xl font-bold mb-4">AlertLine – Public Infrastructure Cybersecurity</h1>
      <p className="mb-4">We're launching soon. Our mission is simple: protect the OT networks Canada relies on — affordably and accessibly.</p>
      <p>Built by field engineers. Backed by the public. 🇨🇦</p>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
