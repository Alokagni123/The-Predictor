import React from 'react';
export default function DashboardEmbed() {
  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold">Analytical Dashboard</h2>
      <iframe
        src="https://thepredictor.streamlit.app"
        title="Dashboard"
        width="100%"
        height="500"
        frameBorder="0"
      />
    </section>
  );
}
