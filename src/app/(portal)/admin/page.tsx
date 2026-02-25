import React from 'react';
import './page.css';

export default function AdminPage() {
    return (
        <div className="admin-container">
            <div className="admin-header">
                <div>
                    <h1 className="page-title">Admin Console</h1>
                    <p className="page-subtitle">Manage clients, teams, and system configurations.</p>
                </div>
                <div className="admin-actions">
                    <button className="btn btn-primary">+ Add New Client</button>
                </div>
            </div>

            <div className="admin-grid">
                <div className="admin-card glass-panel animate-fade-in" style={{ animationDelay: '0ms' }}>
                    <div className="card-header border-bottom">
                        <h3>Client Overview</h3>
                        <div className="search-bar">
                            <span className="search-icon">🔍</span>
                            <input type="text" placeholder="Search clients..." className="search-input" />
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Restaurant Name</th>
                                    <th>Status</th>
                                    <th>Assigned Rep</th>
                                    <th>Last Login</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-medium">The Coastal Catch</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td>Sarah Jenkins</td>
                                    <td className="text-muted">Today, 09:41 AM</td>
                                    <td><button className="text-btn">Manage</button></td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Downtown Diner</td>
                                    <td><span className="status-badge pending">Onboarding</span></td>
                                    <td>Mark Stevenson</td>
                                    <td className="text-muted">Yesterday</td>
                                    <td><button className="text-btn">Manage</button></td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Luna Pizzeria</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td>Sarah Jenkins</td>
                                    <td className="text-muted">Oct 20, 2026</td>
                                    <td><button className="text-btn">Manage</button></td>
                                </tr>
                                <tr>
                                    <td className="font-medium">Oasis Lounge (Inactive)</td>
                                    <td><span className="status-badge inactive">Inactive</span></td>
                                    <td>Unassigned</td>
                                    <td className="text-muted">Sep 15, 2026</td>
                                    <td><button className="text-btn">Manage</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="admin-sidebar">
                    <div className="admin-card glass-panel mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                        <h3>System Health</h3>
                        <ul className="health-stats mt-4">
                            <li className="stat-row">
                                <span className="text-muted">API Status</span>
                                <span className="success-text font-medium">100% Uptime</span>
                            </li>
                            <li className="stat-row">
                                <span className="text-muted">Sync Queue</span>
                                <span className="font-medium">0 Pending</span>
                            </li>
                            <li className="stat-row">
                                <span className="text-muted">DB Connections</span>
                                <span className="font-medium">24 / 100</span>
                            </li>
                        </ul>
                    </div>

                    <div className="admin-card glass-panel animate-fade-in" style={{ animationDelay: '200ms' }}>
                        <h3>Quick Links</h3>
                        <div className="quick-links mt-4">
                            <a href="#" className="quick-link-item">
                                <span className="link-icon">👥</span> Manage Team
                            </a>
                            <a href="#" className="quick-link-item">
                                <span className="link-icon">⚙️</span> Platform Settings
                            </a>
                            <a href="#" className="quick-link-item">
                                <span className="link-icon">📊</span> Export System Logs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
