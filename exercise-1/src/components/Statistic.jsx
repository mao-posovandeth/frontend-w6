import React from "react";

export default function Statistic({ results }) {
  if (!results || results.length === 0) return null;

  const scores = results.map((r) => Number(r.score) || 0);
  const sum = scores.reduce((a, b) => a + b, 0);
  const avg = Math.round(sum / scores.length);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-label">AVERAGE</div>
        <div className="stat-value">{avg}</div>
      </div>
      <div className="stat">
        <div className="stat-label">MIN</div>
        <div className="stat-value">{min}</div>
      </div>
      <div className="stat">
        <div className="stat-label">MAX</div>
        <div className="stat-value">{max}</div>
      </div>
    </div>
  );
}
