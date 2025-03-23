
import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <header className="text-3xl font-bold mb-6">The Predictor</header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Upload Athlete Data</h2>
        <p>Upload Excel (.xlsx/.csv) file or connect real-time data for ML analysis.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Dashboard Embed Section</h2>
        <iframe
          src="https://the-predictor-dashboard.streamlit.app"
          title="Dashboard Preview"
          className="w-full h-[500px] border rounded"
        />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Athlete Feedback Message</h2>
        <p>Stay consistent with your custom training and recovery routine.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Top 3 Athlete Risk Highlights</h2>
        <p><strong>1. High-Risk Category:</strong> Athlete X has high workload variance.</p>
        <p><strong>2. Recovery Timeline:</strong> Projected risk in 3 weeks.</p>
      </section>
    </div>
  );
}
