import React from 'react';
import UploadSection from './components/UploadSection';
import DashboardEmbed from './components/DashboardEmbed';
import FeedbackSection from './components/FeedbackSection';
import RiskHighlights from './components/RiskHighlights';

export default function App() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">The Predictor - Athlete Risk Monitoring System</h1>
      <UploadSection />
      <DashboardEmbed />
      <FeedbackSection />
      <RiskHighlights />
    </div>
  );
}
