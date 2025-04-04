import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="p-6 space-y-10 bg-black text-white">
      <section className="text-center space-y-4 bg-gradient-to-br from-red-700 to-red-900 text-white p-10 rounded-xl relative shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
          alt="Canadian Flag"
          className="absolute top-6 right-6 w-12 drop-shadow-md rounded"
        />
        <h1 className="text-4xl font-bold">
          Field-Ready Cybersecurity for Public Infrastructure
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          AlertLine protects the overlooked OT networks powering Canada’s water treatment plants, solar fields, and municipal infrastructure — the systems that keep the public safe, clean, and powered.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded">Get Protected for $500</button>
          <button className="border border-white text-white hover:bg-white hover:text-red-800 px-4 py-2 rounded">See the Device</button>
        </div>
      </section>

      <section className="p-6 rounded-xl bg-gray-900 text-white text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-400">Public Infrastructure Is Under Attack</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From ransomware targeting water plants to unauthorized access at solar fields, the threat is real — and growing. 
        </p>
        <div className="flex overflow-x-auto space-x-4 py-4 justify-center">
          <img src="https://via.placeholder.com/300x200?text=Threat+1" className="w-72 rounded shadow" alt="Threat 1" />
          <img src="https://via.placeholder.com/300x200?text=Threat+2" className="w-72 rounded shadow" alt="Threat 2" />
          <img src="https://via.placeholder.com/300x200?text=Threat+3" className="w-72 rounded shadow" alt="Threat 3" />
        </div>
      </section>

      <section className="bg-white text-gray-800 p-6 rounded-xl text-center space-y-4">
        <blockquote className="italic text-red-700">
          “We built AlertLine because we were tired of watching rural communities, mid-sized plants, and critical infrastructure get left behind.”
        </blockquote>
        <ul className="list-disc list-inside max-w-md mx-auto text-left">
          <li>Built by field engineers, not boardrooms</li>
          <li>Deploys in 15 minutes</li>
          <li>Transparent pricing — no fluff, no upsells</li>
          <li>Canadian-made, mission-driven</li>
        </ul>
        <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">Read Our Story</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-gray-900 shadow rounded p-6 space-y-4">
          <h2 className="text-2xl font-bold text-red-800">AlertLine – One</h2>
          <p>$500 CAD</p>
          <ul className="list-disc list-inside">
            <li>Plug-and-play OT security assessment device</li>
            <li>SCADA-compatible</li>
            <li>Perfect for municipalities and solar/wind sites</li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">Learn More</button>
            <button className="border border-gray-500 px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
        <div className="bg-white text-gray-900 shadow rounded p-6 space-y-4">
          <h2 className="text-2xl font-bold text-red-800">AlertLine – Sentinel</h2>
          <p>$1,200 CAD + $500/year</p>
          <ul className="list-disc list-inside">
            <li>Ongoing lightweight monitoring</li>
            <li>Detects anomalies, new devices, threats</li>
            <li>Alerts in real-time</li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">Learn More</button>
            <button className="border border-gray-500 px-4 py-2 rounded">Request Demo</button>
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 p-6 rounded-xl text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-800">Support Cybersecurity for Canada's Public Infrastructure</h2>
        <p>Sign our petition to help bring affordable cybersecurity monitoring to small towns and rural municipalities.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
          <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">Sign the Petition</button>
        </form>
      </section>

      <section className="bg-red-100 p-6 rounded-xl text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-800">Mission-Driven Security</h2>
        <p>
          “AlertLine was born out of burnout, frustration, and love for the places most vendors ignore.
          We protect the pump houses, water plants, and solar fields that keep Canada running.”
        </p>
        <ul className="list-disc list-inside max-w-md mx-auto text-left">
          <li>Founded by Anthony Edgar, CISSP-certified OT & IT specialist</li>
          <li>Inspired by years of municipal field support</li>
        </ul>
        <div className="flex justify-center gap-4">
          <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">Join Our Mission</button>
          <button className="border border-gray-500 px-4 py-2 rounded">Work With Us</button>
        </div>
      </section>
    </div>
  </React.StrictMode>
);

