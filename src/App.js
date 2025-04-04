import React from "react";
import "./index.css";

function App() {
  return (
    <div className="p-6 space-y-10 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#000000)] text-gray-100">
      <section className="text-center space-y-4 bg-gradient-to-br from-[#d71920] to-[#800000] text-white p-10 rounded-xl relative shadow-lg">
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
          <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded">
            Get Protected for $500
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-red-800 px-4 py-2 rounded">
            See the Device
          </button>
        </div>
        <p className="text-sm text-white mt-4">
          <strong>⚠️ Recent Energy Grid Attacks:</strong> The rise in
          cyberattacks on public utilities, including coordinated threats to
          U.S. energy grids and solar management platforms, has shown how
          fragile decentralized infrastructure can be without basic monitoring.{" "}
          <a
            href="https://www.reuters.com/technology/cybersecurity/water-utility-american-water-disconnects-computers-following-cybersecurity-2024-10-08/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-yellow-300"
          >
            American Water breach (2024)
          </a>{" "}
          proved how exposed these systems are. With Canada facing increased
          geopolitical pressure, cyber threats to critical OT infrastructure are
          expected to grow.
        </p>
      </section>

      <section className="p-6 rounded-xl bg-black text-white space-y-4 text-center">
        <h2 className="text-3xl font-bold text-red-600">
          Public Infrastructure Is Under Attack
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From ransomware targeting water plants to unauthorized access at solar
          fields, the threat is real — and growing. These images highlight the
          global shift toward attacking unprotected OT systems.
        </p>
        <div className="flex overflow-x-auto space-x-4 py-4">
          <img
            src="https://via.placeholder.com/300x200?text=Threat+1"
            alt="Cyberattack on a water plant"
            className="w-72 rounded shadow"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Threat+2"
            alt="Substation breach visualization"
            className="w-72 rounded shadow"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Threat+3"
            alt="SCADA exploitation"
            className="w-72 rounded shadow"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Threat+4"
            alt="Solar farm threat simulation"
            className="w-72 rounded shadow"
          />
        </div>
      </section>

      <section className="text-center bg-white p-6 rounded-xl shadow space-y-4">
        <blockquote className="italic text-red-800">
          “We built AlertLine because we were tired of watching rural
          communities, mid-sized plants, and critical infrastructure get left
          behind. The big vendors don’t show up here. So we did.”
        </blockquote>
        <p className="text-gray-700 max-w-xl mx-auto mb-4">
          Current OT cybersecurity solutions are often priced for massive
          enterprise clients — leaving public infrastructure like municipal
          water treatment and solar fields behind. AlertLine is different. We
          built it from the ground up to be affordable, fast to deploy, and
          designed for the people who actually run these systems every day.
        </p>
        <ul className="list-disc list-inside max-w-md mx-auto text-left text-gray-700">
          <li>Built by field engineers, not boardrooms</li>
          <li>Designed to be installed in under 15 minutes</li>
          <li>Transparent pricing — no fluff, no upsells</li>
          <li>Canadian-made, mission-driven</li>
        </ul>
        <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">
          Read Our Story
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded">
          <div className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-red-800">
              AlertLine – One
            </h2>
            <p className="text-lg font-medium">$500 CAD</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Plug-and-play OT security assessment device</li>
              <li>Passive scans, protocol inspection, asset mapping</li>
              <li>Reports mapped to NIST 800-82 and IEC 62443</li>
              <li>
                Perfect for municipalities, public utilities, and first-time OT
                risk assessments
              </li>
              <li>
                SCADA-compatible — adds cybersecurity visibility to systems like
                municipal water treatment, solar fields, and wind farms
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">
                Learn More
              </button>
              <button className="border border-gray-400 px-4 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded">
          <div className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-red-800">
              AlertLine – Sentinel
            </h2>
            <p className="text-lg font-medium">$1,200 CAD + $500/year</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Lightweight monitoring box for ongoing visibility</li>
              <li>Detects new devices, suspicious activity, protocol anomalies</li>
              <li>Deploys in minutes, alerts in real time</li>
              <li>
                Integrates with SCADA environments to secure essential public
                infrastructure — including water systems, renewable energy
                sites, and rural municipal assets
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">
                Learn More
              </button>
              <button className="border border-gray-400 px-4 py-2 rounded">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 p-6 rounded-xl shadow space-y-4 text-center">
        <h2 className="text-3xl font-bold text-red-800">
          Support Cybersecurity for Canada's Public Infrastructure
        </h2>
        <p className="text-gray-800 max-w-xl mx-auto">
          Sign our petition to help bring affordable cybersecurity monitoring to
          small towns, rural municipalities, and overlooked utilities. Your
          support strengthens our case for national funding and regulatory
          attention.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            placeholder="Name"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
          />
          <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">
            Sign the Petition
          </button>
        </form>
      </section>

      <section className="bg-red-100 p-6 rounded-xl space-y-4 text-center">
        <h2 className="text-3xl font-bold text-red-800">Mission-Driven Security</h2>
        <p className="text-gray-800">
          “AlertLine was born out of burnout, frustration, and love for the
          places most vendors ignore. We don’t chase enterprise clients — we
          protect the pump houses, water plants, and control cabinets that keep
          Canada running.”
        </p>
        <ul className="list-disc list-inside max-w-md mx-auto text-left text-gray-700">
          <li>
            Founded by Anthony Edgar, a CISSP-certified OT & IT specialist
            dedicated to building something that actually matters — AlertLine
          </li>
          <li>
            Inspired by years of municipal support, industrial field work, and
            community loyalty
          </li>
        </ul>
        <div className="flex justify-center gap-4">
          <button className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded">
            Join Our Mission
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded">
            Work With Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
