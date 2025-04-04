""import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] text-white py-24 px-6 shadow-md relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
          alt="Canadian Flag"
          className="absolute top-6 right-6 w-12 drop-shadow-md rounded"
        />
        <h1 className="text-5xl font-extrabold mb-4">
          Field-Ready Cybersecurity for Public Infrastructure
        </h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          AlertLine protects the overlooked OT networks powering Canada’s water treatment plants, solar fields, and municipal infrastructure — the systems that keep the public safe, clean, and powered.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-3 rounded font-bold shadow">
            Get Protected for $500
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-red-800 px-6 py-3 rounded font-bold">
            See the Device
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-red-800"></div>

      {/* Threat Section */}
      <section className="py-24 px-6 bg-[#111827] text-white text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-8">
          Public Infrastructure Is Under Attack
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg">
          From ransomware targeting water plants to unauthorized access at solar fields, the threat is real — and growing.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SCADA_Security_Diagram.png/640px-SCADA_Security_Diagram.png"
              className="w-72 rounded shadow-md"
              alt="Threat 1 - SCADA Security"
            />
            <p className="mt-3 text-sm text-gray-300">SCADA Exploitation</p>
          </div>
          <div>
            <img
              src="https://www.dragos.com/wp-content/uploads/2022/05/CaseStudy-Ransomware-OT-ICS.jpg"
              className="w-72 rounded shadow-md"
              alt="Threat 2 - Ransomware in Industrial Control Systems"
            />
            <p className="mt-3 text-sm text-gray-300">Ransomware in ICS</p>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Solar_Panel_Field.jpg/640px-Solar_Panel_Field.jpg"
              className="w-72 rounded shadow-md"
              alt="Threat 3 - Solar Field Vulnerability"
            />
            <p className="mt-3 text-sm text-gray-300">Solar Field Vulnerability</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gray-700"></div>

      {/* Values Section */}
      <section className="bg-white text-black py-24 px-6 text-center">
        <blockquote className="italic text-red-700 text-xl max-w-2xl mx-auto mb-6">
          “We built AlertLine because we were tired of watching rural communities, mid-sized plants, and critical infrastructure get left behind.”
        </blockquote>
        <ul className="list-disc list-inside max-w-md mx-auto space-y-3 text-left">
          <li>Built by field engineers, not boardrooms</li>
          <li>Deploys in 15 minutes</li>
          <li>Transparent pricing — no fluff, no upsells</li>
          <li>Canadian-made, mission-driven</li>
        </ul>
      </section>

      {/* Divider */}
      <div className="h-1 bg-red-800"></div>

      {/* Real Incidents Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Real Incidents, Real Risk
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          In 2024, the American Water utility was breached, impacting systems across 14 states. With infrastructure decentralizing and threat actors becoming more aggressive, small and mid-sized public assets have become easy targets.
        </p>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gray-700"></div>

      {/* Petition Section */}
      <section className="py-24 px-6 bg-white text-center text-black">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Support the Mission
        </h2>
        <p className="max-w-xl mx-auto text-lg">
          AlertLine isn’t just a product — it’s a movement to protect the public infrastructure we all rely on. Our petition calls for more visibility and urgency around OT cybersecurity in rural and municipal systems.
        </p>
        <div className="mt-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
            Sign the Petition
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-gray-400 text-center py-6">
        <p>© 2025 AlertLine. Built in Ontario, for Canada. 🇨🇦</p>
      </footer>
    </div>
  );
}



