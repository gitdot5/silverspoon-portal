import React from 'react';
import './page.css';

export default function StrategyPage() {
    return (
        <div className="strategy-container">
            <div className="strategy-header">
                <div>
                    <h1 className="page-title">Consulting & Strategy</h1>
                    <p className="page-subtitle">Track your actionable insights and profit optimization goals.</p>
                </div>
                <div className="rep-contact glass-panel">
                    <div className="rep-avatar">SJ</div>
                    <div className="rep-info">
                        <span className="rep-name">Sarah Jenkins</span>
                        <span className="rep-role">Your Silverspoon Consultant</span>
                    </div>
                    <button className="btn btn-secondary btn-sm ml-auto">Message</button>
                </div>
            </div>

            <div className="strategy-grid">
                <div className="strategy-card glass-panel animate-fade-in" style={{ animationDelay: '0ms' }}>
                    <div className="card-header">
                        <h3>Current Optimization Phase</h3>
                        <span className="phase-badge">Phase 3: Profit Optimization</span>
                    </div>
                    <div className="phase-progress">
                        <div className="progress-steps">
                            <div className="step completed"><div className="step-dot"></div><span>Analysis</span></div>
                            <div className="step completed"><div className="step-dot"></div><span>Strategy</span></div>
                            <div className="step active"><div className="step-dot"></div><span>Optimization</span></div>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: '85%' }}></div>
                        </div>
                        <p className="phase-desc text-muted mt-4">
                            We are currently focusing on executing your action plan to minimize labor variance and negotiate vendor pricing for dairy products.
                        </p>
                    </div>
                </div>

                <div className="strategy-card glass-panel animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <div className="card-header">
                        <h3>Action Items</h3>
                        <button className="text-btn">View All</button>
                    </div>
                    <ul className="action-list">
                        <li className="action-item">
                            <input type="checkbox" className="custom-checkbox" id="task1" />
                            <label htmlFor="task1" className="action-label">
                                <span className="action-title">Review proposed Sysco contract changes</span>
                                <span className="action-due error-text">Due: Oct 25</span>
                            </label>
                        </li>
                        <li className="action-item">
                            <input type="checkbox" className="custom-checkbox" id="task2" />
                            <label htmlFor="task2" className="action-label">
                                <span className="action-title">Adjust BOH schedule for next period based on forecast</span>
                                <span className="action-due text-muted">Due: Oct 28</span>
                            </label>
                        </li>
                        <li className="action-item completed-item">
                            <input type="checkbox" className="custom-checkbox" id="task3" checked readOnly />
                            <label htmlFor="task3" className="action-label">
                                <span className="action-title">Submit weekly inventory counts</span>
                                <span className="action-due success-text">Completed</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
