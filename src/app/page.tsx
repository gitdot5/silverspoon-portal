import React from "react";
import Link from "next/link";
import "./globals.css";
import "./page.css";

export default function Home() {
  return (
    <div className="landing-container">
      <div className="hero-section animate-fade-in">
        <div className="hero-content">
          <div className="badge glass-panel">Account & Strategy</div>
          <h1 className="hero-title">
            Financial Optimization for the <span className="text-gradient">Restaurant Industry</span>
          </h1>
          <p className="hero-subtitle">
            Silverspoon Solutions helps restaurants achieve their financial objectives through specialized accounting, reporting, and strategic consulting.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-visual glass-panel">
          <div className="placeholder-chart">
            <div className="chart-bar" style={{ height: "40%" }}></div>
            <div className="chart-bar" style={{ height: "65%" }}></div>
            <div className="chart-bar" style={{ height: "50%" }}></div>
            <div className="chart-bar" style={{ height: "85%", background: "var(--accent-primary)", boxShadow: "var(--shadow-glow)" }}></div>
            <div className="chart-bar" style={{ height: "70%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
