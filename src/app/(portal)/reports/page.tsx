import React from 'react';
import './page.css';

export default function ReportsPage() {
    return (
        <div className="reports-container">
            <div className="reports-header">
                <div>
                    <h1 className="page-title">Financial Reports</h1>
                    <p className="page-subtitle">Access your weekly P&L statements and operational insights.</p>
                </div>
                <button className="btn btn-primary">
                    <span className="btn-icon">+</span> Upload Document
                </button>
            </div>

            <div className="reports-content">
                <div className="reports-list glass-panel animate-fade-in" style={{ animationDelay: '0ms' }}>
                    <div className="list-header">
                        <h3>Recent Documents</h3>
                        <div className="filter-group">
                            <span className="filter-btn active">All</span>
                            <span className="filter-btn">Statements</span>
                            <span className="filter-btn">Invoices</span>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="reports-table">
                            <thead>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Type</th>
                                    <th>Date Added</th>
                                    <th>Size</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "P&L Statement - Wk 41", type: "Report", date: "Oct 24, 2026", size: "2.4 MB" },
                                    { name: "Sysco Invoice #99281", type: "Invoice", date: "Oct 22, 2026", size: "1.1 MB" },
                                    { name: "Labor Cost Analysis Q3", type: "Analysis", date: "Oct 15, 2026", size: "4.5 MB" },
                                    { name: "P&L Statement - Wk 40", type: "Report", date: "Oct 17, 2026", size: "2.3 MB" },
                                    { name: "US Foods Invoice #7712", type: "Invoice", date: "Oct 14, 2026", size: "0.8 MB" },
                                ].map((doc, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className="doc-name">
                                                <span className="doc-icon">📄</span>
                                                {doc.name}
                                            </div>
                                        </td>
                                        <td><span className={`doc-badge type-${doc.type.toLowerCase()}`}>{doc.type}</span></td>
                                        <td className="text-muted">{doc.date}</td>
                                        <td className="text-muted">{doc.size}</td>
                                        <td>
                                            <button className="action-btn">Download</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="reports-sidebar glass-panel animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <h3>Storage Usage</h3>
                    <div className="storage-info">
                        <div className="storage-bar">
                            <div className="storage-progress" style={{ width: '45%' }}></div>
                        </div>
                        <div className="storage-stats">
                            <span>4.5 GB used</span>
                            <span className="text-muted">10 GB total</span>
                        </div>
                    </div>

                    <div className="upload-zone mt-4">
                        <div className="upload-icon">📁</div>
                        <p>Drag & drop files here</p>
                        <p className="text-xs text-muted">PDF, EXCEL, or JPEG</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
