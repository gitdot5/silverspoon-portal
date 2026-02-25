import React from "react";
import Link from "next/link";
import "./globals.css";
import "./page.css";

export default function Home() {
  return (
    <div className="landing-container">
      <div className="hero-section animate-fade-in">
        <div className="hero-content">
          <div className="badge glass-panel">AI-Powered Account & Strategy</div>
          <h1 className="hero-title">
            Financial Optimization for the <span className="text-gradient">Restaurant Industry</span>
          </h1>
          <p className="hero-subtitle">
            Silverspoon Solutions helps restaurants achieve their financial objectives through AI-driven insights, specialized accounting, reporting, and strategic consulting.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
            <Link href="/dashboard" className="btn btn-secondary">Learn More</Link>
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
          <div className="ai-feature-badge">✨ AI-Powered Insights</div>
        </div>
      </div>

      <div className="features-section animate-fade-in">
        <div className="feature-card glass-panel">
          <span className="feature-icon">🤖</span>
          <h3>AI Assistant</h3>
          <p>Get instant answers about your financials with our AI-powered chat assistant on every page.</p>
        </div>
        <div className="feature-card glass-panel">
          <span className="feature-icon">📊</span>
          <h3>Smart Insights</h3>
          <p>AI analyzes your data to surface revenue trends, cost optimizations, and seasonal forecasts.</p>
        </div>
        <div className="feature-card glass-panel">
          <span className="feature-icon">💡</span>
          <h3>Strategic Recommendations</h3>
          <p>Receive actionable recommendations tailored to your restaurant&apos;s unique financial profile.</p>
        </div>
      </div>
    </div>
  );
}
