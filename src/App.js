import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <section className="text-center space-y-4 bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] text-white p-10 rounded-xl relative shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
          alt="Canadian Flag"
          className="absolute top-6 right-6 w-12 drop-shadow-md rounded"
        />
        <h1 className="text-4xl font-bold">
          Field-Ready Cybersecurity for Public Infrastructure
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          AlertLine protects the overlooked OT networks powering Canada’s water
          treatment plants, solar fields, and municipal infrastructure — the
          systems that keep the public safe, clean, and powered.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded font-semibold">
            Get Protected for $500
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-red-800 px-4 py-2 rounded">
            See the Device
          </button>
        </div>
      </section>

      <section className="p-10 bg-[#1a1a2e] text-white text-center">
        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Public Infrastructure Is Under Attack
        </h2>
        <p className="max-w-2xl mx-auto mb-4">
          From ransomware targeting water plants to unauthorized access at solar
          fields, the threat is real — and growing.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div>
            <img
              src="https://placehold.co/300x200?text=Threat+1"
              className="w-72 rounded shadow"
              alt="Threat 1"
            />
            <p className="mt-2">Threat 1</p>
          </div>
          <div>
            <img
              src="https://placehold.co/300x200?text=Threat+2"
              className="w-72 rounded shadow"
              alt="Threat 2"
            />
            <p className="mt-2">Threat 2</p>
          </div>
          <div>
            <img
              src="https://placehold.co/300x200?text=Threat+3"
              className="w-72 rounded shadow"
              alt="Threat 3"
            />
            <p className="mt-2">Threat 3</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black p-10 text-center">
        <blockquote className="italic text-red-700 max-w-2xl mx-auto">
          “We built AlertLine because we were tired of watching rural
          communities, mid-sized plants, and critical infrastructure get left
          behind.”
        </blockquote>
        <ul className="list-disc list-inside max-w-md mx-auto mt-6 text-left">
          <li>Built by field engineers, not boardrooms</li>
          <li>Deploys in 15 minutes</li>
          <li>Transparent pricing — no fluff, no upsells</li>
          <li>Canadian-made, mission-driven</li>
        </ul>
      </section>
    </div>
  );
}
