import React from 'react';
import './App.css';

export default function DomainPage() {
  const domains = [
    'Web Development',
    'Graphic Design',
    'Video Editing',
    'Content Writing',
    'Data Analysis',
    'App Development',
    'Marketing',
  ];

  return (
    <div className="domain-container">
      <h1>Choose Your Work Domain</h1>
      <div className="domain-grid">
        {domains.map((domain, i) => (
          <button key={i} className="domain-card">
            {domain}
          </button>
        ))}
      </div>

      <p className="back-link" onClick={() => window.history.back()}>
        ← Back to Previous Page
      </p>
    </div>
  );
}
