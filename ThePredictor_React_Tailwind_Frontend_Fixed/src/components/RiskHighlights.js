import React from 'react';
export default function RiskHighlights() {
  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold">Top 3 Athlete Risk Highlights</h2>
      <ol className="list-decimal list-inside">
        <li><strong>High-Risk Category:</strong> High workload variance and injury history.</li>
        <li><strong>Recovery Timeline:</strong> Estimated 3-week recovery needed.</li>
        <li><strong>Rest Recommendation:</strong> Monitor biomechanics and reduce training intensity.</li>
      </ol>
    </section>
  );
}
