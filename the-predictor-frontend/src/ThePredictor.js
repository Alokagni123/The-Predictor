import React from "react";
import "./index.css";

function ThePredictor() {
  return (
    <div className="px-6 py-8 font-sans text-gray-900">
      <h1 className="text-3xl font-bold mb-4">The Predictor</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Upload Athlete Data</h2>
        <p>Upload Excel (.xlsx/.csv) file or connect real-time data for ML analysis.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Analytical Dashboard</h2>
        <iframe
          src="https://your-streamlit-app-link"
          width="100%"
          height="600"
          title="Dashboard"
          className="border border-gray-300"
        />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Athlete Feedback Message</h2>
        <p>
          Based on your performance metrics and recovery trends, stay consistent
          with your custom training plan and recovery routine. Your projected risk
          period is approaching in 3 weeks — prioritize rest and monitor biomechanics.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Top 3 Athlete Risk Highlights</h2>
        <ol className="list-decimal pl-6">
          <li className="font-bold">High-Risk Category</li>
          <p>Athlete X has consistently high workload variance and history of knee injuries.</p>
          <li className="font-bold mt-2">Recovery Timeline</li>
          <li className="font-bold mt-2">Workload Patterns</li>
        </ol>
      </section>
    </div>
  );
}

export default ThePredictor;
